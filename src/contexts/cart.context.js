import { createContext, useState, useEffect } from "react";

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

const deleteCardItem = (cardItems, productToAdd) => {
    //find if cardItem contain productToDelete
    const existingCardItem = cardItems.find((item) =>
        item.id === productToAdd.id
    );
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
    addItemToCard: () => { },
    cardCount: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cardItems, setCardItems] = useState([]);
    const [cardCount, setCardCount] = useState(0);

    useEffect(() => {
        const cartItemCountAdd = cardItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCardCount(cartItemCountAdd);
    },
        [cardItems])

    const addItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd));
    }

    const deleteItemToCard = (productToAdd) => {
        setCardItems(deleteCardItem(cardItems, productToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCard, deleteItemToCard, cardItems, cardCount }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};