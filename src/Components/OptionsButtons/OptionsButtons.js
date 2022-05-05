import React from "react";
import "./OptionsButtons.scss";

export default function OptionsButtons() {
  return (
    <div className="options-pokemon">
      <div
        className="circle-type"
        style={{ backgroundColor: "rgb(142, 145, 250)" }}
      >
        <span className="format-icon icon-poison">T</span>
      </div>
      <div
        className="circle-type"
        style={{ backgroundColor: "rgb(142, 145, 250)" }}
      >
        <span className="format-icon icon-poison">D</span>
      </div>
    </div>
  );
}
