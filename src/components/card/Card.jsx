import styles from "./card.module.scss";
import { Link } from "react-router-dom";

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
