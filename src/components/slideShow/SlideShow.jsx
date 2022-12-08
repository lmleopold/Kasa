import SlideShowArrow from "../../assets/button/SlideShowArrow";
import styles from "./slideShow.module.scss";
import { useState } from "react";

/**
 * Retourne un carroussel permettant de faire défiler les photos du logement
 * @param {String} cover URL de l'image de couverture
 * @param {String[]} pictures URL des images décrivant le logement
 * @returns {JSX}
 */
function SlideShow({ cover, pictures }) {
  // Détermine le rang de l'image de couverture dans le tableau des images de la BDD
  //(au cas où ce n'est pas la 1ère du tableau)
  let indexCover = pictures.findIndex((picture) => cover === picture);

  // IndexTab est le rang dans le tableau de la photo affiché sur le carroussel
  // Le défilement démarre au rang de l'image de couverture (indexCover)
  const [indexTab, updateIndex] = useState(indexCover);

  /**
   * Fait défiler les images à droite
   */
  function scrollRight() {
    if (indexTab === pictures.length - 1) {
      updateIndex(0); //A la dernière image la fonction renvoit la 1ère image
    } else {
      updateIndex((index) => index + 1);
    }
  }
  /**
   * Fait défiler les images à gauche
   */
  function scrollLeft() {
    if (indexTab === 0) {
      updateIndex(pictures.length - 1); //A la première image la fonction renvoit la dernière image
    } else {
      updateIndex((index) => index - 1);
    }
  }

  return (
    <header className={styles.slideShow}>
      <div className={styles.masque}></div>
      <img src={pictures[indexTab]} className={styles.img} alt=""></img>

      {/* Suppression des flèches et de l'index du carroussel s'il n'y pas plus d'1 photo*/}
      {pictures.length !== (0 || 1) && (
        <>
          <div className={styles.arrows}>
            {/* appelle la fonction scrollLeft au clic sur la fleche gauche */}
            <button className={styles.arrowButton} onClick={scrollLeft}>
              {/* indique le sens vers la gauche au composant slideShowArrow*/}
              <SlideShowArrow pathD="M47.0399 7.78312L39.9199 0.703125L0.359863 40.3031L39.9599 79.9031L47.0399 72.8231L14.5199 40.3031L47.0399 7.78312Z" />
            </button>
            {/* appelle la fonction scrollRight au clic sur la fleche droite */}
            <button className={styles.arrowButton} onClick={scrollRight}>
              {/* indique le sens vers la droite au composant slideShowArrow*/}
              <SlideShowArrow pathD="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z" />
            </button>
          </div>
          <p className={styles.indexPicture}>
            {/* l'index affiché sur le carroussel = 1 quand le rang de l'image affichée est 0 dans le tableau*/}
            {indexTab + 1}/{pictures.length}
          </p>
        </>
      )}
    </header>
  );
}
export default SlideShow;
