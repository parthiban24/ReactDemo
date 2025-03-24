import createAction from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPE } from "./cart.types";
import { createSelector } from "reselect";

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

export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);
}


export const addItemToCard = (cardItems, productToAdd) => {
    const newCartItems = addCardItem(cardItems, productToAdd);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}

export const deleteItemToCard = (cardItems, productToAdd) => {
    const newCartItems = deleteCardItem(cardItems, productToAdd);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}

export const clearItemToCard = (cardItems, clearToItem) => {
    const newCartItems = clearCardItem(cardItems, clearToItem);
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
}