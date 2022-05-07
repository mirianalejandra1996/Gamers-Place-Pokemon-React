import React from "react";
import { usePokedex } from "../../Services/Contexts/PokeContext";
import "./OptionsButtons.scss";

export default function OptionsButtons({ optionsType }) {
  const { types, setTypes, pokemons } = usePokedex();

  const optionsData = {
    type: 1,
  };

  const optionsBtns = Object.entries(optionsData);

  const addFilter = () => {
    console.log("added", optionsType);
    const typeSelectedExist = types.includes(optionsType);

    if (typeSelectedExist) {
      // ! to remove the option selected
      setTypes(types.filter((type) => type !== optionsType));
    } else {
      // ! to add the option selected
      setTypes((currentTypes) => [...currentTypes, optionsType]);
    }
    // !-------------------------------------------------------------------

    debugger;
    const pokemonsFiltered = pokemons.filter((pokemon) => {
      let pokemonTypes = pokemon.types.map((typePoke) => {
        return typePoke.type.name;
      }); // Retorna el tipo que posee el pokemon exmp ["fire", "water"]

      if (types.length === 1) {
        return pokemonTypes.includes(types[0]);
      } else {
        return types.every((e) => pokemonTypes.includes(e));
      }
    });
    console.log("it is filtered now", pokemonsFiltered);
  };

  console.log("Look my selected options!, ", types);
  // console.log("pokemaaaaaaaaan, ", pokemons);

  return (
    <div className="options-pokemon">
      {optionsBtns.map((option, index) => (
        <div
          key={`options-${index}`}
          onClick={addFilter}
          className="circle-type"
          style={{
            backgroundColor:
              index === 0 ? "rgb(142, 145, 250)" : "rgb(249, 118, 108)",
          }}
        >
          <span className="format-icon icon-poison">
            {index === 0 ? "T" : "D"}
          </span>
        </div>
      ))}
    </div>
  );
}

// ! Ese pokemon es un objeto!!
// const res = pokemons.filter((item) => types.includes(item));
// res = arr1.filter(item => !arr2.includes(item));
// console.log("FILTRADO!, ", res); // filtró [1,3]
// var arr1 = [1, 2, 3, 4],
//   arr2 = [2, 4],
//   res = arr1.filter((item) => arr2.includes(item));
// // res = arr1.filter(item => !arr2.includes(item));
// console.log("arr1,", arr1); // filtró [1,3]
// console.log("arr2,", arr2); // filtró [1,3]
// console.log("debería filtrar [ 2 y 4]", res); // filtró [1,3]

//     var arr1 = [1,2,3,4],
//     arr2 = [2,4],
//     res = arr1.filter(item => !arr2.includes(item));
// console.log(res);
// console.log('los filtré,', )
