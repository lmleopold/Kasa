import { Link } from "react-router-dom";
import styles from "./notFound.module.scss";

/**
 * Affiche le contenu de la page NotFound
 * @returns {JSX}
 */
function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
      </div>
      <p className={styles.subtitle}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.link}>
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default NotFound;
