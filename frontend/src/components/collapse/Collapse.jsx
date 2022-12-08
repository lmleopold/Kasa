import { useState } from "react";
import styles from "./collapse.module.scss";
import CollapseContent from "./collapseContent/CollapseContent";
import CollapseHeader from "./collapseHeader/CollapseHeader";

/**
 * Retourne le collapse entier en appelant l'objet CollapseHeader et l'objet CollapseContent
 * @param {String} title Titre du collapse
 * @param {JSX | String} content Titre du collapse
 * @param {Boolean} isList Booleen indique si le "content" est une lsite ou non
 * @param {String} page Booleen indique à quelle page appartient le collapse
 * @returns
 */
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
