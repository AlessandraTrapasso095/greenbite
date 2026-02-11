/* scrivo nel Context */

import { useContext } from "react"; /* importo da react */
import { RecipeContext } from "../context/RecipeContext"; /* improto da recipecontext.jsx */
import "../styles/SearchBar.css"; /* anche lo stile */

function SearchBar() { /* funzione della barra di ricerca */
  const { query, setQuery, searchRecipes } = useContext(RecipeContext); /* prendo da recipecontext */

  function handleChange(event) { /* evento scrittura utente nell'input */
    setQuery(event.target.value); /* aggiorno la variabile query con ciò che scrive l'utente */
  }

  function handleSubmit(event) { 
    event.preventDefault(); /* blocca il comportamento di ricarca pagina */
    searchRecipes(); /* prendo la funzione da recipecontext.jsx per fare chiamata API */
  }

  return ( 
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search vegetarian recipes..." /* esce nella barra di ricerca */
        value={query}
        onChange={handleChange}
      />

      <button type="submit" className="search-bar__button">
        Search
      </button>
    </form>
  );
}

export default SearchBar; /* per esportarla */
