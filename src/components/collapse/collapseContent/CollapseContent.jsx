import styles from "./collapseContent.module.scss";

function CollapseContent({ content, isList }) {
  return isList ? (
    <ul className={styles.collapseList}>{content}</ul>
  ) : (
    <p className={styles.collapseTxt}>{content}</p>
  );
}
export default CollapseContent;
