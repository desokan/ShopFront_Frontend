import FooterBot from "./FooterBot";
import FooterMid from "./FooterMid";
import FooterTop from "./FooterTop";
import classes from "./FooterContainer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.container}>
        <FooterTop />
        <FooterMid />
        <FooterBot />
      </footer>
    </>
  );
};

export default Footer;
