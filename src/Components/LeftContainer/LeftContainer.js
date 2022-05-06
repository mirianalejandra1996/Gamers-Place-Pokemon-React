import React from "react";
import typesColors from "../../configs/typesPokemons";
import "./LeftContainer.scss";
import SpecialFilter from "../SpecialFilter/SpecialFilter";

export default function LeftContainer() {
  console.log(typesColors);
  return (
    <div>
      <div className="left-container">
        <SpecialFilter />
      </div>
    </div>
  );
}
