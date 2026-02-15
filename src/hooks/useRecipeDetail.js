import { useEffect, useState } from "react"; /* importo da react */
import { getRecipeById } from "../services/spoonacular"; /* richiamo da spoonacular.jsx */
import { logError } from "../utils/logError"; /* helper per logging error */

export function useRecipeDetail(id) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; /* flag per evitare memory leak */

    async function fetchRecipe() {
      try {
        setError(null);
        setLoading(true);

        const result = await getRecipeById(id);

        if (isMounted) {
          setRecipe(result);
        }
      } catch (err) {
        logError(err, "useRecipeDetail"); 
        if (isMounted) {
          setError("Unable to load recipe details.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchRecipe();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { recipe, loading, error };
}