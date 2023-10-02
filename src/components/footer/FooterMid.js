import classes from "./FooterMid.module.css";
import LogoSvg from "../svgs/LogoSvg.js";
import {
  Twitter,
  Facebook,
  Pinterest,
  Youtube,
  Instagram,
} from "../svgs/social-icons";
import { Link } from "react-router-dom"

const FooterMid = () => {
    const handleClick = () => {
        window.location.reload()
        window.scrollTo(0, 0);
    }
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
            <Link to={'https://www.facebook.com'} target="_blank"><Facebook /></Link>
            <Link to={'https://www.twitter.com'} target="_blank"><Twitter /></Link>
            <Link to={'https://www.instagram.com'} target="_blank"><Instagram /></Link>
            <Link to={'https://www.youtube.com'} target="_blank"><Youtube /></Link>
            <Link to={'https://www.pinterest.com'} target="_blank"><Pinterest /></Link>
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
            <ul className={classes.company}>
              <li>Customer Service</li>
              <li>My Account</li>
              <li>Find a Store</li>
              <li>Legal & Privacy</li>
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
            <form>
              <div  className={classes.subscribeContainer}>
                <input
                  className={classes.subscribeInput}
                  type="text"
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
