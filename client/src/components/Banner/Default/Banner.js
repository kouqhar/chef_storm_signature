//  Styles
import styles from "./styles/Banner.module.css";

const banner = ({ headingOne }) => (
  <div className={styles.banner}>
    <section className={styles.banner_text}>
      <h1>{headingOne}</h1>
    </section>
  </div>
);

export default banner;
