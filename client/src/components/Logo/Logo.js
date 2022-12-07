import { Link } from "react-router-dom";

import styles from "./styles/Logo.module.css";

const Logo = ({ hideSideBar }) => (
  <Link to="/" className={styles.officialLogo} onClick={hideSideBar}>
    <p>CSS</p>
  </Link>
);

export default Logo;
