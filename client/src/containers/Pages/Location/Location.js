// Styles
import styles from "./styles/Location.module.css";

//  Components
import Banner from "../../../components/Banner/Default/Banner";
import Aux from "../../../hoc/Aux/Aux";
import useDocumentTitle from "../TitleSwitcher/useDocumentTitle";

//  DB
import data from "../../DB/CSS";

const Location = () => {
  useDocumentTitle("Location");
  const {
    address: { location },
  } = data;
  const text = location.length > 0;
  const hOne = "Location";
  let locationDisplay = !text ? (
    <p>Locations of Chef Storm Signature is coming soon!!!</p>
  ) : (
    <Aux>
      <div className={styles.googleMaps}></div>
      <div className={styles.locationText}>
        <p>{location}</p>
      </div>
    </Aux>
  );

  return (
    <Aux>
      <Banner headingOne={hOne} />
      <main className={styles.Location}>
        <section className={styles.content}>{locationDisplay}</section>
      </main>
    </Aux>
  );
};

export default Location;
