/* gestione globale API */

import { createContext, useState } from "react"; /* importo da react */
import { searchVegetarianRecipes } from "../services/spoonacular"; /* importo da spoonacular */
import { logError } from "../utils/logError"; /* helper per logging error */

export const RecipeContext = createContext(); /* creo il context */

export function RecipeProvider({ children }) { /* esporto la funzione */
  const [recipes, setRecipes] = useState([]); /* ricette */
  const [query, setQuery] = useState(""); /* stringa per searchbar */

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function searchRecipes() { /* lettura query, chiamata API e aggiorna recipes, loading e error */
    try {
      if (!query.trim()) {  /* controllo se stringa vuota o solo spazi */
        setError("Please enter a search term.");
        setRecipes([]);
        return; /* blocca la funzione */
      }
      
      setError(null); /* pulizia di eventuali errori */
      setLoading(true); /* caricamento dati */

      const results = await searchVegetarianRecipes(query); /* richiesta http */
      setRecipes(results); /* array di ricette */
    } catch (err) { /* in caso di errore */
      logError(err, "RecipeContext.searchRecipes"); 
      setError("Something went wrong while fetching recipes."); /* esce questo */
      setRecipes([]);
    } finally {
      setLoading(false); /* in ogni caso loading si spegne */
    }
  }

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        query,
        setQuery,
        loading,
        error,
        searchRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}