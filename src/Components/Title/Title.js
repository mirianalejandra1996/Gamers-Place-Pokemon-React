import React from "react";
import "./Title.scss";

export default function Title({ text, smaller }) {
  return <h1 className={smaller ? "smaller" : ""}>{text}</h1>;
}
