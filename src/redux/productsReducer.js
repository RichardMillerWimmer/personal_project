const initialState = {
    productList: []
}

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

export function updateProducts(productList) {
    // console.log(productList)
    return {
        type: UPDATE_PRODUCTS,
        payload: productList
    }
};

export default function productsReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                productsList: action.payload.productList
            }
        default: return state
    }
}