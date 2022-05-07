import React from "react";
import { colors } from "../../../configs/typesPokemons";
import { pad } from "../../../helpers/formatter";
import ButtonTypeDetail from "../../ButtonTypeDetail/ButtonTypeDetail";
import "./PokemonDetailView.scss";

export default function PokemonDetailView({ description }) {
  // console.log(description.weight);

  return (
    <div className="view">
      {/* Information of the Pokemon */}
      <div>
        <h3 className="title--detail">Basic Information</h3>
        <div className="content">
          <ul>
            <li>
              <span className="subtitle">Id:</span>
              <span className="pokeinfo"># {pad(description.id, 3)}</span>
            </li>
            <li>
              <div className="flex">
                <div className="subtitle">Type:</div>
                <div className="buttons-container">
                  {description.types.map((types, index) => {
                    return (
                      <ButtonTypeDetail
                        key={`typeDetail-${index}`}
                        type={types.type.name}
                        color={colors[types.type.name]}
                      />
                    );
                  })}
                </div>
              </div>
            </li>
            <li>
              <span className="subtitle">Weight:</span>
              <span className="pokeinfo">{description.weight} kg</span>
            </li>
            <li>
              <span className="subtitle">Height:</span>
              <span className="pokeinfo">{description.height} m</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
