import classes from "./NavBarTop.module.css";
import React from "react";
// import ArrowDown from "../svgs/ArrowDown";
// import DropDownSelect from "../dropDowns/DropDownSelect";
import DropDownLanguage from "../dropDowns/DropDownLanguage";
import DropDownCurrency from "../dropDowns/DropDownCurrency";

const NavBarTop = ({t}) => {
  return (
    <>
      <div className={classes.topNav}>
        <div className={classes.wrapper}>
          <div className={classes.lefty}>
            <p>{t("navbar.top.Shipping")}</p>
            <p>{t("navbar.top.Contact")}</p>
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
