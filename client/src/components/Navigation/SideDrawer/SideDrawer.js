// Styles
import styles from "./styles/SideDrawer.module.css";

// Component
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import DrawerToggle from "./DrawerToggle/DrawerToggle";

const sideDrawer = ({
  closed,
  sideDrawerShow,
  toggle,
  hideSideBarHandler,
  sideDrawerHide,
}) => {
  let attachedStyles = [styles.SideDrawer, styles.Close];
  if (sideDrawerShow) attachedStyles = [styles.SideDrawer, styles.Open];
  if (sideDrawerHide) attachedStyles = [styles.SideDrawer, styles.Close];

  return (
    <Aux>
      <Backdrop
        show={sideDrawerShow}
        liClick={sideDrawerHide}
        clicked={closed}
      />
      <div className={attachedStyles.join(" ")}>
        <div className={styles.Logo}>
          <Logo hideSideBar={hideSideBarHandler} />
        </div>
        <DrawerToggle
          clicked={toggle}
          liClick={sideDrawerHide}
          toggleState={sideDrawerShow}
        />
        <nav className={styles.navigation}>
          <div className={styles.navLinks}>
            <NavigationItems hideSideBar={hideSideBarHandler} />
          </div>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
