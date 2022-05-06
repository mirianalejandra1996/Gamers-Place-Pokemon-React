import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      <nav>
        <div>
          <p onClick={showSidebar}>Icono</p>
        </div>
        <div className="logo">
          <Link to="/">PokéCompany</Link>
        </div>
      </nav>
    </header>
  );
}
