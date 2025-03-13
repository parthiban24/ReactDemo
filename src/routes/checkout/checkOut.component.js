import './checkOut.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {
    const { cardItems, cardTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {cardItems.map((item) => {
                //const { id, name, quantity } = item;
                return (
                    <CheckOutItem key={item.id} cartItem={item} />
                )
                // <div key={id}>
                //     <h2>{name}</h2>
                //     <span>{quantity}</span>
                //     <br />
                //     <span onClick={() => deleteItemToCard(item)}>Decrement</span>
                //     <br />
                //     <span onClick={() => addItemToCard(item)}>Increment</span>
                // </div>

            })}
            <span className='total'>Total:${cardTotal}</span>
        </div>
    )
}

export default CheckOut;