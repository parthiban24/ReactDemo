import './checkOut.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckOut = () => {
    const { cardItems, addItemToCard, deleteItemToCard } = useContext(CartContext);
    return (
        <div>
            <h1>Welcome to CheckOut Page</h1>
            {cardItems.map((item) => {
                const { id, name, quantity } = item;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => deleteItemToCard(item)}>Decrement</span>
                        <br />
                        <span onClick={() => addItemToCard(item)}>Increment</span>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckOut;