import classes from "./NavBarBottom.module.css";
import { Link } from "react-router-dom";
import DropDownHover from "../dropDowns/DropDownHover";

const NavBarBottom = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.dropDownHover}>
          <Link className={classes.dropbtn} to="/">
            HOME
          </Link>
          <DropDownHover />
        </div>
    
        <Link to="/">SHOP</Link>
        <Link to="/">COLLECTION</Link>
        <Link to="/">JOURNAL</Link>
        <Link to="/">LOOKBOOK</Link>
        <Link to="/">PAGES</Link>
      </div>
    </>
  );
};

export default NavBarBottom;
