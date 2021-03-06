import "./scss/App.scss";
import Dashboard from "./Layout/Dashboard";
import Pokedex from "./Pages/Pokedex/Pokedex";
import Pokemon from "./Pages/Pokemon/Pokemon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeContext from "./Services/Contexts/PokeContext";

function App() {
  return (
    <BrowserRouter>
      <PokeContext>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Pokedex />} />
            <Route path="pokemon/:id" element={<Pokemon />} />
          </Route>
        </Routes>
      </PokeContext>
    </BrowserRouter>
  );
}

export default App;
