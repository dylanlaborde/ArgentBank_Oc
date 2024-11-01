import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, USER_RESET } from "./actions.type";
import { getProfile } from "./userAction";

export const login = (email, pswrd) => {
    
  return async (dispatch) => {
      dispatch({type:LOGIN_REQUEST})
        try {
          const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "email": email,"password": pswrd }),
          });
          const data = await response.json();
            if (response.ok) {
              try {
                dispatch(getProfile(data.body.token))
              } catch (error) {
                console.log("une erreur est survenue :",error)
              }


              dispatch({ type: LOGIN_SUCCESS, payload: data.body.token });
          } else {
            dispatch({ type: LOGIN_FAIL, error: data.message || 'Login failed' });
          }
        } catch (error) {
          dispatch({ type: LOGIN_FAIL, error: 'Network error' });
        }
      };
};
  
export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT })
    dispatch({type:USER_RESET})
    sessionStorage.clear()
  }
}