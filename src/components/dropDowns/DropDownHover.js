import classes from "./DropDownHover.module.css";
import { Link } from "react-router-dom";

const DropDownHover = ({ category, subCategories }) => {
    console.log(category, subCategories)
  return (
    <div className={classes.dropDownHover}>
      <Link className={classes.dropbtn} to="/">
        {category}
      </Link>
      <div className={classes.dropDownContent}>
        {subCategories.map((subCategory) => 
          <Link to="/" key={subCategory}>
            {subCategory}
          </Link>
        )}
      </div>
    </div>
  );
};

export default DropDownHover;
