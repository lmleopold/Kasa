import styles from "./bannerCaption.module.scss";
import OrangeStar from "../../assets/stars/star_rate-orange-24px 5";
import GreyStar from "../../assets/stars/star_rate-grey-24px 2";

function BannerCaption({ title, location, tags, host, hostPicture, grade }) {
  const rating = [];
  for (let i = 0; i < grade; i++) {
    rating.push(<OrangeStar />);
  }
  for (let i = 0; i < 5 - grade; i++) {
    rating.push(<GreyStar />);
  }
  console.log(rating[0]);

  const hostName = host.split(" ");

  return (
    <section className={styles.abstract}>
      <div className={styles.house}>
        <h1 className={styles.house__title}>{title}</h1>
        <h2 className={styles.house__location}>{location}</h2>
        <ul className={styles.house__tagTab}>
          {tags.map((tag, index) => (
            <li className={styles.house__tagTab__tag} key={`${tag + index}`}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.host}>
        <div className={styles.host__infos}>
          <h2 className={styles.host__name}>
            {hostName[0]} <br /> {hostName[1]} {/**A AMELIORER */}
          </h2>
          <div className={styles.host__portrait}>
            <img
              className={styles.host__portrait__img}
              src={hostPicture}
              alt={host}
            ></img>
          </div>
        </div>
        <ul className={styles.host__rating}>
          {rating.map((star, index) => (
            <li className={styles.host__rating__star} key={`${star + index}`}>
              {star}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default BannerCaption;
