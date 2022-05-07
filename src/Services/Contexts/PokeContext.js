import React, { useState, useContext, createContext, useEffect } from "react";

const CartP = createContext();

const CartContextP = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [url, setUrl] = useState(
  //   "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  //   );
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  const getAllPokemons = async (url) => {
    // TODO: Create a loader
    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach(async (pokemon) => {
      const responsePokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const dataPokemon = await responsePokemon.json();
      setPokemons((currentList) => [...currentList, dataPokemon]);
    });
    console.log(pokemons);
  };

  useEffect(() => {
    getAllPokemons(url);
  }, [url]);

  return (
    <CartP.Provider
      value={{
        pokemons,
        // cart,
        // setCart,
        // clientName,
        // setClientName,
        // tableNumber,
        // setTableNumber,
        // isClean,
        // setIsClean,
      }}
    >
      {children}
    </CartP.Provider>
  );

  //   !-------------------------
  //   const [cart, setCart] = useState([]);
  //   const [clientName, setClientName] = useState("CONTEXTO POKEMON");
  //   const [tableNumber, setTableNumber] = useState("POKEE 000000000000000000000");
  //   const [isClean, setIsClean] = useState(false);

  //   useEffect(() => {}, [tableNumber, clientName, isClean]);

  //   useEffect(() => {
  //     if (isClean) {
  //       setTableNumber("");
  //       setClientName("");
  //     }
  //   }, [isClean]);

  //   return (
  //     <CartP.Provider
  //       value={{
  //         cart,
  //         setCart,
  //         clientName,
  //         setClientName,
  //         tableNumber,
  //         setTableNumber,
  //         isClean,
  //         setIsClean,
  //       }}
  //     >
  //       {children}
  //     </CartP.Provider>
  //   );
};

export default CartContextP;

export const useCartP = () => useContext(CartP);
