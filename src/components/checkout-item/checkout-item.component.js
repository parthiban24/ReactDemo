import './checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemToCard, addItemToCard, deleteItemToCard } from '../../store/cart/cart.action';

const CheckOutItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);

    const removeCardItem = () => dispatch(clearItemToCard(cartItems, cartItem));
    const addCardItem = () => dispatch(addItemToCard(cartItems, cartItem));
    const deleteCardItem = () => dispatch(deleteItemToCard(cartItems, cartItem));

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img className='img' src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={deleteCardItem}>
                    &#10094;
                </div>
                <span className='value'>{quantity} </span>
                <div className='arrow' onClick={addCardItem}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeCardItem}>&#10005;</div>
        </div >
    )
}

export default CheckOutItem;