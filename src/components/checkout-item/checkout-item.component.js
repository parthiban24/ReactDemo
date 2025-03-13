import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckOutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemToCard, addItemToCard, deleteItemToCard } = useContext(CartContext);

    const removeCardItem = () => clearItemToCard(cartItem);
    const addCardItem = () => addItemToCard(cartItem);
    const deleteCardItem = () => deleteItemToCard(cartItem);

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