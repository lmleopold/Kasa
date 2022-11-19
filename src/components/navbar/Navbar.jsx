import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to="/About">A Propos</Link>
    </nav>
  );
}

export default Navbar;
