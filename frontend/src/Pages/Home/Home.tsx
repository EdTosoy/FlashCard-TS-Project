import React from "react";

import AddBtn from "./AddBtn/AddBtn";
import Header from "../../Components/Header/Header";

import "./Home.scss";
import Showcase from "./Showcase";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Showcase />
      <AddBtn />
    </div>
  );
}
