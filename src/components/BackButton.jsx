import { Link } from "react-router-dom"; /* importo dalla libreria del router */

function BackButton() { /* bottone riutilizzabile per tornare alla home */
  return (
    <Link className="back-button" to="/">
      ← Back to recipes
    </Link>
  );
}

export default BackButton; /* per esportarlo */