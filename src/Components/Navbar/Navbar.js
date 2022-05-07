import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { GrMenu } from "react-icons/gr";

// import { GiHamburgerMenu } from "react-icons/gi";
// GiHamburgerMenu
export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <header className="header">
      <nav>
        <div className="header__hamburger-container">
          <p onClick={toggleSidebar}>
            <GrMenu />
          </p>
          {/* <p onClick={toggleSidebar}>{GiHamburgerMenu}</p> */}
        </div>
        <div className="logo">
          <Link to="/">👾 Gamers Place</Link>
        </div>
      </nav>
      <Sidebar isExtended={sidebar} toggleExtension={toggleSidebar} />
    </header>
  );
}
