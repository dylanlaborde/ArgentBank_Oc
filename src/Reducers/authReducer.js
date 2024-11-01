import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../Actions/actions.type";

const initialstate = {
    isLog: false,
    token: null,
    error: null
}

export const authReducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, error: '' }
        case LOGIN_SUCCESS:
            return { ...state, isLog: true, token: action.payload }
        case LOGIN_FAIL:
            return { ...state, error: action.error }
        case LOGOUT:
            return { ...state, isLog: false, token: null }
        default:
            return state;
    }

}