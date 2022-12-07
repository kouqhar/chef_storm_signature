// Style
import styles from "./styles/Button.module.css";

const button = ({ children, clicked, btnType, extraStyle }) => (
  <button
    className={[styles.Button, styles[btnType], extraStyle].join(" ")}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
