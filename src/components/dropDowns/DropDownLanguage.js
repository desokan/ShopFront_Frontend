import classes from "./DropDownLanguage.module.css"
import { useState } from "react";
import i18n from "../../i18n";
import { useTranslation } from 'react-i18next'

const DropDownLanguage = ({className}) => {

  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  }

  return (
    <select defaultValue={selectedLanguage} onChange={chooseLanguage} className={(className === 'footer' ? classes.footerDropDown : classes.dropDownSelect)} name="Language">
      <option value="en">{t("dropdown.en")}</option>
      <option value="fr">{t("dropdown.fr")}</option>
      <option value="it">{t("dropdown.it")}</option>
    </select>
  );
};

export default DropDownLanguage;
