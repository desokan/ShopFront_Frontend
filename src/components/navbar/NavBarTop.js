import classes from "./NavBarTop.module.css";
import React from "react";
import ArrowDown from "../svgs/ArrowDown";

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
