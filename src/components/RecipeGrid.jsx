/* legge dal Context */

import { useContext } from "react"; /* importo da react */
import { RecipeContext } from "../context/RecipeContext"; /* importo da recipecontext.jsx */
import "../styles/RecipeGrid.css"; /* anche lo stile */
import RecipeCard from "./RecipeCard"; /* e da recipecard.jsx */

function RecipeGrid() {
  const { recipes, loading, error } = useContext(RecipeContext); 

  if (loading) { /* se loading è true uscirà questo */
   return (
      <div className="grid-state">
        <div className="loader" aria-label="Loading" />
        <p className="grid-state__text">Fetching fresh vegetarian ideas...</p> 
      </div>
    );
  }

  if (error) { /* se c'è errore mostra errore */
    return (
      <div className="grid-state">
        <p className="grid-state__text grid-state__text--error">{error}</p>
      </div>
    );
  }

  if (!recipes || recipes.length === 0) { /* se non ci sono ricette ritorna di cercare altro come insalata o pasta */
    return (
      <div className="grid-state">
        <p className="grid-state__text">
          Try searching something like <span className="hint">“pasta”</span> or{" "}
          <span className="hint">“salad”</span>. 
        </p>
      </div>
    );
  }

  return ( /* render principale delle ricette */
    <section className="recipe-grid">
      {recipes.map((recipe) => ( /* mi ritorna l'array delle ricette */
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}

export default RecipeGrid; /* esportabile */

