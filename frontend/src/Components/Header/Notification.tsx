import React, { CSSProperties, useContext, ReactElement } from "react";

import { HomeContext } from "../../ContextAPI/homeContext";
import "./Notification.scss";

export default function Notification(): ReactElement {
  const { notificationDisplay } = useContext(HomeContext);
  const notificationStyle: CSSProperties | any = notificationDisplay
    ? { left: "calc(100vw - 350px)" }
    : null;
  return (
    <div className="notification" style={notificationStyle}>
      <h1>Updates</h1>
      <div className="updates">
        <p>Nothing is here yet</p>
      </div>
    </div>
  );
}
