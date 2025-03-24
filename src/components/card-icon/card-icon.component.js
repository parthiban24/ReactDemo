import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action';
import { ShoppingIcon, CartIconContainer, ItemCount } from './card-icon.styles'
const CardIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cardCount = useSelector(selectCartCount);

    //const cardCount = '';
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    //const toggleIsCartOpen = () => { setIsCartOpen(true) };
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cardCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon;