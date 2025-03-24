import { createContext, useReducer } from "react";
import createAction from '../utils/reducer/reducer.utils';
//Add Product
const addCardItem = (cardItems, productToAdd) => {
    // * find if cardItems contains productToAdd
    const existingCardItem = cardItems.find((items) =>
        items.id === productToAdd.id
    );
    // * if found, increment quantity
    if (existingCardItem) {
        return cardItems.map((item) => item.id === productToAdd.id ?
            { ...item, quantity: item.quantity + 1 }
            : item
        )
    }
    // * return new array with modified cardItems/ New cardItem
    return [...cardItems, { ...productToAdd, quantity: 1 }];
}
//Clear Product
const clearCardItem = (cardItems, clearToItem) => cardItems.filter(items => items.id !== clearToItem.id);
//Delete Product
const deleteCardItem = (cardItems, productToAdd) => {
    //find if cardItem contain productToDelete
    const existingCardItem = cardItems.find((item) =>
        item.id === productToAdd.id
    );

    if (existingCardItem.quantity === 1) {
        return cardItems.filter(items => items.id !== productToAdd.id);

    }
    //if found, decrement quantity
    if (existingCardItem) {
        return cardItems.map((item) => item.id === productToAdd.id ?
            { ...item, quantity: item.quantity - 1 }
            : item
        )
    }
    //return new array after delete
    return [...cardItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cardItems: [],
    cardCount: 0,
    cardTotal: 0,
    addItemToCard: () => { },
    deleteItemToCard: () => { },
    clearItemToCard: () => { }
});

const INITIAL_STATE = {
    isCartOpen: false,
    cardItems: [],
    cardCount: 0,
    cardTotal: 0,
}

export const CART_ACTION_TYPE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in CartReducer`);
    }
}

export const CartProvider = ({ children }) => {

    const [{
        isCartOpen,
        cardItems,
        cardCount,
        cardTotal
    }, dispatch] = useReducer(CartReducer, INITIAL_STATE);


    const updateCartItemsReducer = (newCartItem) => {
        const newCartCount = newCartItem.reduce((total, cartItem) => total + cartItem.quantity, 0);

        const newCartTotal = newCartItem.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

        dispatch(
            createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
                cardItems: newCartItem,
                cardTotal: newCartTotal,
                cardCount: newCartCount
            }));
    };

    const addItemToCard = (productToAdd) => {
        const newCartItems = addCardItem(cardItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const deleteItemToCard = (productToAdd) => {
        const newCartItems = deleteCardItem(cardItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemToCard = (clearToItem) => {
        const newCartItems = clearCardItem(cardItems, clearToItem);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));

    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCard,
        deleteItemToCard,
        clearItemToCard,
        cardItems,
        cardCount,
        cardTotal
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};