import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { categoriesSelector, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {

    const categoriesMap = useSelector(categoriesSelector);
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        <>
            {
                isLoading ? (<Spinner />)
                    : (
                        Object.keys(categoriesMap).map(title => {
                            const products = categoriesMap[title];
                            return <CategoryPreview key={title} title={title} products={products} />
                        }))
            }

        </>

    )
}

export default CategoriesPreview;