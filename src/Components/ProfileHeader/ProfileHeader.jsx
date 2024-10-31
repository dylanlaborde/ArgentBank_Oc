import React from "react";
import { useSelector } from "react-redux";

function PorfileHeader() {
  const data = useSelector((state) => state.user.payload)
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {`${data.firstName} ${data.lastName}!` }
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default PorfileHeader;
