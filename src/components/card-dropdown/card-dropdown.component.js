import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import './card-dropdown.styles.scss';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.component';
const CardDropDown = () => {
    const { cardItems } = useContext(CartContext);
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/checkout");
      };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cardItems.map(item =>
                        <CardItem key={item.id} cardItem={item} />)
                }
            </div>
            <Button onClick={handleClick}>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CardDropDown;