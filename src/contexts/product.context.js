import { createContext, useState } from "react";
import ProductList from '../shop-data.json'

export const ProductContext = createContext({
    products: []
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(ProductList);
    const values = { products, setProducts }
    return (
        <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
    )
};