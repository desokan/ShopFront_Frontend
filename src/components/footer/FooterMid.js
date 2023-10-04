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

const FooterMid = () => {
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
          <h4>COMPANY</h4>
          <div>
            <ul className={classes.company}>
              <li>About Us </li>
              <li>Careers</li>
              <li>Affiliates</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={classes.titles}>
          <h4 id={classes.special}>SHOP</h4>
          <div>
            <ul className={classes.company}>
              <li>New Arrivals </li>
              <li>Accessories</li>
              <li>Men</li>
              <li>Women</li>
              <li>Shop All</li>
            </ul>
          </div>
        </div>
        <div className={classes.titles}>
          <h4>HELP</h4>
          <div>
            <ul className={`${classes.company} ${classes.removeAnchorStyle}`}>
              <li>Customer Service</li>
              <li>My Account</li>
              <li>Find a Store</li>

              <li>
                <a href="/privacy" target="_blank">
                  Legal & Privacy
                </a>
              </li>
              <li>Contact</li>
              <li>Gift Card</li>
            </ul>
          </div>
        </div>
        <div className={classes.titles}>
          <h4>SUBSCRIBE</h4>
          <div className={classes.subscribe}>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form onSubmit={postSubscriber}>
              <div className={classes.subscribeContainer}>
                <input
                  value={subscriber}
                  onChange={handleSubscriber}
                  className={classes.subscribeInput}
                  type="email"
                  placeholder="Your email address"
                />
                <button className={classes.subscribeButton}>JOIN</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterMid;
