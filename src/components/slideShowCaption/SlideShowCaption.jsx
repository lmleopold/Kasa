import styles from "./slideShowCaption.module.scss";
import Rating from "../rating/Rating";
import HostInfos from "../hostInfos/HostInfos";
import Tags from "../tags/Tags";

function SlideshowCaption({ title, location, tags, host, hostPicture, grade }) {
  return (
    <section className={styles.caption}>
      <div className={styles.house}>
        <h1 className={styles.house__title}>{title}</h1>
        <h2 className={styles.house__location}>{location}</h2>
        <Tags tags={tags} />
      </div>
      <div className={styles.host}>
        <HostInfos hostName={host} hostPicture={hostPicture} />
        <Rating grade={grade} />
      </div>
    </section>
  );
}
export default SlideshowCaption;
