import React, { useContext } from "react";

import Logo from "./Logo";
import Tags from "./Tags";
import Search from "./Search";
import Settings from "./Settings";
import Notification from "./Notification";
import DropDown from "./DropDown";
import { HomeContext } from "../../ContextAPI/homeContext";

import "./Header.scss";

export default function Header() {
  const { darkTheme } = useContext(HomeContext);
  return (
    <header className={darkTheme && "header-dark-theme"}>
      <div className="header-content">
        <Logo />
        <Tags />
        <Search />
        <Settings />
        <Notification />
        <DropDown />
      </div>
    </header>
  );
}
