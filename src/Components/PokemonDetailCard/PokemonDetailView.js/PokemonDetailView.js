import React from "react";
import ButtonTypeDetail from "../../ButtonTypeDetail/ButtonTypeDetail";
import "./PokemonDetailView.scss";

export default function PokemonDetailView() {
  return (
    <div>
      <div className="about sec-detail">
        <h3>Description</h3>
        <div className="content">
          <p>
            Bulbasaur can be seen napping in bright sunlight. There is a seed on
            its back. By soaking up the sun's rays, the seed grows progressively
            larger.
          </p>
        </div>
      </div>
      <div className="informacion-basica sec-detail">
        <h3>Basic Information</h3>
        <div className="content">
          <ul>
            <li>
              <div className="flex">
                <div className="subtitle">Type:</div>
                <div className="buttons-container">
                  <ButtonTypeDetail type="grass" color="rgb(44, 219, 178)" />
                  <ButtonTypeDetail type="poison" color="rgb(142, 145, 250)" />
                </div>
              </div>
            </li>
            <li>
              <span className="subtitle">Weight:</span>
              <span className="pokeinfo">6.9 kg</span>
            </li>
            <li>
              <span className="subtitle">Height:</span>
              <span className="pokeinfo">0.71 m</span>
            </li>
            <li>
              <span className="subtitle">CP:</span>
              <span className="pokeinfo">118</span>
            </li>
            <li>
              <span className="subtitle">Candy:</span>
              <span className="capitalize pokeinfo">bulbasaur candy</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="debilidades sec-detail">
        <h3>Weaknesses</h3>
        <div className="buttons-container">
          <ButtonTypeDetail type="fire" color="rgb(249, 118, 108)" />
          <ButtonTypeDetail type="ice" color="rgb(164, 234, 234)" />
          <ButtonTypeDetail type="flying" color="rgb(255, 209, 158)" />
          <ButtonTypeDetail type="psychic" color="rgb(255, 172, 229)" />
        </div>
      </div>
    </div>
  );
}
