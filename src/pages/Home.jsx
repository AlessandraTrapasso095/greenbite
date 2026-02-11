/* Page 1/2: Home principale */

/* mi prendo i componenti principali */
import Header from "../components/Header"; /* importo da header */
import SearchBar from "../components/SearchBar"; /* da searchbar*/
import RecipeGrid from "../components/RecipeGrid"; /* e da recipegrid */

function Home() { /* aggiungo un div cosi assemblo i componenti */
  return (
    <div className="page">
      <div className="container">
        <Header />
        <SearchBar />
        <RecipeGrid />
      </div>
    </div>
  );
}

export default Home; /* per esportarla */
