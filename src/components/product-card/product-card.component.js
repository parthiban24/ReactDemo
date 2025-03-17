import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
const ProductCard = ({ product }) => {
    const { addItemToCard } = useContext(CartContext);
    //console.log('ItemCard..!', cardItems);
    const addProductToCard = () => {
        addItemToCard(product)
    };
    return (
        <div className="product-card-container">
            <img className='img' src={product.imageUrl} alt={product.name} />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>ADD TO CARD</Button>
        </div>

    )
}

export default ProductCard;