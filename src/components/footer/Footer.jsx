import LogoFooter from "../logo/LogoFooter";
import styles from "./footer.module.scss";

/**
 * Retourne le footer qui contient le logo et un paragraphe
 * @returns {JSX} le footer
 */
function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoFooter />
      <p className={styles.footerTxt}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
