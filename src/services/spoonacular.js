/* chiamate HTTP */

import axios from "axios"; /* importo libreria axios per le richeiste HTTP */

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; /* chiave API spoonacular importata da .env */

const spoonacular = axios.create({ /*creazione istanza axios */
  baseURL: "https://api.spoonacular.com", /* url spoonacular di base */
  params: {
    apiKey, /* includo apiKey come query parameter cosi axios lo aggiunge a ogni richiesta */
  },
});

export async function searchVegetarianRecipes(query) { /* funzione per la ricerca delle ricette */
  const response = await spoonacular.get("/recipes/complexSearch", { /* mi richiamo l'istanza spponacular creata sopra e mi restituisce la lista di ricette tramite /recipes/complexSearch */
    params: {  /* parametri di ricerca */
      query, /* parola cercata */
      diet: "vegetarian", /* filtro per le sole ricette vegetariane */
      number: 12,
      addRecipeInformation: true, /* chiedo a spoonacular di inserire info per ogni ricetta */
    },
  });

  return response.data.results;
}

export async function getRecipeById(id) { /* richiamo i dettagli della ricetta, mi servirà in RecipeDetail.jsx */
  const response = await spoonacular.get(`/recipes/${id}/information`);
  return response.data;
}
