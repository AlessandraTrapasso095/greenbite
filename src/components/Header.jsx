/* header riutilizzabile */

import { Link } from "react-router-dom"; /* importo dal react router */
import "../styles/Header.css"; /* stile compreso */
import logo from "../assets/greenbite.png"; /* importo il logo greenbite */

function Header() { /* funzione header con logo cliccabile, testo, sottotitolo */
  return (
    <header className="header">
      <Link to="/" className="header__brand" aria-label="Go to home">
        <img src={logo} alt="GreenBite logo" className="header__logo" />
      </Link>

      <p className="header__subtitle">Vegetarian recipes made easy</p>
    </header>
  );
}

export default Header; /* per esportarlo */


