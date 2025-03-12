import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './card-icon.styles.scss'
const CardIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cardCount } = useContext(CartContext);

    //console.log('Card List:', isCartOpen);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cardCount}</span>
        </div>
    )
}

export default CardIcon;