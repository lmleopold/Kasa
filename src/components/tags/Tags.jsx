import styles from "./tags.module.scss";

function Tags({ tags }) {
  return (
    <ul className={styles.tagTab}>
      {tags.map((tag, index) => (
        <li className={styles.tagTab__tag} key={`${tag + index}`}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
export default Tags;
