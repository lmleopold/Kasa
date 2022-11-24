import styles from "./banner.module.scss";

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
