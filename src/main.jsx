/* Da qui avvio React e Context */

import ReactDOM from "react-dom/client"; /* prendo la libreria che collega react al dom */
import { BrowserRouter } from "react-router-dom"; /* importo react router */
import { RecipeProvider } from "./context/RecipeContext"; /* anche recipecontext */
import App from "./App"; /* app.jsx */
import "./index.css"; /* e il css */

ReactDOM.createRoot(document.getElementById("root")).render( /* mi prendo id "root" da html, lo faccio controllare da react e renderizzo */ 
  <BrowserRouter>
    <RecipeProvider>
      <App /> 
    </RecipeProvider>
  </BrowserRouter>
);
