import React, { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Main from "../../Components/Main/Main";
import PorfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import Account from "../../Components/Account/Account";
import { useDispatch, useSelector } from "react-redux";
import { GET_PROFILE, KEEP_ALIVE } from "../../Actions/actions.type";
import { getProfile } from "../../Actions/userAction";

function Profile() {
  const userToken = useSelector((state) => state.auth.token)
  const connected = useSelector((state) => state.auth.isLog)
  const savedToken = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  if (connected && userToken) {
    dispatch(getProfile(userToken))
    sessionStorage.setItem("token", userToken);
  } else if (savedToken) {
    dispatch({ type: KEEP_ALIVE, payload: savedToken })
  }

  useEffect(() => {
    console.log(userToken)
    console.log(savedToken)

  },[userToken,savedToken])
  
  return (
    <>
      <Nav />
      <Main background="main bg-dark">
        <PorfileHeader/>
        <h2 className="sr-only">Accounts</h2>
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Available Balance" />
      </Main>
    </>
  );
}

export default Profile;
