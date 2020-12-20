import React, { useContext, ReactElement } from "react";

import { HomeContext } from "../../../ContextAPI/homeContext";
import "./AddModal.scss";

export default function AddModal(): ReactElement {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const { darkTheme } = useContext(HomeContext);
  return (
    <div
      className={`add-modal ${darkTheme && "dark-add-modal"}`}
      onClick={handleClick}
    >
      <div className="file-preview"></div>
      <div className="file-discription">
        <input type="text" placeholder="TITLE" />
        <input type="text" placeholder="Discription" />
        <input type="text" placeholder="span" />
        <button>save</button>
      </div>
    </div>
  );
}
