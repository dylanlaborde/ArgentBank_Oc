import { GET_PROFILE, UPDATE_USERNAME } from "./actions.type";

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
                if (data.status === 200) {
                    dispatch({ type: GET_PROFILE,status:"SUCCESS",payload: data.body })
                }
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);

            }
        }
    }
}

export const updateUserName = (newUsername,token) =>{
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    "Accept": "application.json",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: newUsername
                })
            })
            const data = await response.json();
            if (data.status === 200) {
                dispatch({ type: UPDATE_USERNAME, payload: data.body.userName, status: 'UPDATED' }) 
            }
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    }
}