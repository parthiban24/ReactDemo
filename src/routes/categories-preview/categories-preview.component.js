import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { categoriesSelector } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    
    const categoriesMap = useSelector(categoriesSelector);
    return (
        <>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }

        </>

    )
}

export default CategoriesPreview;