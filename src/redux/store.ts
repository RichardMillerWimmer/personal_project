import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer, { User } from './authReducer';
import cartReducer, { Cart } from './cartReducer';
import productsReducer, { Product } from './productsReducer'
import userProductsReducer from './userProductsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    userProducts: userProductsReducer
});

export interface ReduxState {
    authReducer: User;
    cartReducer: Cart;
    productsReducer: Product[];
    userProductsReducer: Product[];
}

export default createStore(rootReducer, composeWithDevTools(applyMiddleware()));