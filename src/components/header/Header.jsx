import Navbar from "../navbar/Navbar";
import LogoOrange from "../logo/LogoOrange";
import styles from "../header/header.module.scss";

function Header() {
  return (
    <header>
      <LogoOrange />
      <Navbar />
    </header>
  );
}
export default Header;
