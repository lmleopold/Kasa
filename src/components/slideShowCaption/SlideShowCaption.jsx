import styles from "./slideShowCaption.module.scss";
import Rating from "../rating/Rating";
import HostInfos from "../hostInfos/HostInfos";
import Tags from "../tags/Tags";

/**
 * Ce composant renferme une synthèse succinte décrivant le logement:
 * le nom, l'emplacement, les mots-clez, le nom , la photo et la note de l'hôte
 *
 * @param {String} title titre du logement
 * @param {String} location emplacement du logement
 * @param {String[]} tags mots-clez décrivant le logement
 * @param {String} host prénom+nom de l'hôte
 * @param {String} hostPicture URL de l'image de l'hôte
 * @param {Number} grade Number note de l'hôte sur 5
 * @returns {JSX}
 */
function SlideshowCaption({ title, location, tags, host, hostPicture, grade }) {
  return (
    <section className={styles.caption}>
      {/**decription du logement */}
      <div className={styles.house}>
        {/**titre */}
        <h1 className={styles.house__title}>{title}</h1>
        {/**localisation */}
        <h2 className={styles.house__location}>{location}</h2>
        {/**mots-clez */}
        <Tags tags={tags} />
      </div>
      {/**description de l'hôte */}
      <div className={styles.host}>
        {/**nom + image de l'hôte */}
        <HostInfos hostName={host} hostPicture={hostPicture} />
        {/**notation */}
        <Rating grade={grade} />
      </div>
    </section>
  );
}
export default SlideshowCaption;
