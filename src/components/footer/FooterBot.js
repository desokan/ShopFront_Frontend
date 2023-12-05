import classes from "./FooterBot.module.css";
import DropDownCurrency from "../dropDowns/DropDownCurrency";
import DropDownLanguage from "../dropDowns/DropDownLanguage";

const FooterBot = ({ t }) => {
  return (
    <section className={classes.footerBotContainer}>
      <div>
        <p>©{new Date().getFullYear()} Uomo</p>
      </div>
      <div className={classes.optionsContainer}>
        <div className={classes.wrapper}>
          <p>{t("footer.Bottom.Language")}</p>
          <DropDownLanguage className="footer" />
        </div>
        <div className={`${classes.wrapper} ${classes.currency}`}>
          <p>{t("footer.Bottom.Currency")}</p>
          <DropDownCurrency className="footer" />
        </div>
      </div>
    </section>
  );
};

export default FooterBot;
