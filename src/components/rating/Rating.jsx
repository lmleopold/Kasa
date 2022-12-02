import GreyStar from "../../assets/stars/star_rate-grey-24px 2";
import OrangeStar from "../../assets/stars/star_rate-orange-24px 5";
import styles from "./rating.module.scss";

function Rating({ grade }) {
  const rating = [];
  for (let i = 0; i < grade; i++) {
    rating.push(<OrangeStar />);
  }
  for (let i = 0; i < 5 - grade; i++) {
    rating.push(<GreyStar />);
  }
  return (
    <ul className={styles.host__rating}>
      {rating.map((star, index) => (
        <li className={styles.host__rating__star} key={`${star + index}`}>
          {star}
        </li>
      ))}
    </ul>
  );
}
export default Rating;
