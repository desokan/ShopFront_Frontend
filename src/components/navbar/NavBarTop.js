import classes from "./NavBarTop.module.css";
import React from "react";
import DropDownLanguage from "../dropDowns/DropDownLanguage";
import DropDownCurrency from "../dropDowns/DropDownCurrency";

const NavBarTop = () => {
  return (
    <>
      <div className={classes.topNav}>
        <div className={classes.wrapper}>
          <div className={classes.lefty}>
            <p>SHIPPING</p>
            <p>CONTACT</p>
          </div>
          <div className={classes.righty}>
            <DropDownLanguage />
            <DropDownCurrency />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarTop;
