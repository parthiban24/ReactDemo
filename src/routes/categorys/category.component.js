import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';
import Spinner from '../../components/spinner/spinner.component';
import { categoriesSelector, selectCategoriesIsLoading } from '../../store/categories/category.selector';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(categoriesSelector);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {isLoading ? <Spinner /> :
                <div className='category-container'>
                    {
                        products &&
                        products.map((product) =>
                            <ProductCard key={product.id} product={product} />
                        )
                    }
                </div>
            }

        </>

    )

}

export default Category;