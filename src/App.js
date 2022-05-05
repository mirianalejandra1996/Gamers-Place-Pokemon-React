import "./scss/App.scss";
import Dashboard from "./Layout/Dashboard";
import Pokedex from "./Pages/Pokedex/Pokedex";
import Pokemon from "./Pages/Pokemon/Pokemon";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Pokedex />} />
          <Route path="pokemon/:id" element={<Pokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
