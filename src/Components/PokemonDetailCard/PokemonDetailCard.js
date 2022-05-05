import React from "react";
import "./PokemonDetailCard.scss";
import PokemonDetailView from "./PokemonDetailView.js/PokemonDetailView";

export default function PokemonDetailCard() {
  return (
    <div className="pokemon__card">
      <div className="pokemon__photo-container">
        <div className="pokemon__background"></div>
        <img
          className="pokemon__photo"
          src="https://www.serebii.net/pokemongo/pokemon/001.png"
        />
      </div>

      <div className="pokemon__info">
        {/* Debería estar en config y que rendericen */}
        <div class="pokemon__tabs-container">
          <h2 class="btn-caracteristica active show-bottom-line active">
            Detalles
          </h2>
          <h2 class="btn-caracteristica inactive hide-bottom-line inactive">
            Evoluciones
          </h2>
          <h2 class="btn-caracteristica inactive hide-bottom-line inactive">
            Stats
          </h2>
        </div>
        {/* Fin de Pestañas */}
      </div>
    </div>
  );
}
