import React, { useRef } from "react";
import Main from "../../Components/Main/Main";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import LoginForm from "../../Components/LoginForm/LoginForm";

function Signin() {
  const formValue = useRef();
  return (
    <>
      <Nav />
      <Main background="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form ref={formValue}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <label htmlFor="remember-me">Remember me</label>
              <input type="checkbox" id="remember-me" />
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
          
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Signin;
