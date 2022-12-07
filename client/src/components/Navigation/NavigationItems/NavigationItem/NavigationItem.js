import { Link } from "react-router-dom";

// Styles
import styles from "./styles/Navigation.module.css";

const navigationItem = ({ children, linkTo, active, clicked }) => (
  <li onClick={clicked}>
    <Link to={linkTo} className={active ? styles.active : null}>
      {children}
    </Link>
  </li>
);

export default navigationItem;
