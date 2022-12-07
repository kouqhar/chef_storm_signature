import styles from "./styles/ItemSummary.module.css";

// Component
import Button from "../UI/Button/Button";
import Aux from "../../hoc/Aux/Aux";

const ItemSummary = ({ mealInfo, purchaseCancelled }) => {
  let mealSummary =
    mealInfo !== null ? (
      mealInfo
        .map((meal) => meal)
        .map(({ name, price, image }, index) => {
          image = Object.values(image)[0];
          return (
            <div className={styles.MealPopUp} key={index + 1}>
              <div className={styles.popUpImage}>
                <img
                  src={image}
                  alt={`A show of ${name} and it cost $${price}`}
                />
              </div>

              <div className={styles.mealInformation}>
                <div className={styles.mealDetails}>
                  <h3>{name}</h3>
                  <p>
                    <strong>NGN {price.toFixed(2)}</strong>
                  </p>
                </div>

                <Button
                  clicked={purchaseCancelled}
                  key={index}
                  extraStyle={styles.btn}
                >
                  CLOSE
                </Button>
              </div>
            </div>
          );
        })
    ) : (
      <p>Cannot display any selected information!!!</p>
    );

  return <Aux>{mealSummary}</Aux>;
};

export default ItemSummary;
