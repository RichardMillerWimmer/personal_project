import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer
})

export default createStore(rootReducer)