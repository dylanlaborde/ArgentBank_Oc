import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/authActions";

function Nav() {
  const isConnected = useSelector((state) => state.auth.isLog);
  const haveToken = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.user)
  const status = useSelector((state) => state.user.status)

  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          to={haveToken && isConnected ? "/profile" : "/sign-in"}
        >
          <i className="fa fa-user-circle"></i>
          {haveToken && isConnected && status ? `${user.payload.userName}` : "Sign In"}
        </Link>
        {!haveToken && !isConnected ? null : (
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
