import React from "react";
import "./ButtonTypeDetail.scss";

export default function ButtonTypeDetail({ type, color }) {
  return (
    <div className="btn-type-detail" style={{ backgroundColor: color }}>
      <span className="btn-type-detail__text">{type}</span>
    </div>
  );
}
