import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, EmptyMessage, CartItems } from './card-dropdown.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import CardItem from '../card-item/card-item.component';
const CardDropDown = () => {
    const  cardItems  = useSelector(selectCartItems);
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/checkout");
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cardItems.length ? (
                    cardItems.map((item) => <CardItem key={item.id} cardItem={item} />)
                ) : (
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={handleClick} buttonType={BUTTON_TYPE_CLASSES.base} >GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
export default CardDropDown;