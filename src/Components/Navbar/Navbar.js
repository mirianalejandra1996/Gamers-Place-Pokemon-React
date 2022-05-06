import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
    console.log("tocado!", sidebar);
  };

  return (
    <header className="header">
      <nav>
        <div className="header__hamburger-container">
          <p onClick={toggleSidebar}>Icono</p>
        </div>
        <div className="logo">
          <Link to="/">PokéCompany</Link>
        </div>
      </nav>
      <Sidebar isExtended={sidebar} toggleExtension={toggleSidebar} />
      {/* ---------------- */}
      {/* <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <p>X</p>
        <button>Hola</button>
      </div> */}
    </header>
  );
}
