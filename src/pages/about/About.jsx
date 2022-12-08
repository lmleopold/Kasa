import Banner from "../../components/banner/Banner";
import mountainLandscape from "../../assets/mountain-large.jpg";
import Collapse from "../../components/collapse/Collapse";
import styles from "./about.module.scss";
/**
 * Retourne le composant principal (main) de la page About comprent:
 * une bannière et 4 composants collapse
 * @returns {JSX}
 */
function About() {
  return (
    <main>
      <Banner picture={mountainLandscape} altText="Mountain Landscape" />
      <div className={styles.container}>
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
          page="about"
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          page="about"
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          page="about"
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          page="about"
        />
      </div>
    </main>
  );
}

export default About;
