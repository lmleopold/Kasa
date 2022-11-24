import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <nav>
      <Link to="/" className={styles.navLink}>
        Acceuil
      </Link>
      <Link to="/About" className={styles.navLink}>
        A Propos
      </Link>
    </nav>
  );
}

export default Navbar;
