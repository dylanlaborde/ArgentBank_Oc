import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/authActions";

function LoginForm() {
  const formValue = useRef();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error)
  
  useEffect(() => {
    if (error) {
      console.log(error)
    }
  },[error])

  const handleSubmit = (e) => {
    e.preventDefault();
    const logData = {
      email: formValue.current[0].value,
      pswrd: formValue.current[1].value,
    };
    dispatch(login(logData.email, logData.pswrd));
  };

  return (
    <form ref={formValue} onSubmit={handleSubmit} >
      {error ? <p className="error-msg">{error}</p> :null}  
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required/>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required/>
      </div>
      <div className="input-remember">
        <label htmlFor="remember-me">Remember me</label>
        <input type="checkbox" id="remember-me" />
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}

export default LoginForm;
