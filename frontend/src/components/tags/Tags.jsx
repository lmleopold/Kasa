import styles from "./tags.module.scss";

/**
 * Retourne une ligne d'étoiles correspondant à la note de l'hôte (ul-li)
 * @param {String[]} tags tableau des mots-clez
 * @returns {JSX}
 */
function Tags({ tags }) {
  return (
    <ul className={styles.tagTab}>
      {tags.map((tag, index) => (
        // chaque tag est encapsulé dans un li
        <li className={styles.tagTab__tag} key={`${tag + index}`}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
export default Tags;
