import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Crow } from '../../assets/crown.svg'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';
import { userSignOut } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropDown from '../../components/card-dropdown/card-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);

    const  isCartOpen  = useSelector(selectIsCartOpen);

    //console.log('OpenPopup:', isCartOpen);

    const signOutHandle = async () => {
        await userSignOut()
    }
    //console.log('currentUser:', currentUser);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Crow />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLinks as='span' onClick={signOutHandle}>
                            SIGN OUT
                        </NavLinks>)
                        : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )}
                    <CardIcon />
                </NavLinks>
                {isCartOpen && <CardDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;