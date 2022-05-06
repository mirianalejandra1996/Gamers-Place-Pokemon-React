import React from "react";
import PokemonList from "../../Components/PokemonsList.js/PokemonList";
import LeftContainer from "../../Components/LeftContainer/LeftContainer";
import "./Pokedex.scss";

export default function Pokedex() {
  return (
    <div className="pokedex-container">
      <LeftContainer />
      <PokemonList />
    </div>
  );
}
