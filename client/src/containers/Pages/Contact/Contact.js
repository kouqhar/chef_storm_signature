import { useState } from "react";

// Styles
import styles from "./styles/Contact.module.css";

//  Components
import Banner from "../../../components/Banner/Default/Banner";
import ContactList from "./ContactList/ContactList";
import InputGroup from "../../../components/Common/InputGroup";
import useDocumentTitle from "../TitleSwitcher/useDocumentTitle";
import TextArea from "../../../components/Common/TextArea";
import Aux from "../../../hoc/Aux/Aux";

// Images
import { socialPack, images } from "../../../assets/images/Images";

//  DB
import data from "../../DB/CSS";

const Contact = () => {
  useDocumentTitle("Contact");
  const { card7: contactImg } = images

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [showForm, setShowForm] = useState(true);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  const showContactForm = () => {
    setShowForm(true);
  };

  const hOne = "Contact";
  const {
    smileyFace,
    whatsApp,
    youTube,
    twitch,
    twitter,
    instagram,
    facebook,
    phone,
    emailSvg,
    sendEmail,
    paperPlane,
  } = socialPack;
  const {
    contact: { basic, social },
  } = data;

  let socialKeys = Object.keys(social);
  let basicKeys = Object.keys(basic);

  let truthyValue = [
    socialKeys.some((elem) => social[elem].length > 0),
    basicKeys.some((elem) => basic[elem].length > 0),
  ];
  let displayBool = truthyValue.some((elem) => elem);
  let socialLinks = "Social";
  let basicContact = "Basic";
  let filledBasic = [];
  let filledSocial = [];

  basicKeys.forEach((elem) => {
    if (basic[elem].length > 0) filledBasic.push({ [elem]: basic[elem] });
    else return null;
  });
  socialKeys.forEach((elem) => {
    if (social[elem].length > 0) filledSocial.push({ [elem]: social[elem] });
    else return null;
  });

  if (displayBool) {
    basicContact = filledBasic
      .map((_, index) => filledBasic[index])
      .map((elem, index) => {
        const keys = Object.keys(elem);
        const values = Object.values(elem);
        let link = `${values}`;
        let fontIcon;
        let alternative = "";

        if (keys.toString() === "email") {
          link = `mailto:${values}`;
          fontIcon = emailSvg;
          alternative += "Email";
        } else if (keys.toString() === "phone") {
          link = `tel:${values}`;
          fontIcon = phone;
          alternative += "Phone";
        }

        return (
          <ContactList
            iconStyle={styles.fontIcon}
            icon={fontIcon}
            iconAlt={alternative}
            listName={keys}
            contactLink={link}
            key={`${keys}_${index}`}
          />
        );
      });

    socialLinks = filledSocial
      .map((_, index) => filledSocial[index])
      .map((elem, index) => {
        const keys = Object.keys(elem);
        const values = Object.values(elem);
        let link = `${values}`;
        let alternative = "";
        let fontIcon;

        if (keys.toString() === "whatsApp") {
          link = `wa:${values}`;
          fontIcon = whatsApp;
          alternative += "WhatsApp";
        } else if (keys.toString() === "facebook") {
          fontIcon = facebook;
          alternative += "Facebook";
        } else if (keys.toString() === "twitter") {
          fontIcon = twitter;
          alternative += "twitter";
        } else if (keys.toString() === "instagram") {
          fontIcon = instagram;
          alternative += "Instagram";
        } else if (keys.toString() === "twitch") {
          fontIcon = twitch;
          alternative += "Twitch";
        } else if (keys.toString() === "youTube") {
          fontIcon = youTube;
          alternative += "YouTube";
        }

        return (
          <ContactList
            iconStyle={styles.fontIcon}
            icon={fontIcon}
            iconAlt={alternative}
            listName={keys}
            contactLink={link}
            key={`${keys}_${index}`}
          />
        );
      });
  }

  let contactText = !displayBool ? (
    <p className={styles.loadingText}>
      Contacting Chef Storm Signature is coming soon!!!
    </p>
  ) : (
    <Aux>
      <ul>{basicContact}</ul>
      <ul>{socialLinks}</ul>
    </Aux>
  );

  let { firstName, lastName, email, message } = values;
  let fullName = `${lastName} ${firstName}`;
  let feedBackName = fullName.trim().length < 1 ? "Anonymous" : fullName.trim();
  let feedBackMessage =
    message.length < 1
      ? `Hey! ${feedBackName}, I just realized you sent an empty message!!!`
      : message;

  let contactForm = (
    <Aux>
      <header className={styles.contact_heading}>
        <h2>
          Chef Storm Signature, Say Hi !
          <span className={styles.awesome}>
            <img src={smileyFace} alt="smiley face" />
          </span>
        </h2>
      </header>
      <form onSubmit={onSubmit} className={styles.contactForm__form}>
        <div className={styles.contactForm__form___names}>
          <label htmlFor="lastName">
            <InputGroup
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Enter your last name"
            />
          </label>
          <label htmlFor="firstName">
            <InputGroup
              name="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="Enter your firstName"
            />
          </label>
        </div>
        <label htmlFor="email">
          <InputGroup
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email ***"
            required
          />
        </label>
        <label htmlFor="message">
          <TextArea
            name="message"
            value={message}
            onChange={onChange}
            placeholder="Enter your message...***"
            required
          />
        </label>
        <button type="submit" name="submit" value="Submit Message">
          Send Message
          <span className={styles.awesome}>
            <img src={sendEmail} alt="Send message" />
          </span>
        </button>
      </form>
    </Aux>
  );

  let successForm = (
    <Aux>
      <h1 className={styles.successForm__heading}>
        <span className={styles.awesome}>
          <img src={paperPlane} alt="Message Sent" />
        </span>
        Feedback Sent !
      </h1>{" "}
      <div className={styles.successForm__content}>
        <h2 className={styles.successForm__content___heading}>
          Hello,
          <span
            className={styles.successForm__content___heading____exclamation}
          >
            {" "}
            {feedBackName} !
          </span>
        </h2>
        <h4 className={styles.successForm__content___info}>
          The content of your message is displayed below :{" "}
        </h4>
        <p className={styles.successForm__content___message}>
          {feedBackMessage}
        </p>
      </div>
      <button
        className={styles.successForm__button}
        type="submit"
        name="goToForm"
        value="Go to form"
        onClick={showContactForm}
      >
        Go Back To Form
      </button>
    </Aux>
  );

  let switchForms = showForm
    ? [styles.contactForm, styles.showContactForm].join(" ")
    : [styles.contactForm, styles.hideContactForm].join(" ");

  let switchSuccess = !showForm
    ? [styles.successForm, styles.showSuccessForm].join(" ")
    : [styles.successForm, styles.hideSuccessForm].join(" ");

  return (
    <Aux>
      <Banner headingOne={hOne} />
      <main className={styles.Contact}>
        <section className={styles.content}>
          <div className={styles.currentFormState} style={{ padding: 0, }}>
          	<img src={contactImg} alt="Dish by chef storm" height="80%" width="100%" style={{ marginTop: "10%", }}/>
          </div>
          {/* <div className={styles.currentFormState}>
            <div className={switchForms}>{contactForm}</div>
            <div className={switchSuccess}>{successForm}</div>
          </div> */}

          <div className={styles.contactLinks}>{contactText}</div>
        </section>
      </main>
    </Aux>
  );
};

export default Contact;
