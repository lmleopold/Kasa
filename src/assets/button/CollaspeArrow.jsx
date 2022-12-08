import styles from "./arrow.module.scss";
/**
 * Renvoit la flèche du collapse
 * @param {String} pathD direction de la flèche (haut ou bas)
 * @returns {JSX} flèche du collapse
 */
function CollapseArrow({ pathD }) {
  return (
    <svg
      className={styles.collapseArrow}
      width="25"
      height="15"
      viewBox="0 0 25 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={pathD} fill="white" />
    </svg>
  );
}
export default CollapseArrow;
