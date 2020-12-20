import React from "react";

import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <input type="input" id="search" placeholder="Search" />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}
