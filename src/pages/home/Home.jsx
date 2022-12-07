import styles from "./home.module.scss";
import seaLandscape from "../../assets/sea-large.jpg";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";

// Affiche la page d'acceuil
function Home() {
  //
  const [isDataLoading, setDataLoading] = useState(false);
  const [accomodations, setAccomodations] = useState([]);
  // const [matches, setMatches] = useState(
  //   window.matchMedia(`(min-width: 375px)`).matches
  // );

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
        const res = await fetch("http://localhost:3000/accomodations");
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

  // useEffect(() => {
  //   window
  //     .matchMedia("(min-width: 768px)")
  //     .addEventListener("change", (e) => setMatches(e.matches));
  // }, []);
  return (
    <main>
      <Banner
        picture={seaLandscape}
        altText="Sea landscape"
        bannerTitle="Chez vous, partout et ailleurs"
      />
      {
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
