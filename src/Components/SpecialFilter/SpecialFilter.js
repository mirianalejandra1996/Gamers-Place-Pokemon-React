import React from "react";
import { typesColors } from "../../configs/typesPokemons";
import { usePokedex } from "../../Services/Contexts/PokeContext";
// import typesColors from "../../configs/typesPokemons";

import ButtonType from "../ButtonType/ButtonType";
import OptionsButtons from "../OptionsButtons/OptionsButtons";
import "./SpecialFilter.scss";

export default function SpecialFilter() {
  const { setTypes } = usePokedex();

  return (
    <div className="special-filter__container">
      <div className="special-filter__header">
        <h2>Filters By Type 2</h2>
        {/* <h2>Special Filters</h2> */}
        <div
          className="circle-type"
          style={{ backgroundColor: "rgb(142, 145, 250)" }}
        >
          <span
            className="format-icon icon-poison"
            onClick={() => setTypes([])}
          >
            🧹
          </span>
        </div>
      </div>
      <div className="types_container">
        {typesColors.map((type, index) => (
          <div className="button__container" key={`type-${index}`}>
            <ButtonType type={type} />
            <OptionsButtons optionsType={type} />
          </div>
        ))}
      </div>
    </div>
  );
}
