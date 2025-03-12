import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.styles.scss'
import Button from '../button/button.component';
const ProductCard = ({ product }) => {
    const { addItemToCard, cardItems } = useContext(CartContext);
    //console.log('ItemCard..!', cardItems);
    const addProductToCard = () => {
        addItemToCard(product)
    };
    return (
        <div className="product-card-container">
            <img className='img' src={product.imageUrl} />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCard}>ADD TO CARD</Button>
        </div>

    )
}

export default ProductCard;