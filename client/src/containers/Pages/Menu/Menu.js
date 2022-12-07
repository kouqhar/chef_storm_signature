import { useState } from "react";

// Components
import Banner from "../../../components/Banner/Default/Banner";
import InputGroup from "../../../components/Common/InputGroup";
import useDocumentTitle from "../TitleSwitcher/useDocumentTitle";
import MenuImage from "./MenuImage/MenuImage";
import Aux from "../../../hoc/Aux/Aux";
import MenuDB from "./MenuDB";

// Styles
import styles from "./styles/Gallery.module.css";

const Gallery = () => {
  useDocumentTitle("Menu");
  const [filterCategory, setFilterCategory] = useState("all");

  const onChange = (e) => {
    setFilterCategory(e.target.value);
  };

  let hOne = "Menu";
  let menuContent = <p>Loading...</p>;

  if (filterCategory === "all") {
    menuContent = MenuDB.map(({ category, name, image }, index) => {
      return (
        <MenuImage
          name={name}
          category={category}
          image={image}
          key={`${name}_${category}_${index}`}
        />
      );
    });
  } else {
    menuContent = MenuDB.filter(
      (elem) => elem.category.toLowerCase() === filterCategory.toLowerCase()
    ).map(({ category, name, image }, index) => {
      return (
        <MenuImage
          name={name}
          category={category}
          image={image}
          key={`${name}_${category}_${index}`}
        />
      );
    });
  }

  return (
    <Aux>
      <Banner headingOne={hOne} />
      <section className={styles.filter_buttons}>
        <div className={styles.content}>
          <h3>Filter: </h3>

          <div className={styles.options}>
            <label htmlFor="all">
              <InputGroup
                type="radio"
                name="filter-gallery"
                value="all"
                id="all"
                onChange={onChange}
              />
              <span className={styles.filter_text}> All </span>
            </label>

            <label htmlFor="chops">
              <InputGroup
                type="radio"
                name="filter-gallery"
                value="chops"
                id="chops"
                onChange={onChange}
              />
              <span className={styles.filter_text}> Chops </span>
            </label>

            <label htmlFor="soup">
              <InputGroup
                type="radio"
                name="filter-gallery"
                value="soup"
                id="soup"
                onChange={onChange}
              />
              <span className={styles.filter_text}> Soup </span>
            </label>

            <label htmlFor="dishes">
              <InputGroup
                type="radio"
                name="filter-gallery"
                value="dishes"
                id="dishes"
                onChange={onChange}
              />
              <span className={styles.filter_text}> Dishes </span>
            </label>

            <label htmlFor="icecream">
              <InputGroup
                type="radio"
                name="filter-gallery"
                value="icecream"
                id="icecream"
                onChange={onChange}
              />
              <span className={styles.filter_text}> Icecream </span>
            </label>
          </div>
        </div>
      </section>

      <main className={styles.Gallery}>
        <div className={styles.Container}>
          <section className={styles.images}>{menuContent}</section>
        </div>
      </main>
    </Aux>
  );
};

export default Gallery;
