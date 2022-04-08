import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './authReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer'
import userProductsReducer from './userProductsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    userProducts: userProductsReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware()));