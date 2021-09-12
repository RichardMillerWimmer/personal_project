const initialState = {
    firstName: '',
    userId: null,
    admin: null
};

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';

export function updateUser(user) {
    // console.log(user)
    return {
        type: UPDATE_USER,
        payload: user
    }
};

export function logoutUser() {
    return {
        type: LOGOUT
    }
};


export default function authReducer(state = initialState, action) {
    // console.log(action)
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                firstName: action.payload.first_name,
                userId: action.payload.id,
                admin: action.payload.admin
            };
        case LOGOUT:
            return initialState;
        default: return state
    }
};