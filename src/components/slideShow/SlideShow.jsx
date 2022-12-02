import ArrowRight from "../../assets/button/ArrowRight";
import ArrowLeft from "../../assets/button/ArrowLeft";
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

  return pictures.length === (0 || 1) ? (
    <header className={styles.banner}>
      <div className={styles.masque}></div>
      <img src={pictures[indexTab]} className={styles.img} alt=""></img>
    </header>
  ) : (
    <header className={styles.banner}>
      <div className={styles.masque}></div>
      <img src={pictures[indexTab]} className={styles.img} alt=""></img>
      <div className={styles.arrows}>
        <button className={styles.arrowButton} onClick={scrollLeft}>
          <ArrowLeft />
        </button>
        <button className={styles.arrowButton} onClick={scrollRight}>
          <ArrowRight />
        </button>
      </div>
      <p className={styles.indexPicture}>
        {indexTab + 1}/{pictures.length}
      </p>
    </header>
  );
}
export default SlideShow;
