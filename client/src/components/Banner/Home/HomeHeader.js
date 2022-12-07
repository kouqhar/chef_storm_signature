//  Styles
import styles from "./styles/HomeHeader.module.css";

const homeHeader = ({ headingOne, paragraph, linkText, linkPath }) => (
  <div className={styles.header}>
    <section className={styles.header_text}>
      <h1>{headingOne}</h1>
      <p>{paragraph}</p>
      <a href={linkPath} className={styles.move_down}>
        {linkText}
      </a>
    </section>
  </div>
);

export default homeHeader;
