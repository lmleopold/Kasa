import { useParams } from "react-router-dom";
import Carroussel from "../../components/carroussel/Carroussel";
import BannerCaption from "../../components/bannerCaption/BannerCaption";
import Collapse from "../../components/collapse/Collapse";
import data from "../../data/logements.json";
import styles from "./singleProduct.module.scss";

function SingleProduct() {
  const params = useParams();
  const logement = data.find((e) => e.id === params.id);
  const equipements = logement.equipments.map((equipment, index) => (
    <li className={styles.collapseTxt} key={`${equipment} + ${index}`}>
      {equipment}
    </li>
  ));

  return (
    <main>
      <Carroussel cover={logement.cover} pictures={logement.pictures} />
      <BannerCaption
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host.name}
        hostPicture={logement.host.picture}
        grade={logement.rating}
      />
      <div className={styles.container}>
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Equipements" content={equipements} isList="true" />
      </div>
    </main>
  );
}
export default SingleProduct;
