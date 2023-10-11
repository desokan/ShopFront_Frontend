import classes from "./NavBarBottom.module.css";
import DropDownHover from "../dropDowns/DropDownHover";

const productMenus = [
  {
    category: "WOMEN",
    subCategory: [
      {
        name: "Trousers",
        link: "https://www.google.co.uk/",
      },
      {
        name: "Blouses",
        link: "/blouses",
      },
      {
        name: "Skirts",
        link: "/skirts",
      },
    ],
  },
  {
    category: "MEN",
    subCategory: [
      {
        name: "Trousers",
        link: "/trousers",
      },
      {
        name: "Shirts",
        link: "/shirts",
      },
      {
        name: "Blazers",
        link: "/blazers",
      },
    ],
  },
  {
    category: "GIRLS",
    subCategory: [
      {
        name: "Trousers",
        link: "/trousers",
      },
      {
        name: "Tops",
        link: "/girls-tops",
      },
      {
        name: "Bottoms",
        link: "/girls-bottoms",
      },
    ],
  },
  {
    category: "BOYS",
    subCategory: [
      {
        name: "Trousers",
        link: "/boys-trousers",
      },
      {
        name: "Shirts",
        link: "/boys-shirts",
      },
      {
        name: "Suits",
        link: "/boys-suits",
      },
    ],
  },
  {
    category: "SALE",
    subCategory: [
      {
        name: "Trousers",
        link: "/sale-trousers",
      },
      {
        name: "Shirts",
        link: "/sale-shirts",
      },
      {
        name: "Suits",
        link: "/sale-suits",
      },
    ],
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
