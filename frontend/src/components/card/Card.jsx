import styles from "./card.module.scss";
import { Link } from "react-router-dom";

/**
 * Renvoie une carte logement pour la page d'acceuil
 * @param {String} title titre du logement
 * @param {String} id id du logement
 * @param {String} cover URL de l'image de couverture
 * @returns {JSX} une carte logement pour la page d'acceuil
 */
function Card({ title, id, cover }) {
  return (
    <Link to={`/SingleProduct/${id}`}>
      <div className={styles.card}>
        <img
          className={styles.cover}
          src={cover}
          alt="aperçu du logement"
        ></img>
        <div className={styles.masque}></div>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Link>
  );
}
export default Card;
