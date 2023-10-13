import classes from "./FooterMid.module.css";
import LogoSvg from "../svgs/LogoSvg.js";
import { useState } from "react";
import {
  Twitter,
  Facebook,
  Pinterest,
  Youtube,
  Instagram,
} from "../svgs/social-icons";
import { Link } from "react-router-dom";


const FooterMid = ({t}) => {

  const [subscriber, setSubscriber] = useState();

  const baseUrl = 'http://localhost:4000'

  const handleClick = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  const postSubscriber = (e) => {
    e.preventDefault();
    const newSubscriber = {
      subscriber,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSubscriber),
    };

    fetch(`${baseUrl}/subscribers`, options).then((res) =>
      res.json()
    );
    setSubscriber("");

  };

  const handleSubscriber = (e) => {
    setSubscriber(e.target.value);
  };

  return (
    <>
      <section className={classes.footerMidContainer}>
        <div>
          <div className={classes.logoDiv} onClick={handleClick}>
            <LogoSvg fontColor={"#FFFFFF"} />
          </div>
          <p>
            1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United States{" "}
            <br /> <br /> sale@uomo.com <br /> +1 246-345-0695
          </p>
          <div className={classes.socialIconContainer}>
            <Link to={"https://www.facebook.com"} target="_blank">
              <Facebook />
            </Link>
            <Link to={"https://www.twitter.com"} target="_blank">
              <Twitter />
            </Link>
            <Link to={"https://www.instagram.com"} target="_blank">
              <Instagram />
            </Link>
            <Link to={"https://www.youtube.com"} target="_blank">
              <Youtube />
            </Link>
            <Link to={"https://www.pinterest.com"} target="_blank">
              <Pinterest />
            </Link>
          </div>
        </div>
        <div className={classes.titles}>
          <h4>{t("footer.Company.Company")}</h4>
          <div>
            <ul className={classes.company}>
              <li>{t("footer.Company.About")}</li>
              <li>FAQ</li>
              <li>{t("footer.Company.Careers")}</li>
              <li>{t("footer.Company.Shipping")}</li>
              <li>{t("footer.Company.Contact")}</li>
            </ul>
          </div>
        </div>
        <div className={classes.titles}>
          <h4 id={classes.special}>{t("footer.Shop.Shop")}</h4>
          <div>
            <ul className={classes.company}>
              <li>{t("footer.Shop.Arrivals")}</li>
              <li>{t("footer.Shop.Accessories")}</li>
              <li>{t("footer.Shop.Men")}</li>
              <li>{t("footer.Shop.Women")}</li>
              <li>{t("footer.Shop.ShopAll")}</li>
            </ul>
          </div>
        </div>
        <div className={classes.titles}>
          <h4>{t("footer.Help.Help")}</h4>
          <div>
            <ul className={`${classes.company} ${classes.removeAnchorStyle}`}>
              <li>{t("footer.Help.CustomerService")}</li>
              <li>{t("footer.Help.Account")}</li>
              <li>{t("footer.Help.TrackOrder")}</li>
              <li>{t("footer.Help.Return")}</li>
              <li>
                <a href="/privacy" target="_blank">
                {t("footer.Help.Legal&Privacy")}
                </a>
              </li>
              <li>{t("footer.Help.GiftCard")}</li>
            </ul>
          </div>
        </div>
        <div className={classes.titles}>
          <h4>  {t("footer.Subscribe.Subscribe")}</h4>
          <div className={classes.subscribe}>
            <p>
            {t("footer.Subscribe.CallToAction")}
            </p>
            <form onSubmit={postSubscriber}>
              <div className={classes.subscribeContainer}>
                <input
                  value={subscriber}
                  onChange={handleSubscriber}
                  className={classes.subscribeInput}
                  type="email"
                  placeholder={t("footer.Subscribe.Email")}
                />
                <button className={classes.subscribeButton}>{t("footer.Subscribe.Join")}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterMid;
