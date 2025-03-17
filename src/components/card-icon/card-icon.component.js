import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './card-icon.styles'
const CardIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cardCount } = useContext(CartContext);

    //console.log('Card List:', isCartOpen);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cardCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon;