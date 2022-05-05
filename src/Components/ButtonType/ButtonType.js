import React from "react";
import "./Buttontype.scss";

export default function ButtonType({ type, color }) {
  return <button className="type-btn">{type}</button>;
  // return (
  //   <div>
  //     {/* Todo: agregar icono */}
  //     <button className="type-btn">{type}</button>
  //   </div>
  // );
}
