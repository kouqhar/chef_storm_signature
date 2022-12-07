import { useState } from "react";
import { Link } from "react-router-dom";

// Images
import { images } from "../../../assets/images/Images";

// Component
import Modal from "../../../components/UI/Modal/Modal";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ItemSummary from "../../../components/ItemSummary/ItemSummary";
import HomeHeader from "../../../components/Banner/Home/HomeHeader";
import useDocumentTitle from "../TitleSwitcher/useDocumentTitle";
import Aux from "../../../hoc/Aux/Aux";
// import axios from "../../axios-orders";

//  Styles
import styles from "./styles/Home.module.css";
const {
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card21,
} = images;

const MEALS = [
  {
    heading: "Starter Pack",
    images: [
      {
        name: "Manjari Chocolate",
        price: 3245,
        image: { card2 },
      },
      {
        name: "Avocado Coconut",
        price: 3242,
        image: { card3 },
      },
      {
        name: "Macadamia Nut",
        price: 3243,
        image: { card4 },
      },
      {
        name: "Vanilla Coconut",
        price: 3248,
        image: { card5 },
      },
      {
        name: "Madaciad Nut",
        price: 3247,
        image: { card20 },
      },
      {
        name: "Strawberry Vanilla",
        price: 3246,
        image: { card21 },
      },
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum a dolores blanditiis culpa impedit sequi eaque magnam?",
  },
  {
    heading: "Ice Cream Flavours",
    images: [
      {
        name: "Manjari Chocolate",
        price: 3245,
        image: { card6 },
      },
      {
        name: "Avocado Coconut",
        price: 3242,
        image: { card7 },
      },
      {
        name: "Macadamia Nut",
        price: 3243,
        image: { card8 },
      },
      {
        name: "Vanilla Coconut",
        price: 3248,
        image: { card9 },
      },
      {
        name: "Madaciad Nut",
        price: 3247,
        image: { card18 },
      },
      {
        name: "Strawberry Vanilla",
        price: 3246,
        image: { card19 },
      },
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum a dolores blanditiis culpa impedit sequi eaque magnam?",
  },
  {
    heading: "Rice Meals",
    images: [
      {
        name: "Manjari Chocolate",
        price: 3245,
        image: { card10 },
      },
      {
        name: "Avocado Coconut",
        price: 3242,
        image: { card2 },
      },
      {
        name: "Macadamia Nut",
        price: 3243,
        image: { card12 },
      },
      {
        name: "Vanilla Coconut",
        price: 3248,
        image: { card13 },
      },
      {
        name: "Madaciad Nut",
        price: 3247,
        image: { card16 },
      },
      {
        name: "Strawberry Vanilla",
        price: 3246,
        image: { card17 },
      },
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum a dolores blanditiis culpa impedit sequi eaque magnam?",
  },
  {
    heading: "Side Dishes",
    images: [
      {
        name: "Manjari Chocolate",
        price: 3245,
        image: { card14 },
      },
      {
        name: "Avocado Coconut",
        price: 3242,
        image: { card15 },
      },
      {
        name: "Macadamia Nut",
        price: 3243,
        image: { card16 },
      },
      {
        name: "Vanilla Coconut",
        price: 3248,
        image: { card17 },
      },
      {
        name: "Madaciad Nut",
        price: 3247,
        image: { card5 },
      },
      {
        name: "Strawberry Vanilla",
        price: 3246,
        image: { card6 },
      },
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum a dolores blanditiis culpa impedit sequi eaque magnam?",
  },
  {
    heading: "Soup",
    images: [
      {
        name: "Manjari Chocolate",
        price: 3245,
        image: { card18 },
      },
      {
        name: "Avocado Coconut",
        price: 3242,
        image: { card19 },
      },
      {
        name: "Macadamia Nut",
        price: 3243,
        image: { card20 },
      },
      {
        name: "Vanilla Coconut",
        price: 3248,
        image: { card21 },
      },
      {
        name: "Madaciad Nut",
        price: 3247,
        image: { card3 },
      },
      {
        name: "Strawberry Vanilla",
        price: 3246,
        image: { card10 },
      },
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum a dolores blanditiis culpa impedit sequi eaque magnam?",
  },
  {
    heading: "Small Chops",
    images: [
      {
        name: "Avocado Coconut",
        price: 3242,
        image: { card8 },
      },
      {
        name: "Manjari Chocolate",
        price: 3245,
        image: { card10 },
      },
      {
        name: "Macadamia Nut",
        price: 3243,
        image: { card3 },
      },
      {
        name: "Madaciad Nut",
        price: 3247,
        image: { card15 },
      },
      {
        name: "Strawberry Vanilla",
        price: 3246,
        image: { card6 },
      },
      {
        name: "Vanilla Coconut",
        price: 3248,
        image: { card4 },
      },
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum a dolores blanditiis culpa impedit sequi eaque magnam?",
  },
];

const Home = () => {
  useDocumentTitle("Home");
  const [meals] = useState([...MEALS]);
  const [mealPreview, setMealPreview] = useState([]);
  const [purchasing, setPurchasing] = useState(false);
  const [loading] = useState(false);
  // const [error, setError] = useState(false);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         "url"
  //       )
  //       .then((response) => {
  // setMeals(response.data)
  //       })
  //       .catch((error) => {
  // setError(true)
  //       });
  //   })

  const purchaseHandler = (preview) => {
    setMealPreview([{ ...preview }]);
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  let lText = ">>>";
  let hOne = "Chef Storm Signature";
  let pText =
    "ALL OF THE INDULGENCE, NONE OF THE CARBS.\nOUR KETO DESERTS ARE HERE TO SAVE THE DAY.";

  const inlineStyle = {
    display: "grid",
    placeItems: "center",
    height: "100%",
    width: "100%",
  };
  let orderSummary = null;
  let mainContent = (
    <p style={inlineStyle}>Section Cant be displayed, please refresh!!!</p>
  );

  if (meals.length > 0) {
    mainContent = meals.map(({ info, heading, images }, index) => {
      return (
        <section className={styles.menu_card} key={index}>
          <div
            className={styles.menu_detail}
            key={heading.replace(/\s+/g, "_") + index}
          >
            <h2 className={styles.menu_detail__heading}>{heading}</h2>
            <p className={styles.menu_detail__info}>{info}</p>
            <Link
              to="gallery"
              className={styles.menu_detail__button}
              key={index}
            >
              VIEW ALL
            </Link>
          </div>

          <div className={styles.menu_cards} key={index + 1}>
            {images.map(({ image, name, price }, imageIndex, preview) => {
              let imageElem = Object.values(image)[0];
              return (
                <div
                  className={styles.menu_cards__card}
                  key={name.replace(/\s+/g, "_") + imageIndex}
                  onClick={() => purchaseHandler(preview[imageIndex])}
                >
                  <img
                    src={imageElem}
                    alt={`A show of ${name} and it cost $${price}`}
                  />
                  <p className={styles.menu_cards__card___name}>{name}</p>
                  <p className={styles.menu_cards__card___price}>
                    <button href="/" className={styles.order_button}>
                      <span className={styles.currency_symbol}>NGN </span>
                      {price} view
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      );
    });

    orderSummary = (
      <ItemSummary
        purchaseCancelled={purchaseCancelHandler}
        mealInfo={mealPreview}
      />
    );
  }
  if (loading) orderSummary = <Spinner />;

  return (
    <Aux>
      <HomeHeader
        headingOne={hOne}
        paragraph={pText}
        linkText={lText}
        linkPath="#ChefStormSignature-menu"
      />

      <main className={styles.Main_Container} id="ChefStormSignature-menu">
        <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {mainContent}
      </main>
    </Aux>
  );
};

export default Home;
