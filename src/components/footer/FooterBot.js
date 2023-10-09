import classes from "./FooterBot.module.css";
import DropDownCurrency from "../dropDowns/DropDownCurrency";
import DropDownLanguage from "../dropDowns/DropDownLanguage";

const FooterBot = () => {
  return (
    <section className={classes.footerBotContainer}>
      <div>
        <p>©{new Date().getFullYear()} Uomo</p>
      </div>
      <div className={classes.optionsContainer}>
        <p>LANGUAGE</p>
        <DropDownLanguage className="footer" />
        <p>CURRENCY</p>
        <DropDownCurrency className="footer" />
      </div>
    </section>
  );
};

export default FooterBot;
