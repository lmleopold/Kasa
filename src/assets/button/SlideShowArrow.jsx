import styles from "./arrow.module.scss";

function SlideShowArrow({ width, pathD }) {
  return (
    <svg
      className={styles.slideShowArrow}
      width={`${width}`}
      // width="48"
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
