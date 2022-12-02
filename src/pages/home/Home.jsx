import styles from "./home.module.scss";
import seaLandscape from "../../assets/sea-large.jpg";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";

function Home() {
  const [isDataLoading, setDataLoading] = useState(false);
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
                <li key={accomodation.id}>
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
