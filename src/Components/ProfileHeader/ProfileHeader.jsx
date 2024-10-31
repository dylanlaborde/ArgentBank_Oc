import React from "react";
import { useSelector } from "react-redux";

function PorfileHeader() {
  const userData = useSelector((state) => state.user)
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {`${userData.firstName} ${userData.lastName}!` }
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default PorfileHeader;
