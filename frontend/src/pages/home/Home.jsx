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
        //Si l'adresse IP du serveur distant est disponible alors connexion au serveur
        if (process.env.REACT_APP_AWS_IP !== undefined) {
          console.log("backend sur serveur distant");
          res = await fetch(
            `http://${process.env.REACT_APP_AWS_IP}:2000/accomodations`
          );
          //Sinon utilisation du backend à faire tourner en local
        } else {
          console.log("backend en local");
          res = await fetch(`http://localhost:2000/accomodations`);
        }
        const data = await res.json();
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
