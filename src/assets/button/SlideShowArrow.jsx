import styles from "./arrow.module.scss";

/**
 * Renvoit la flèche du carroussel (slideshow)
 * @param {String} pathD direction de la flèche (gauche ou droite)
 * @returns {JSX} flèche du slideshow
 */
function SlideShowArrow({ pathD }) {
  return (
    <svg
      className={styles.slideShowArrow}
      /* on change la largeur pour modifier la taille de la flèche
      le rapport hauteur/largeur est conservé*/
      height="80"
      viewBox="0 0 48 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={pathD} fill="white" />
    </svg>
  );
}
export default SlideShowArrow;
