const initialState = {
    items: [],
    total: 0
};

const UPDATE_CART = 'UPDATE_CART';
const CLEAR_CART = 'CLEAR_CART';

export function updateCart(cartArray) {
    console.log(cartArray)
    return {
        type: UPDATE_CART,
        payload: cartArray
    }
};

export function clearCart() {
    return {
        type: CLEAR_CART,
    }
};

export default function cartReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case UPDATE_CART:
            return {
                ...state,
                items: action.payload.items,
                total: action.payload.total
            }
        case CLEAR_CART:
            return initialState;
        default: return state
    }
};