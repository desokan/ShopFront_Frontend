import FooterBot from "./FooterBot";
import FooterMid from "./FooterMid";
import FooterTop from "./FooterTop";
import classes from "./FooterContainer.module.css";
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={classes.container}>
        <FooterTop  t={t} />
        <FooterMid t={t}/>
        <FooterBot  t={t}/>
      </footer>
    </>
  );
};

export default Footer;
