import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HomeContext } from "../../ContextAPI/homeContext";

import "./DropDown.scss";

export default function DropDown() {
  const { dropDownDisplay, setDarkTheme } = useContext(HomeContext);
  const dropDownStyle = dropDownDisplay ? { display: "block" } : null;
  const handleChange = () => {
    setDarkTheme((prevValue) => !prevValue);
  };
  return (
    <div className="drop-down" style={dropDownStyle}>
      <p>Account</p>
      <li className="theme">
        <div>Dark Theme</div>
        <div className="theme-tgl">
          <input
            className="tgl tgl-ios"
            id="cb2"
            type="checkbox"
            onChange={handleChange}
          />
          <label className="tgl-btn" htmlFor="cb2"></label>
        </div>
      </li>
      <li>Add another account</li>
      <p>More options</p>
      <li>Settings</li>
      <li>Install the Chrome app</li>
      <li>Get help</li>
      <li>See terms and privacy</li>
      <li>
        <Link to="/auth">Log out</Link>
      </li>
    </div>
  );
}
