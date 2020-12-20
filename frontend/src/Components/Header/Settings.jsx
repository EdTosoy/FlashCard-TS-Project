import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HomeContext } from "../../ContextAPI/homeContext";
import "./Settings.scss";

export default function Settings() {
  const { SetnotificationDisplay, SetdropDownDisplay } = useContext(
    HomeContext
  );

  const notificationClick = () => {
    SetnotificationDisplay((preValue) => !preValue);
  };
  const dropDownClick = () => {
    SetdropDownDisplay((preValue) => !preValue);
  };
  const user = Math.floor(Math.random() * 10000);
  return (
    <div className="settings">
      <li onClick={notificationClick}>
        <ion-icon name="notifications-sharp"></ion-icon>
      </li>
      <li>
        <Link to={`/user/${user}`}>
          <ion-icon name="person-circle-sharp"></ion-icon>
        </Link>
      </li>
      <li onClick={dropDownClick}>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </li>
    </div>
  );
}
