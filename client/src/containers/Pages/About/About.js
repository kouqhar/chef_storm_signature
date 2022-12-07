// Styles
import styles from "./styles/About.module.css";

//  Components
import Banner from "../../../components/Banner/Default/Banner";
import useDocumentTitle from "../TitleSwitcher/useDocumentTitle";
import Aux from "../../../hoc/Aux/Aux";

//  DB
import data from "../../DB/CSS";

const About = () => {
  useDocumentTitle("About");
  const { about } = data;
  const text = true;
  const hOne = "About";
  let aboutText = !text ? (
    <p>About Chef Storm Signature is coming soon!!!</p>
  ) : (
    <p>{about}</p>
  );

  return (
    <Aux>
      <Banner headingOne={hOne} />
      <main className={styles.About}>
        <section className={styles.content}>{aboutText}</section>
      </main>
    </Aux>
  );
};

export default About;
