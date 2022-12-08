import styles from "./banner.module.scss";
/**
 * Retourne la bannière de la page Home et About
 * @param {String} picture URL de l'image
 * @param {String} altText texte alternatif de l'image
 * @param {String} [bannerTitle] titre qui s'affiche sur la bannière
 * @returns {JSX} bannière de la page Home et About
 */
function Banner({ picture, altText, bannerTitle }) {
  return (
    <header className={styles.banner}>
      <div className={styles.masque}></div>
      <img src={picture} className={styles.img} alt={altText}></img>
      <h1 className={styles.bannerTitle}>{bannerTitle}</h1>
    </header>
  );
}
export default Banner;
