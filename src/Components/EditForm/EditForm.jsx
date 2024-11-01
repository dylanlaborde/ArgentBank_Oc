import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../Actions/userAction";

function EditForm(props) {
  const userInfo = useSelector((state) => state.user.payload);
  const token = useSelector((state) => state.auth.token);
  const [username, setUsername] = useState(userInfo.userName);
  const dispatch = useDispatch();
  const changeUserName = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeUserName = () => {
    dispatch(updateUserName(username, token));
    props.changeVisibility();
  };

  return (
    <section className="edit-wrapper">
      <h2>Edit user info</h2>
      <div className="input-wrapper">
        <label htmlFor="username">User name</label>
        <input
          value={username}
          onChange={changeUserName}
          type="text"
          id="username"
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="firstName">First Name</label>
        <input value={userInfo.firstName} type="text" id="firstName" disabled />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last name</label>
        <input value={userInfo.lastName} type="text" id="lastName" disabled />
      </div>
      <div className="button-wrapper">
        <button className="edit-button" onClick={handleChangeUserName}>
          Save
        </button>
        <button className="edit-button" onClick={props.changeVisibility}>
          Cancel
        </button>
      </div>
    </section>
  );
}

export default EditForm;
