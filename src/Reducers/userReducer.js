import { GET_PROFILE, UPDATE_USERNAME, USER_RESET } from "../Actions/actions.type";

const initialstate = {}

export const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {...state,status:action.status,payload:action.payload}
        case USER_RESET:
            return initialstate
        case UPDATE_USERNAME:
            return{...state,payload:{...state.payload,userName:action.payload},status:action.status}
        default:
            return state;
    }
}