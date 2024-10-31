import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Actions/actions.type";

const initialstate = {
    isLog: false,
    token:null,
    error:null
}

export const authReducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state ,error:''}
        case LOGIN_SUCCESS:
            return { ...state, isLog: true ,token:action.payload}
        case LOGIN_FAIL:
            return { ...state, error: action.error }
        default:
            return state;
    }

}