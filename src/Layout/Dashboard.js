import React from "react";
import "./Dashboard.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function Dashboard() {
  return (
    <>
      {/* <div className="main">
        <div className="main__content"> */}
      <div>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
