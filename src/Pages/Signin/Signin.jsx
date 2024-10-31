import React from "react";
import Main from "../../Components/Main/Main";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import LoginForm from "../../Components/LoginForm/LoginForm";

function Signin() {
  return (
    <>
      <Nav />
      <Main background="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
         <LoginForm/>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Signin;
