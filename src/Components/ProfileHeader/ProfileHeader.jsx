import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditForm from "../EditForm/EditForm";
import Header from "../Header/Header";

function PorfileHeader() {
  const user = useSelector((state) => state.user);
  const [visible, setvisible] = useState(false);
  
  const changeVisibility = () => {
    setvisible((last)=>!last);
  };

  return (
    <>
      {visible ? (
        <EditForm changeVisibility={changeVisibility}/>
      ) : (
        <Header changeVisibility={changeVisibility}/>
      )}
    </>
  );
}

export default PorfileHeader;
