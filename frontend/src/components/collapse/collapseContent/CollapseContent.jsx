import styles from "./collapseContent.module.scss";

/**
 * Retourne le contenu du composant collapse
 * (sous forme de liste ou de paragraphe)
 * @param {JSX | String} content contenu du composant collapse (liste ou bien paragraphe)
 * @param {Boolean} isList booleen indique si "content" est sous forme de liste  ou non
 * @returns une liste ou un paragraphe
 */
function CollapseContent({ content, isList }) {
  return isList ? (
    <ul className={styles.collapseList}>{content}</ul>
  ) : (
    <p className={styles.collapseTxt}>{content}</p>
  );
}
export default CollapseContent;
