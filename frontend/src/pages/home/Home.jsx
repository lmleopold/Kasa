import styles from "./home.module.scss";
import seaLandscape from "../../assets/sea-large.jpg";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";

/**
 * Retourne le main de la page d'acceuil
 * @returns {JSX}
 */
function Home() {
  //variable isDataLoading permet de suivre si les données de l'API sont cnargées ou non
  const [isDataLoading, setDataLoading] = useState(false);

  //variable accomodations permet de stockées les données reçues de l'API
  const [accomodations, setAccomodations] = useState([]);

  // useEffect(() => {
  //   setDataLoading(true);
  //   fetch("http://localhost:3000/accomodations")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAccomodations(data);
  //       setDataLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    setDataLoading(true);
    async function fetchData() {
      try {
        let res;
        // Définition de l'URL du backend
        // Si l'adresse IP du serveur distant est disponible dans les variables d'environnement, on utilise cette adresse
        // Sinon, on utilise le backend en local
        const backendUrl = process.env.REACT_APP_AWS_IP
          ? `http://${process.env.REACT_APP_AWS_IP}:2000/accomodations`
          : `http://localhost:3000/accomodations`;
        console.log(`URL du backend : ${backendUrl}`);
        // Connexion au backend
        res = await fetch(backendUrl);
        // Récupération des données du backend
        const data = await res.json();
        // Mise à jour de l'état de l'application avec les données du backend
        setAccomodations(data);
      } catch (error) {
        console.log({ error });
      } finally {
        setDataLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      {/**Bannière */}
      <Banner
        picture={seaLandscape}
        altText="Sea landscape"
        bannerTitle="Chez vous, partout et ailleurs"
      />
      {
        //Liste des logments
        <ul className={styles.cardList}>
          {!isDataLoading &&
            accomodations.map((accomodation) => {
              return (
                <li key={accomodation.id} className={styles.cardItem}>
                  <Card
                    title={accomodation.title}
                    id={accomodation.id}
                    cover={accomodation.cover}
                  />
                </li>
              );
            })}
        </ul>
      }
    </main>
  );
}

export default Home;
