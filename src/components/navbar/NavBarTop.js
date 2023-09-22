import classes from "./NavBarTop.module.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ArrowDown from "../svgs/ArrowDown";

const NavBarTop = () => {
  return (
    <>
      <div className={classes.topNav}>
        <div className={classes.lefty}>
          <p>SHIPPING</p>
          <p>CONTACT</p>
        </div>
        <div className={classes.righty}>
          <div>
            <p className={classes.dropdown}>
              LANGUAGE
              <span className={classes.arrow}>
                <ArrowDown />
              </span>
            </p>
          </div>
          <div>
            <div className={classes.languages}>
              {/* <p>English</p>
              <p>French</p> */}
            </div>

            <div>
              <p>
                CURRENCY
                <span className={classes.arrow}>
                  <ArrowDown />
                </span>
              </p>
              {/* <div className={classes.currencies}>
                <p id="pound">£</p>
                <p id="dollar">$</p>
                <p id="euro">€</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarTop;
