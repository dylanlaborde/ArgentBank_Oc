import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/authActions";

function Nav() {
  //const isConnected = useSelector((state) => state.user.isLog);
  const haveToken = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  };
  return (
    <nav className="main-nav">
      <Link to={"/"} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link
          className="main-nav-item"
          to={haveToken ? "/profile" : "/sign-in"}
        >
          <i className="fa fa-user-circle"></i>
          {haveToken ? `${user.userName}` : "Sign In"}
        </Link>
        {!haveToken ? null : (
          <Link className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
