import classes from "./FooterBot.module.css";
import ArrowUp from "../svgs/ArrowUp";

const FooterBot = () => {
  return (
    <section className={classes.footerBotContainer}>
      <div>
        <p>©2023 Uomo</p>
      </div>
      <div className={classes.optionsContainer}>
        <p>Language</p>
        <p>
          United Kingdom | English
          <span className={classes.arrowUp}>
            <ArrowUp />
          </span>
        </p>
        <p>Currency</p>
        <p>
          $ USD
          <span className={classes.arrowUp}>
            <ArrowUp />
          </span>
        </p>
      </div>
    </section>
  );
};

export default FooterBot;
