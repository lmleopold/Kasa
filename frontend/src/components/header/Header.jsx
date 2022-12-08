import Navbar from "../navbar/Navbar";
import LogoHeader from "../logo/LogoHeader";
import styles from "../header/header.module.scss";

/**
 * Renvoi le header qui contient le logo dans un container et la barre de navigation
 * @returns {JSX}
 */
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoHeader className={styles.logo} />
      </div>
      <Navbar />
    </header>
  );
}
export default Header;
