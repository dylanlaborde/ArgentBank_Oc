import { GET_PROFILE } from "./actions.type";

export const getProfile = (token) => {
    return async (dispatch) => {
        if (token) {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'GET',
                    headers: {
                        "Accept": "application.json",
                        "Authorization": `Bearer ${token}`
                    },
                })
                const data = await response.json();
                dispatch({ type: GET_PROFILE, payload: data.body })
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);

            }
        }
    }
}