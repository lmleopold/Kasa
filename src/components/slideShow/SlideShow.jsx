import SlideShowArrow from "../../assets/button/SlideShowArrow";
import styles from "./slideShow.module.scss";
import { useState } from "react";

function SlideShow({ cover, pictures }) {
  let indexCover = pictures.findIndex((picture) => cover === picture);
  const [indexTab, updateIndex] = useState(indexCover);

  // function numberOfPicture(pictureURL) {
  //   return pictureURL.slice(
  //     pictureURL.lastIndexOf("-") + 1,
  //     pictureURL.indexOf(".jpg")
  //   );
  // }

  function scrollRight() {
    if (indexTab === pictures.length - 1) {
      updateIndex(0);
    } else {
      updateIndex((index) => index + 1);
    }
  }

  function scrollLeft() {
    if (indexTab === 0) {
      updateIndex(pictures.length - 1);
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
            <button className={styles.arrowButton} onClick={scrollLeft}>
              <SlideShowArrow pathD="M47.0399 7.78312L39.9199 0.703125L0.359863 40.3031L39.9599 79.9031L47.0399 72.8231L14.5199 40.3031L47.0399 7.78312Z" />
            </button>
            <button className={styles.arrowButton} onClick={scrollRight}>
              <SlideShowArrow pathD="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z" />
            </button>
          </div>
          <p className={styles.indexPicture}>
            {indexTab + 1}/{pictures.length}
          </p>
        </>
      )}
    </header>
  );
}
export default SlideShow;
