import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Acceuil</Link>
      <Link to="/About">A Propos</Link>
    </nav>
  );
}

export default Navbar;
