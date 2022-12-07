// Styles
import styles from "./styles/Footer.module.css";

// Components
import FooterItems from "./FooterItems/FooterItems";

const Footer = (props) => {
  let currentDate = new Date().getFullYear();

 const url = {href:"https://naphtaliduniya.netlify.app/"}
  return (
    <footer className={styles.Footer_Container}>
      <div className={styles.content}>
        <FooterItems
          text={`Copyright @ ${currentDate}. All rights reserved`}
          abbrTitle="Chef Storm Signature"
          abbr="CSS"
        />

        <FooterItems
          abbrTitle="Duniya Naphtali"
          abbr="Kouqhar"
          text="Designed and Developed by"
        />
      </div>
    </footer>
  );
};

export default Footer;
