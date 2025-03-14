import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

export const ProductContext = createContext({
    products: []
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            console.log('categoriesMap:', categoriesMap)
        };
        
        getCategoriesMap();
    }, []);

    const values = { products, setProducts }
    return (
        <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
    )
};