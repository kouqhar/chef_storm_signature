// Styles
import styles from "./styles/Toolbar.module.css";

// Component
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux/Aux";

const toolbar = ({ liClick }) => {
  return (
    <Aux>
      <header className={styles.Header}>
        <nav className={[styles.navigation, styles.DesktopOnly].join(" ")}>
          <Logo />

          <div className={styles.navLinks}>
            <NavigationItems hideSideBar={liClick} />
          </div>
        </nav>
      </header>
    </Aux>
  );
};

export default toolbar;
