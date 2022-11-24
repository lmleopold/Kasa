import Navbar from "../navbar/Navbar";
import LogoOrange from "../logo/LogoOrange";
import styles from "../header/header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <LogoOrange className={styles.logo} />
      <Navbar />
    </header>
  );
}
export default Header;
