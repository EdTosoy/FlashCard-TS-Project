import React, { ReactElement } from "react";

import "./AuthNavigation.scss";

export default function AuthNavigation(): ReactElement {
  return (
    <div className="auth-navigation">
      <li>Rooms</li>
      <li>Features</li>
      <li>Privacy And Safety</li>
      <li>Developers</li>
    </div>
  );
}
