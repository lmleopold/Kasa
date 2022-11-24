import LogoWhite from "../logo/LogoWhite";
import styles from "./footer.module.scss";

function footer() {
  return (
    <footer className={styles.footer}>
      <LogoWhite />
      <p className={styles.footerTxt}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default footer;
