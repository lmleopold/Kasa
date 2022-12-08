import CollapseArrow from "../../../assets/button/CollaspeArrow";
import styles from "./collapseHeader.module.scss";

/**
 * Retourne l'entête du composant "collapse"
 * @param {String} title titre du collapse
 * @param {Boolean} isOpen booleen variable qui indique l'état du composant (ouvert ou fermé)
 * @param {Function} setIsOpen fonction qui maj l'état du composant
 * @returns {JSX} l'entête du composant "collapse" et met à jour le sens de la flèche
 */
function CollapseHeader({ title, isOpen, setIsOpen }) {
  return (
    <header className={styles.collapseHeader}>
      <h2 className={styles.collapseTitle}>{title}</h2>
      <div>
        <button
          className={styles.collapseButton}
          onClick={() => setIsOpen(isOpen ? false : true)}
        >
          <CollapseArrow
            pathD={
              isOpen
                ? "M21.7268 14.1403L23.8597 11.9951L11.9298 0.0764155L-5.01125e-05 12.0072L2.13287 14.1403L11.9298 4.34257L21.7268 14.1403Z"
                : "M2.66344 0.859549L0.530518 3.00468L12.4604 14.9234L24.3903 2.99263L22.2574 0.859549L12.4604 10.6572L2.66344 0.859549V0.859549Z"
            }
          />
        </button>
      </div>
    </header>
  );
}

export default CollapseHeader;
