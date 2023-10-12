import classes from "./NavBarBottom.module.css";
import DropDownHover from "../dropDowns/DropDownHover";


const NavBarBottom = ({t}) => {
  const productMenus = t('navbar.bottom.productMenus', { returnObjects: true })
  
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
