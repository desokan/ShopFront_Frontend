import classes from "./NavBarBottom.module.css";
import { Link } from "react-router-dom";
import DropDownHover from "../dropDowns/DropDownHover";

const NavBarBottom = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.dropDownHover}>
          <Link className={classes.dropbtn} to="/">
            WOMEN
          </Link>
          <div className={classes.dropDownContent}>
            <Link to="/">Sara</Link>
            <Link to="/">Rasheed</Link>
            <Link to="/">Norik</Link>
          </div>
        </div>
        <div className={classes.dropDownHover}>
          <Link className={classes.dropbtn} to="/">
            MEN
          </Link>
          <DropDownHover />
        </div>
        <div className={classes.dropDownHover}>
          <Link className={classes.dropbtn} to="/">
            GIRLS
          </Link>
          <DropDownHover />
        </div>
        <div className={classes.dropDownHover}>
          <Link className={classes.dropbtn} to="/">
            BOYS
          </Link>
          <DropDownHover />
        </div>
        <div className={classes.dropDownHover}>
          <Link className={classes.dropbtn} to="/">
            SALE
          </Link>
          <DropDownHover />
        </div>
      </div>
    </>
  );
};

export default NavBarBottom;
