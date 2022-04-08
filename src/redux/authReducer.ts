type User = {
    firstName: string;
    userId: number;
    admin?: boolean;
}

type AuthAction = {
    type: 'UPDATE_USER' | 'LOGOUT';
    payload: User;
}

const initialState = {
    firstName: '',
    userId: null,
    admin: null
};

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';

export function updateUser(user: User) {
    console.log(user)
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


export default function authReducer(state = initialState, action: AuthAction) {
    // console.log(action)
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                firstName: action.payload.firstName,
                userId: action.payload.userId,
                admin: action.payload.admin
            };
        case LOGOUT:
            return initialState;
        default: return state
    }
};