import classes from "./FooterMid.module.css";
import LogoSvg from "../svgs/LogoSvg.js";
import {
  Twitter,
  Facebook,
  Pintrest,
  Youtube,
  Instagram,
} from "../svgs/social-icons";

const FooterMid = () => {
  return (
    <>
      <section className={classes.footerMidContainer}>
        <div>
          <LogoSvg fontColor={"#FFFFFF"} />
          <p>
            1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United States{" "}
            <br /> <br /> sale@uomo.com <br /> +1 246-345-0695
          </p>
          <div className={classes.socialIconContainer}>
            <Facebook />
            <Twitter />
            <Instagram />
            <Youtube />
            <Pintrest />
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
        </div>
      </section>
    </>
  );
};

export default FooterMid;
