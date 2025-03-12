import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crow } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.contexts';
import { CartContext } from '../../contexts/cart.context';
import './navigation.styles.scss'
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
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Crow />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutHandle}>
                            SIGN OUT
                        </span>)
                        : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )}
                    <CardIcon />
                </div>
                {isCartOpen && <CardDropDown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;