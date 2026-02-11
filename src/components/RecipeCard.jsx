/* rappresenta la card che mostra immagine e titolo della ricetta */

import { Link } from "react-router-dom"; /* importo dalla libreria router */
import "../styles/RecipeCard.css"; /* anche stile */

/* struttura della card, collegata a recipegrid.jsx che passa chiamata recipe e che passa la ricetta */
function RecipeCard({ recipe }) { 
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div className="recipe-card__media">
        <img
          className="recipe-card__image"
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
        />
      </div>
      
      <h3 className="recipe-card__title">{recipe.title}</h3>
    </Link>
  );
}

export default RecipeCard; /* esporto */
