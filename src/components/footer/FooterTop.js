import classes from "./FooterTop.module.css";
import Delivery from "../svgs/Delivery";
import Headphones from "../svgs/Headphones";

import Shield from "../svgs/Shield";

const FooterTop = () => {
  return (
    <>
      <section className={classes.footerTopContainer}>
        <div className={classes.badges}>
          <div className={classes.delivery}>
            <Delivery />
          </div>

          <div className={classes.badgeTitle}>
            <h5>FAST AND FREE DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className={`${classes.badges} ${classes.badgesCenter}`}>
          <div className={classes.delivery}>
            <Headphones />
          </div>

          <div className={classes.badgeTitle}>
            <h5>24/7 CUSTOMER SUPPORT</h5>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className={`${classes.badges} ${classes.badgesRight}`}>
          <div className={`${classes.delivery} ${classes.svgRighty}`}>
            <Shield />
          </div>

          <div className={`${classes.badgeTitle} ${classes.righty}`}>
            <h5>MONEY BACK GUARANTEE</h5>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterTop;
