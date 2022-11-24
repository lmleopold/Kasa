import styles from "./home.module.scss";
import seaLandscape from "../../assets/sea-large.jpg";
import Banner from "../../components/banner/Banner";
import data from "../../data/logements.json";
import Card from "../../components/card/Card";

function Home() {
  return (
    <main>
      <Banner
        picture={seaLandscape}
        altText="Sea landscape"
        bannerTitle="Chez vous, partout et ailleurs"
      />
      <ul className={styles.cardList}>
        {data.map((logmt) => {
          return (
            <li key={logmt.id}>
              <Card title={logmt.title} id={logmt.id} cover={logmt.cover} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Home;
