import React from "react";
import { useSelector } from "react-redux";

function Header(props) {
    const data = useSelector((state) => state.user.payload);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {`${data.firstName} ${data.lastName}!`}
      </h1>
      <button className="edit-button" onClick={props.changeVisibility}>
        Edit Name
      </button>
    </div>
  );
}

export default Header;
