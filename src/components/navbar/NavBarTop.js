import classes from "./NavBarTop.module.css";
import React from "react";
import ArrowDown from "../svgs/ArrowDown";
import DropDownSelect from "../dropDowns/DropDownSelect";

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
            <p className={classes.dropdown}>
              LANGUAGE
              <span className={classes.arrow}>
                <ArrowDown />
              </span>
              <DropDownSelect name="language" value1='English' value2='French' value3='Italian'/>
            </p>
            <p>
              CURRENCY
              <span className={classes.arrow}>
                <ArrowDown />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarTop;
