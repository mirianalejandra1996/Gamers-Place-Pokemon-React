import React from "react";
import "./PokemonDetailCard.scss";
import PokemonDetailView from "./PokemonDetailView.js/PokemonDetailView";
import TabsTitles from "../../configs/tabsInfoPokemon.js";
import PokemonEvolutionView from "./PokemonEvolutionView/PokemonEvolutionView";

export default function PokemonDetailCard() {
  return (
    <div className="pokemon__card">
      <div className="pokemon__photo-container">
        <div className="pokemon__background"></div>
        <img
          className="pokemon__photo"
          src="https://www.serebii.net/pokemongo/pokemon/001.png"
          alt="pokemon-photo"
        />
      </div>

      <div className="pokemon__info">
        {/* Los taps que muestran las vistas detalladas de cada pokemon */}
        <div className="pokemon__tabs-container">
          {TabsTitles.map((title, index) => (
            // <h2 className="pokemon__tab--active" key={`title-${index}`}>
            <h2
              className={
                index === 0 ? "pokemon__tab--active" : "pokemon__tab--inactive"
              }
              key={`title-${index}`}
            >
              {title}
            </h2>
          ))}
        </div>
        {/* Fin de Pestañas */}
      </div>

      {/* <PokemonDetailView /> */}
      <PokemonEvolutionView />
    </div>
  );
}
