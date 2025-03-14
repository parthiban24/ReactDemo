import { useContext } from 'react';
import Product_data from '../../shop-data';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductContext } from '../../contexts/product.context';
import './shop.styles.scss'
const Shop = () => {
    const { products, setProducts } = useContext(ProductContext);
    //console.log('Shop:', products)
    return (
        <div className='products-container'>
            {products.map((item) => {
                return (
                        <ProductCard key={item.id} product={item} />
                )
            })}
        </div>
    )
}

export default Shop;