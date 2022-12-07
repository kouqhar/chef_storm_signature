// Styles
import styles from "./styles/NavigationItems.module.css";

// Images
import { socialPack } from "../../../assets/images/Images";

// Component
import NavigationItem from "./NavigationItem/NavigationItem";
import NavItem from "./NavigationItem/NavItem";
import Aux from "../../../hoc/Aux/Aux";

const navigationItems = ({ hideSideBar }) => {
  const { shoppingCart, userProfile } = socialPack;

  return (
    <Aux>
      <ul className={styles.links}>
        <NavigationItem clicked={hideSideBar} linkTo="/">
          HOME
        </NavigationItem>
        <NavigationItem clicked={hideSideBar} linkTo="/about">
          ABOUT
        </NavigationItem>
        <NavigationItem clicked={hideSideBar} linkTo="/menu">
          MENU
        </NavigationItem>
        <NavigationItem clicked={hideSideBar} linkTo="/contact">
          CONTACT
        </NavigationItem>
        <NavigationItem clicked={hideSideBar} linkTo="/location">
          LOCATIONS
        </NavigationItem>
      </ul>

      <ul className={styles.chart_profile}>
        <NavItem>
          <span className={styles.awesome}>
            <img src={shoppingCart} alt="our shopping cart" />
          </span>
        </NavItem>
        <NavItem>
          <span className={styles.awesome}>
            <img src={userProfile} alt="Profile" />
          </span>
        </NavItem>
      </ul>
    </Aux>
  );
};

export default navigationItems;
