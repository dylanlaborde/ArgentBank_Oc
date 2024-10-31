import { GET_PROFILE, USER_RESET } from "../Actions/actions.type";

const initialstate = {}

export const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {...state,status:action.status,payload:action.payload}
        case USER_RESET:
            return initialstate
        default:
            return state;
    }
}