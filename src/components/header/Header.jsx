import Navbar from "../navbar/Navbar";
import LogoOrange from "../logo/LogoOrange";
import styles from "../header/header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      {/* <div className={styles.container}> */}
      <LogoOrange className={styles.logo} />
      {/* </div> */}
      <Navbar />
    </header>
  );
}
export default Header;
