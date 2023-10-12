import classes from "./DropDownLanguage.module.css"
import { useState } from "react";
import i18n from "../../i18n";

const DropDownLanguage = ({className}) => {

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  }

  return (
    <select defaultValue={selectedLanguage} onChange={chooseLanguage} className={(className === 'footer' ? classes.footerDropDown : classes.dropDownSelect)} name="Language">
      <option value="en">ENGLISH</option>
      <option value="fr">FRENCH</option>
      <option value="it">ITALIAN</option>
    </select>
  );
};

export default DropDownLanguage;
