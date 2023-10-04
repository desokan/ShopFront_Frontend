import classes from "./DropDownHover.module.css";
import { Link } from "react-router-dom";

const DropDownHover = () => {
  return (
    <div className={classes.dropDownContent}>
      <Link to="/">Sara</Link>
      <Link to="/">Rasheed</Link>
      <Link to="/">Norik</Link>
    </div>
  );
};

export default DropDownHover;
