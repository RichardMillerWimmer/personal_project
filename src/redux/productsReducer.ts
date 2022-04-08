export type Product = {
    product_id: Number;
    name: string;
    description: string;
    price: number;
    image_one: string;
    image_two: string;
    download_link: string;
}

type ProductAction = {
    type: 'UPDATE_PRODUCTS';
    payload: Product[]
}

const initialState = {
    productList: []
};

const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

export function updateProducts(productList: Product[]) {
    // console.log(productList)
    return {
        type: UPDATE_PRODUCTS,
        payload: productList
    }
};

export default function productsReducer(state = initialState, action: ProductAction) {
    // console.log(action)
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                productList: action.payload
            }
        default: return state
    }
};