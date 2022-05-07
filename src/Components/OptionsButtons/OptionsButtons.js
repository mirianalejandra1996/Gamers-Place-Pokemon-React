import React from "react";
import { colors } from "../../configs/typesPokemons";
import { usePokedex } from "../../Services/Contexts/PokeContext";
import "./OptionsButtons.scss";

export default function OptionsButtons({ optionsType }) {
  const { types, setTypes } = usePokedex();

  const optionsData = {
    type: 1,
  };

  const optionsBtns = Object.entries(optionsData);

  const addFilter = () => {
    const typeSelectedExist = types.includes(optionsType);

    if (typeSelectedExist) {
      // ! to remove the option selected
      setTypes(types.filter((type) => type !== optionsType));
    } else {
      // ! to add the option selected
      setTypes((currentTypes) => [...currentTypes, optionsType]);
    }
  };

  return (
    <div className="options-pokemon">
      {optionsBtns.map((option, index) => (
        <div
          key={`options-${index}`}
          onClick={addFilter}
          className={
            "circle-type " + (types.includes(optionsType) ? "active" : "")
          }
          style={{
            backgroundColor: colors[optionsType],
          }}
        >
          <span className="format-icon icon-poison"></span>
        </div>
      ))}
    </div>
  );
}
