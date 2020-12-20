import React from "react";
import { NavLink } from "react-router-dom";

import "./Tags.scss";

export default function Tags() {
  const tags = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Goals",
      url: "/goals",
    },
    {
      id: 3,
      title: "Journals",
      url: "/journals",
    },
  ];
  
  return (
    <div className="tags">
      {tags.map(({ id, title, url }) => (
        <NavLink exact to={url} activeClassName="active" className="tag" key={id}>
          {title}
        </NavLink>
      ))}
    </div>
  );
}
