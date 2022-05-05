import React from "react";
import "./PokemonCard.scss";

export default function PokemonCard() {
  return (
    <div className="card">
      <img src="https://www.serebii.net/pokemongo/pokemon/001.png" />
      <div className="info">
        <div className="info-left">
          <h3 className="namePokemon">bulbasaur</h3>
          <h3>CP: 118</h3>
          <div className="icon-container">
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
        <div className="info-rigth">
          <h3>#001</h3>
        </div>
      </div>
    </div>
  );
}
