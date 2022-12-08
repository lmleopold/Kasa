import Star from "../../assets/stars/Star";
import styles from "./rating.module.scss";

function Rating({ grade }) {
  const rating = [];
  for (let i = 0; i < grade; i++) {
    rating.push(<Star color="--shinyStar" />);
  }
  for (let i = 0; i < 5 - grade; i++) {
    rating.push(<Star color="--darkStar" />);
  }
  return (
    <ul className={styles.rating}>
      {rating.map((star, index) => (
        <li className={styles.rating__star} key={`${star + index}`}>
          {star}
        </li>
      ))}
    </ul>
  );
}
export default Rating;
