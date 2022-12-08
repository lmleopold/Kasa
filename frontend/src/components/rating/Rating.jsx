import Star from "../../assets/stars/Star";
import styles from "./rating.module.scss";

/**
 * Génère la note de l'hôte sous forme d'une liste de composants "étoile"
 * @param {Number} grade Number Note de l'hôte sur 5
 * @returns {JSX} liste de composants "étoile"
 */
function Rating({ grade }) {
  const rating = [];
  for (let i = 0; i < grade; i++) {
    // On met autant d'étoiles brillantes dans un tableau que la note sur 5
    rating.push(<Star color="--shinyStar" />);
  }
  for (let i = 0; i < 5 - grade; i++) {
    // On complète avec des étoiles sombres
    rating.push(<Star color="--darkStar" />);
  }
  return (
    // le composant <ul> sera la ligne d'étoiles
    <ul className={styles.rating}>
      {rating.map((star, index) => (
        // chaque étoile est encapsulée dans un <li>
        <li className={styles.rating__star} key={`${star + index}`}>
          {star}
        </li>
      ))}
    </ul>
  );
}
export default Rating;
