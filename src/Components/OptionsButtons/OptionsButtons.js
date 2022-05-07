import React from "react";
import { usePokedex } from "../../Services/Contexts/PokeContext";
import "./OptionsButtons.scss";

export default function OptionsButtons({ optionsType }) {
  const { types, setTypes } = usePokedex();

  const optionsData = {
    type: 1,
  };

  const optionsBtns = Object.entries(optionsData);

  const addFilter = () => {
    console.log("added", optionsType);
    const typeSelectedExist = types.includes(optionsType);

    if (typeSelectedExist) {
      // ! to remove the option selected
      setTypes(types.filter((type) => type !== optionsType));
    } else {
      // ! to add the option selected
      setTypes((currentTypes) => [...currentTypes, optionsType]);
    }

    console.log("mira mis opciones seleccionadas!, ", types);
  };

  return (
    <div className="options-pokemon">
      {optionsBtns.map((option, index) => (
        <div
          key={`options-${index}`}
          onClick={addFilter}
          className="circle-type"
          style={{
            backgroundColor:
              index === 0 ? "rgb(142, 145, 250)" : "rgb(249, 118, 108)",
          }}
        >
          <span className="format-icon icon-poison">
            {index === 0 ? "T" : "D"}
          </span>
        </div>
      ))}
    </div>
  );
}
