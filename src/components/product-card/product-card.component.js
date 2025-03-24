import './product-card.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCard } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCard = () => dispatch(addItemToCard(cartItems, product));

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