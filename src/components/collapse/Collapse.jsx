import { useState } from "react";
import styles from "./collapse.module.scss";
import CollapseContent from "./collapseContent/CollapseContent";
import CollapseHeader from "./collapseHeader/CollapseHeader";

function Collapse({ title, content, isList, page }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={`${styles.collapseItem} ${styles[page]}`}>
      <CollapseHeader title={title} isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <CollapseContent content={content} isList={isList} />}
    </section>
  );
}
export default Collapse;
