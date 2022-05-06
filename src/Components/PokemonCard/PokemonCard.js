import React from "react";
import { pad } from "../../helpers/formatter";
import "./PokemonCard.scss";

export default function PokemonCard({ pokemon }) {
  // console.log(pokemon);

  return (
    <div className="card">
      <div className="card__photo-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="info-container">
        <h3 className="namePokemon info">{pokemon.name}</h3>
        <h3 className="info"># {pad(pokemon.id, 3)}</h3>
        <h3 className="info">CP: {pokemon.stats[3].base_stat}</h3>
        <div className="info icon-container">
          <div
            className="circle-type"
            style={{ backgroundColor: "rgb(44, 219, 178)" }}
          >
            <span className="format-icon icon-grass"></span>
          </div>
          <div
            className="circle-type"
            style={{ backgroundColor: "rgb(142, 145, 250)" }}
          >
            <span className="format-icon icon-poison"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
