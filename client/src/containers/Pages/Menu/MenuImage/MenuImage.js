//  Styles
import styles from "./styles/GalleryImage.module.css";

const GalleryImage = ({ name, category, image }) => (
  <div className={styles.Card}>
    <img src={image} alt={name} className={styles.Card_image} />
    <div className={styles.Card__details}>
      <p className={styles.Card__details___name}>
        <span> Name : </span>
        {name}
      </p>
      <p className={styles.Card__details___category}>
        <span> Category : </span>
        {category}
      </p>
    </div>
  </div>
);

export default GalleryImage;
