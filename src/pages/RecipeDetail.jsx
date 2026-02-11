/* pagina 2/2: dedicata ai dettagli della ricetta specifica */

import { useEffect, useState } from "react"; /* importo da react i due hook */
import { useParams, Link } from "react-router-dom"; /* importo dalla libreria del router */
import { getRecipeById } from "../services/spoonacular"; /* richiamo da spoonacular.jsx */
import "../styles/RecipeDetail.css"; /* importo il css */
import logo from "../assets/greenbite.png"; /* importo il logo */

function RecipeDetail() { /* componente principale */
  const { id } = useParams(); /* legge dall'ID dell'url */

  const [recipe, setRecipe] = useState(null); /* recipe contiene la ricetta, setrecipe la aggiorna */
  const [loading, setLoading] = useState(true); /* per indicare il loading */
  const [error, setError] = useState(null); /* per indicare l'errore */

  useEffect(() => {
    async function fetchRecipe() {
      try {
        setError(null); /* pulizia di un eventuale errore */
        setLoading(true); /* caricamento */

        const result = await getRecipeById(id); /* variabile che conterrà i dati della API */
        setRecipe(result); /* mette i dati nello stato recipe, cosi non è più null */
      } catch (err) { /* se qualcosa non va, si entra in catch e si cattura l'errore */
        console.error(err);
        setError("Unable to load recipe details."); /* messaggio in UI */
      } finally { /* in ogni caso si disattiva il loadin */
        setLoading(false);
      }
    }

    fetchRecipe(); /* cambia id */
  }, [id]);

  if (loading) /* in caso di loading ritorni "loading.." */
    return (
      
      <div className="page">
        <div className="container detail-container">
          <Link className="back-button" to="/">
            ← Back to recipes
          </Link>

          <p style={{ textAlign: "center" }}>Loading...</p> 
        </div>
      </div>
    );

  if (error) { /* in caso di errore mandi errore */
    return (
      <div className="page">
        <div className="container detail-container">
          <Link className="back-button" to="/"> {/* bottone per tornare indietro */}
            ← Back to recipes
          </Link>

          <p style={{ textAlign: "center" }}>{error}</p>
        </div>
      </div>
    );
   }

  return (
     <div className="page">
    <div className="container detail-container">

      <Link to="/" className="detail-logo-link">
        <img src={logo} alt="GreenBite" className="detail-logo" />
      </Link>

      <Link className="back-button" to="/">
        ← Back to recipes
      </Link>

        <h1 className="detail-title">{recipe.title}</h1>

        <div className="detail-layout">
          {/* SINISTRA: FOTO + PROCEDIMENTO SOTTO */}
          <div className="detail-left">
            <div className="detail-image-wrapper">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="detail-image"
              />
            </div>

            <div className="detail-box detail-summary">
              <h3 className="detail-box__title">Summary</h3>

              {recipe.summary ? (
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

              {recipe.instructions ? (
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
                <strong>Ready in:</strong> {recipe.readyInMinutes} min
              </p>
              <p>
                <strong>Servings:</strong> {recipe.servings}
              </p>
              <p>
                <strong>Vegetarian:</strong>{" "}
                {recipe.vegetarian ? "Yes" : "No"}
              </p>
            </div>

            <div className="detail-box detail-ingredients">
              <h3 className="detail-box__title">Ingredients</h3>

              <ul className="ingredients-list">
                {(recipe.extendedIngredients || []).map((item, index) => (
                  <li key={item.id ?? `${item.original}-${index}`}>
                    {item.original}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail; /* per esportarlo */