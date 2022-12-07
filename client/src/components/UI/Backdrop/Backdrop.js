// Styles
import styles from "./styles/Backdrop.module.css";

const backdrop = ({ show, liClick, clicked }) =>
  show && !liClick ? (
    <div className={styles.Backdrop} onClick={clicked}></div>
  ) : null;

export default backdrop;
