// Styles
import styles from "./styles/DrawerToggle.module.css";

const drawerToggle = ({ clicked, liClick, toggleState }) => {
  let attachedStyles = [styles.DrawerToggle];
  if (toggleState) attachedStyles = [styles.DrawerToggle, styles.divClicked];
  if (liClick) attachedStyles = [styles.DrawerToggle];

  return (
    <div className={styles.DrawerContainer}>
      <div onClick={clicked} className={attachedStyles.join(" ")}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default drawerToggle;
