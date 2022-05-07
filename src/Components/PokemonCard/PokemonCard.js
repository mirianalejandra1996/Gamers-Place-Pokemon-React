import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../configs/typesPokemons";
import { pad } from "../../helpers/formatter";
import "./PokemonCard.scss";

export default function PokemonCard({ pokemon }) {
  let navigate = useNavigate();

  const checkPokemon = () => {
    navigate("pokemon/:id", {
      state: { pokemon },
    });
  };

  return (
    <div className="card" onClick={checkPokemon}>
      <div className="card__photo-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="info-container">
        <h3 className="namePokemon info">{pokemon.name}</h3>
        <h3 className="info"># {pad(pokemon.id, 3)}</h3>
        <h3 className="info">CP: {pokemon.stats[3].base_stat}</h3>
        <div className="info icon-container">
          {pokemon.types.map((type, index) => {
            return (
              <div
                key={`type-${index}`}
                className="circle-type"
                style={{
                  backgroundColor: colors[type.type.name],
                }}
              >
                <span className="format-icon icon-grass"></span>
              </div>
            );
          })}
          <span className="format-icon icon-poison"></span>
        </div>
      </div>
    </div>
  );
}
