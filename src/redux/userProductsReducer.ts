import { Product } from "./productsReducer";

type UserProductAction = {
    type: 'UPDATE_USER_PRODUCTS' | 'RESET_PRODUCTS';
    payload: Product[]
}

const initialState = {
    userProductList: []
};

const UPDATE_USER_PRODUCTS = 'UPDATE_USER_PRODUCTS';

const RESET_PRODUCTS = 'RESET_PRODUCTS';

export function updateUserProducts(userProductList: Product[]) {
    return {
        type: UPDATE_USER_PRODUCTS,
        payload: userProductList
    }
};

export function resetProducts() {
    return {
        type: RESET_PRODUCTS,
    }
};

export default function userProductsReducer(state = initialState, action: UserProductAction) {
    // console.log(action)
    switch (action.type) {
        case UPDATE_USER_PRODUCTS:
            return {
                ...state,
                userProductList: action.payload
            }
        case RESET_PRODUCTS:
            return initialState
        default: return state
    }
};