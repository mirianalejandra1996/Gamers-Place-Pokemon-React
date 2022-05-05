import React from "react";
import PokemonList from "../../Components/PokemonsList.js/PokemonList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Pokedex.scss";

export default function Pokedex() {
  return (
    <div className="pokedex-container">
      <Sidebar />
      <PokemonList />
    </div>
  );
}
