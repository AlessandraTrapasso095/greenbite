/* pagina 2/2: dedicata ai dettagli della ricetta specifica */

import { useParams, Link } from "react-router-dom"; /* importo dalla libreria del router */
import { useRecipeDetail } from "../hooks/useRecipeDetail"; /* hook custom */
import "../styles/RecipeDetail.css"; /* importo il css */
import logo from "../assets/greenbite.png"; /* importo il logo */
import AsyncState from "../components/AsyncState"; /* wrapper per gestire loading ed error */
import BackButton from "../components/BackButton"; /* bottone back riutilizzabile */

function RecipeDetail() { /* componente principale */
  const { id } = useParams(); /* legge dall'ID dell'url */

  const { recipe, loading, error } = useRecipeDetail(id);

  return (
     <div className="page">
      <div className="container detail-container">

        <Link to="/" className="detail-logo-link">
          <img src={logo} alt="GreenBite" className="detail-logo" />
        </Link>

        <BackButton />

        <AsyncState
          loading={loading}
          error={error}
          loadingFallback={<p className="center-text">Loading...</p>}
          errorFallback={<p className="center-text">{error}</p>}
        >
          <h1 className="detail-title">{recipe?.title}</h1>

          <div className="detail-layout">
            {/* SINISTRA: FOTO + PROCEDIMENTO SOTTO */}
            <div className="detail-left">
              <div className="detail-image-wrapper">
                <img
                  src={recipe?.image}
                  alt={recipe?.title}
                  className="detail-image"
                />
              </div>

              <div className="detail-box detail-summary">
                <h3 className="detail-box__title">Summary</h3>

                {recipe?.summary ? (
                  <div
                    className="html-content"
                    dangerouslySetInnerHTML={{ __html: recipe.summary }}
                  />
                ) : (
                  <p className="muted">No summary available.</p>
                )}
              </div>

              <div className="detail-box detail-instructions">
                <h3 className="detail-box__title">Procedure</h3>

                {recipe?.instructions ? (
                  <div
                    className="html-content"
                    dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                  />
                ) : (
                  <p className="muted">No instructions available.</p>
                )}
              </div>
            </div>

            {/* DESTRA: INFO + INGREDIENTI */}
            <div className="detail-right">
              <div className="detail-box detail-info">
                <p>
                  <strong>Ready in:</strong> {recipe?.readyInMinutes} min
                </p>
                <p>
                  <strong>Servings:</strong> {recipe?.servings}
                </p>
                <p>
                  <strong>Vegetarian:</strong>{" "}
                  {recipe?.vegetarian ? "Yes" : "No"}
                </p>
              </div>

              <div className="detail-box detail-ingredients">
                <h3 className="detail-box__title">Ingredients</h3>

                <ul className="ingredients-list">
                  {(recipe?.extendedIngredients || []).map((item, index) => (
                    <li key={item.id ?? `${item.original}-${index}`}>
                      {item.original}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AsyncState>

      </div>
    </div>
  );
}

export default RecipeDetail; /* per esportarlo */