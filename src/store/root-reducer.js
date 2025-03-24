import { combineReducers } from 'redux';
import { UserReducer } from './user/user.reducer';
import { categoryReducer } from './categories/category.reducer';
import { CartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
    user: UserReducer,
    categories: categoryReducer,
    cart: CartReducer
});

