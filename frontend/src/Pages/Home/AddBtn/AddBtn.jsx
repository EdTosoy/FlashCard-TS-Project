import React, { useContext } from "react";

import { HomeContext } from "../../../ContextAPI/homeContext";

import "./AddBtn.scss";
import AddModalWrapper from "./AddModalWrapper";

export default function AddBtn() {
  const { setAddModalDisplay, darkTheme } = useContext(HomeContext);
  const handleClick = () => {
    setAddModalDisplay((preValue) => !preValue);
  };
  return (
    <div className="add-wrapper" onClick={handleClick}>
      <div className={`add-btn ${darkTheme && "dark-add-btn"} `}>
        <ion-icon name="add-outline"></ion-icon>
      </div>
      <AddModalWrapper />
    </div>
  );
}
