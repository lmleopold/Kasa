import styles from "./hostInfos.module.scss";

/**
 * Retourne le nom et l'image de l'Hôte
 * @param {String} hostName Prénom et Nom de l'hôte
 * @param {String} hostPicture URL de l'image de l'Hôte
 * @returns {JSX} le nom et l'image de l'Hôte
 */
function HostInfos({ hostName, hostPicture }) {
  const name = hostName.split(" ");

  //On extrait le prénom
  const firstName = name[0];
  name.shift();

  //On regroupe les éventuels noms composés ou à particules dans le nom de famille
  const lastName = name.join(" ");

  return (
    <div className={styles.infos}>
      <h2 className={styles.name}>
        {firstName} <br /> {lastName}
      </h2>
      <div className={styles.portrait}>
        <img
          className={styles.portrait__img}
          src={hostPicture}
          alt={hostName}
        ></img>
      </div>
    </div>
  );
}
export default HostInfos;
