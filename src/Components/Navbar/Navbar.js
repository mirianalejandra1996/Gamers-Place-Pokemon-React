import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h4>PokéCompany</h4>
        </div>
      </nav>
    </header>
  );
}
