import classes from "./NavBarBottom.module.css";
import { Link } from "react-router-dom";

const NavBarBottom = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Link to="/">HOME</Link>
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
