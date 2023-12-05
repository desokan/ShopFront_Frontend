import classes from "./FooterTop.module.css";
import Delivery from "../svgs/Delivery";
import Headphones from "../svgs/Headphones";

import Shield from "../svgs/Shield";

const FooterTop = ({ t }) => {
  return (
    <>
      <section className={classes.footerTopContainer}>
        <div className={classes.badges}>
          <div className={classes.delivery}>
            <Delivery />
          </div>

          <div className={classes.badgeTitle}>
            <h5>{t("footer.Top.DeliveryTitle")}</h5>
            <p>{t("footer.Top.DeliveryInfo")}</p>
          </div>
        </div>
        <div className={`${classes.badges} ${classes.badgesCenter}`}>
          <div className={classes.delivery}>
            <Headphones />
          </div>

          <div className={classes.badgeTitle}>
            <h5>{t("footer.Top.SupportTitle")}</h5>
            <p>{t("footer.Top.SupportInfo")}</p>
          </div>
        </div>
        <div className={`${classes.badges} ${classes.badgesRight}`}>
          <div className={`${classes.delivery} ${classes.svgRighty}`}>
            <Shield />
          </div>

          <div className={`${classes.badgeTitle} ${classes.righty}`}>
            <h5>{t("footer.Top.ReturnTitle")}</h5>
            <p>{t("footer.Top.ReturnInfo")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterTop;
