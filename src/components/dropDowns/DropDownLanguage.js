import classes from "./DropDownLanguage.module.css"
import { useTranslation } from 'react-i18next'
import { useContext } from "react";
import { Context } from "../../pages/HomePage";
import i18n from "../../i18n";

const DropDownLanguage = ({className}) => {
  const [selectedLanguage, setSelectedLanguage] = useContext(Context);
  const { t } = useTranslation();

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  }

  return (
    <select value={selectedLanguage} onChange={chooseLanguage} className={(className === 'footer' ? classes.footerDropDown : classes.dropDownSelect)} name="Language">
      <option value="en">{t("dropdown.en")}</option>
      <option value="fr">{t("dropdown.fr")}</option>
      <option value="it">{t("dropdown.it")}</option>
    </select>
  );
};

export default DropDownLanguage;
