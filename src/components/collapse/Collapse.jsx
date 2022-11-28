import { useState } from "react";
import styles from "./collapse.module.scss";
import ArrowBottom from "../../assets/button/ArrowBottom";
import ArrowTop from "../../assets/button/ArrowTop";

function Collapse({ title, content, isList, page }) {
  const [isOpen, setIsOpen] = useState(true);

  const collapseButton = isOpen ? <ArrowTop /> : <ArrowBottom />;

  const collapseContent = isList ? (
    <ul className={styles.collapseList}>{content}</ul>
  ) : (
    <p className={styles.collapseTxt}>{content}</p>
  );

  return isOpen ? (
    <section className={`${styles.collapseItem} ${styles[page]}`}>
      <header className={styles.collapseHeader}>
        <h2 className={styles.collapseTitle}>{title}</h2>
        <div>
          <button
            className={styles.collapseButton}
            onClick={() => setIsOpen(isOpen ? false : true)}
          >
            {collapseButton}
          </button>
        </div>
      </header>
      {collapseContent}
    </section>
  ) : (
    <section className={`${styles.collapseItem} ${styles[page]}`}>
      <header className={styles.collapseHeader}>
        <h2 className={styles.collapseTitle}>{title}</h2>
        <div>
          <button
            className={styles.collapseButton}
            onClick={() => setIsOpen(isOpen ? false : true)}
          >
            {collapseButton}
          </button>
        </div>
      </header>
    </section>
  );
}
export default Collapse;
