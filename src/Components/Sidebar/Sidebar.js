import React from "react";
import SpecialFilter from "../SpecialFilter/SpecialFilter";
import "./Sidebar.scss";

export default function Sidebar({ isExtended, toggleExtension }) {
  return (
    <div className={isExtended ? "nav-menu active" : "nav-menu"}>
      <div className="sidebar__header">
        <p className="sidebar__close-icon" onClick={toggleExtension}>
          X
        </p>
      </div>
      <SpecialFilter />
    </div>
  );
}
