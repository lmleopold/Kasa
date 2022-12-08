import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
import styles from "./singleProduct.module.scss";
import { useEffect, useState } from "react";
import SlideshowCaption from "../../components/slideShowCaption/SlideShowCaption";
import SlideShow from "../../components/slideShow/SlideShow";
/**
 * Contient le contenu du corps de la page de description d'un logement
 */
function SingleProduct() {
  //Récupération des paramètres entrés en URL
  const params = useParams();

  const navigate = useNavigate();

  //Tant que les données ne sont pas chargées on bloque le rendu à l'intérieur du <main></main>
  const [isDataLoading, setDataLoading] = useState(true);

  //Création d'une varaible d'état qui stockera la description du logement ciblé en URL
  const [accomodation, setAccomodation] = useState({});

  //On charge les données une seule fois après le premier rendu du composant <SingleProduct />
  useEffect(() => {
    /**
     * Se connecte à l'API et renvoit le détail du logement ciblé en URL
     */
    async function fetchData() {
      try {
        const res = await fetch(
          `http://localhost:3000/accomodations/${params.id}`
        );
        if (!res.ok) {
          navigate("/NotFound");
        } else {
          const logement = await res.json();
          setAccomodation(logement);
        }
      } catch (error) {
        console.info({ error });
      } finally {
        /* les données sont bien chargées et isDataLoading change d'état: le composant <SingleProduct />
        est re-render avec pour isDataLoading et accomodation leurs nouvelles valeurs détat*/
        setDataLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      {!isDataLoading && (
        <>
          <SlideShow
            cover={accomodation.cover}
            pictures={accomodation.pictures}
          />
          <SlideshowCaption
            title={accomodation.title}
            location={accomodation.location}
            tags={accomodation.tags}
            host={accomodation.host.name}
            hostPicture={accomodation.host.picture}
            grade={accomodation.rating}
          />
          <div className={styles.collapseContainer}>
            <Collapse title="Description" content={accomodation.description} />
            <Collapse
              title="Equipements"
              content={accomodation.equipments.map((equipment, index) => (
                <li
                  className={styles.collapseTxt}
                  key={`${equipment} + ${index}`}
                >
                  {equipment}
                </li>
              ))}
              isList="true"
            />
          </div>
        </>
      )}
    </main>
  );
}

export default SingleProduct;
