import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
    categoriesMap: []
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log('categoriesMap:', categoryMap);
            setCategoriesMap(categoryMap)
        };

        getCategoriesMap();
    }, []);

    const values = { categoriesMap, setCategoriesMap }
    return (
        <CategoriesContext.Provider value={values}>{children}</CategoriesContext.Provider>
    )
};