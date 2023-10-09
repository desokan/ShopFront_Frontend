import classes from "./NavBarBottom.module.css";
import DropDownHover from "../dropDowns/DropDownHover";

const productMenus = [
  {
    category: "WOMEN",
    subCategory: ["Trousers", "Blouses", "Skirts"],
  },
  {
    category: "MEN",
    subCategory: ["Trousers", "Shirts", "Tops"],
  },
  {
    category: "GIRLS",
    subCategory: ["Trousers", "Blouses", "Skirts"],
  },
  {
    category: "BOYS",
    subCategory: ["Trousers", "Shirts", "Tops"],
  },
  {
    category: "SALE",
    subCategory: ["Trousers", "Blouses", "Skirts", "Shirts", "Tops"],
  },
];

const NavBarBottom = () => {
  return (
    <div className={classes.wrapper}>
      {productMenus.map((productMenu) => (
        <DropDownHover
          to="/"
          key={productMenu.category}
          category={productMenu.category}
          subCategories={productMenu.subCategory}
        />
      ))}
    </div>
  );
};

export default NavBarBottom;
