import classes from "./FooterTop.module.css";
import Delivery from "../svgs/Delivery";

const FooterTop = () => {
  return (
    <>
      <section className={classes.words}>
        <div className={classes.badges}>
          <div className={classes.delivery}>
            <Delivery />
          </div>

          <div className={classes.badgeTitle}>
            <h5>FAST AND FREE DELIVERY</h5>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div>
          <p>hello</p>
        </div>
        <div>
          <p>hello</p>
        </div>
      </section>
    </>
  );
};

export default FooterTop;
