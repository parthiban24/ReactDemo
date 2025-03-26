import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../categorys/category.component';
import './shop.styles.scss'
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);
    // useEffect(() => {
    //     const getCategoriesMap = async () => {
    //         const categoriesArray = await getCategoriesAndDocuments();
    //         //console.log('categoriesArray:', categoriesArray);
    //         dispatch(setCategoriesMap(categoriesArray));
    //     };
    //     getCategoriesMap();
    // }, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;