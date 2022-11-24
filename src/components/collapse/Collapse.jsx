import { useState } from "react";
import styles from "./collapse.module.scss";
import ArrowBottom from "../../assets/button/ArrowBottom";
import ArrowTop from "../../assets/button/ArrowTop";

function Collapse({ title, content, page }) {
  const [isOpen, setIsOpen] = useState(false);

  const collapseButton = isOpen ? <ArrowTop /> : <ArrowBottom />;

  const collapseContent =
    page === "about" ? (
      <p className={styles.collapseTxt}>{content}</p>
    ) : (
      <ul className={styles.collapseTxt}>{content}</ul>
    );

  return isOpen ? (
    <section className={`${styles.collapseItem} ${styles[page]}`}>
      <header className={styles.collapseHeader}>
        <h2 className={styles.collapseTitle}>{title}</h2>
        <div>
          <button onClick={() => setIsOpen(isOpen ? false : true)}>
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
          <button onClick={() => setIsOpen(isOpen ? false : true)}>
            {collapseButton}
          </button>
        </div>
      </header>
    </section>
  );
}
export default Collapse;
