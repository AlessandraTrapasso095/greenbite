/* legge dal Context */

import { useContext } from "react"; /* importo da react */
import { RecipeContext } from "../context/RecipeContext"; /* importo da recipecontext.jsx */
import "../styles/RecipeGrid.css"; /* anche lo stile */
import RecipeCard from "./RecipeCard"; /* e da recipecard.jsx */
import AsyncState from "./AsyncState"; 

function RecipeGrid() {
  const { recipes, loading, error } = useContext(RecipeContext); 

  return (
    <AsyncState
      loading={loading}
      error={error}
      loadingFallback={
        <div className="grid-state">
          <div className="loader" aria-label="Loading" />
          <p className="grid-state__text">Fetching fresh vegetarian ideas...</p>
        </div>
      }
      errorFallback={
        <div className="grid-state">
          <p className="grid-state__text grid-state__text--error">{error}</p>
        </div>
      }
    >
      {!recipes || recipes.length === 0 ? (
        <div className="grid-state">
          <p className="grid-state__text">
            Try searching something like <span className="hint">“pasta”</span> or{" "}
            <span className="hint">“salad”</span>.
          </p>
        </div>
      ) : (
        <section className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      )}
    </AsyncState>
  );
}

export default RecipeGrid; /* esportabile */

