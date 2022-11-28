import ArrowRight from "../../assets/button/ArrowRight";
import ArrowLeft from "../../assets/button/ArrowLeft";
import styles from "./carrousel.module.scss";
import { useState } from "react";

/**
 * Extrait le numéro de l'image entrée en argument
 * @param {String} pictureURL
 */
function numberOfPicture(pictureURL) {
  return pictureURL.slice(
    pictureURL.lastIndexOf("-") + 1,
    pictureURL.indexOf(".jpg")
  );
}

function scrollRight(indexDisplayed, numberOfPictures) {
  console.log(numberOfPictures);
  if (indexDisplayed === numberOfPictures) {
    indexDisplayed = 0;
  } else {
    indexDisplayed++;
  }
  console.log({ indexDisplayed }, numberOfPictures);
  return indexDisplayed;
}

function scrollLeft(indexDisplayed, numberOfPictures) {
  if (indexDisplayed === 0) {
    indexDisplayed = numberOfPictures;
  } else {
    indexDisplayed--;
  }
  return indexDisplayed;
}

function Carroussel({ cover, pictures }) {
  let indexCover = pictures.findIndex(
    (picture) => numberOfPicture(picture) === numberOfPicture(cover)
  );
  const [indexDisplayed, unpdateIndex] = useState(indexCover);
  let activePicture = pictures[indexDisplayed];
  return pictures.length === (0 || 1) ? (
    <header className={styles.banner}>
      <div className={styles.masque}></div>
      <img src={activePicture} className={styles.img} alt=""></img>
    </header>
  ) : (
    <header className={styles.banner}>
      <div className={styles.masque}></div>
      <img src={activePicture} className={styles.img} alt=""></img>
      <div className={styles.arrows}>
        <button
          className={styles.arrowButton}
          onClick={() =>
            unpdateIndex(scrollLeft(indexDisplayed, pictures.length - 1))
          }
        >
          <ArrowLeft />
        </button>
        <button
          className={styles.arrowButton}
          onClick={() =>
            unpdateIndex(scrollRight(indexDisplayed, pictures.length - 1))
          }
        >
          <ArrowRight />
        </button>
      </div>
      <p className={styles.indexPicture}>
        {indexDisplayed + 1}/{pictures.length}
      </p>
    </header>
  );
}
export default Carroussel;
