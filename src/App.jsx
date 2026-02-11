/* Definisce le pagine dell'app */

import { Routes, Route } from "react-router-dom"; /* importo da react router */
import Home from "./pages/Home"; /* importo le pagine Home */
import RecipeDetail from "./pages/RecipeDetail"; /* e RecipeDetail */

function App() { /* definisco sia root sito "/" con componente "home", e sia la seconda route di recipedetail */ 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>

      <footer className="app-footer">
        PROGETTO START2IMPACT · Web Developer Alessandra Trapasso
      </footer>
    </>
  );
}

export default App; /* per esportarla */
