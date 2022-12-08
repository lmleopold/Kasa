import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

/**
 * Renvoie la barre de navigation du header
 * @returns {JSX} la barre de navigation du header
 */
function Navbar() {
  return (
    <nav>
      <Link to="/" className={styles.navLink}>
        Accueil
      </Link>
      <Link to="/About" className={styles.navLink}>
        A Propos
      </Link>
    </nav>
  );
}

export default Navbar;
