import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Crow } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.contexts';
import { CartContext } from '../../contexts/cart.context';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';
import { userSignOut } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropDown from '../../components/card-dropdown/card-dropdown.component';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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