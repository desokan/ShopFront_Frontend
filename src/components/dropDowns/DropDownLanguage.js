import classes from "./DropDownLanguage.module.css";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { Language} from '../../App'
import i18n from "../../i18n";

const DropDownLanguage = ({ className }) => {
  const [selectedLanguage, setSelectedLanguage] = useContext(Language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("savedLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    }
  }, [setSelectedLanguage]);

  const chooseLanguage = (e) => {
    e.preventDefault();
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    localStorage.setItem("savedLanguage", newLanguage);
  };

  return (
    <select
      value={selectedLanguage || ''}
      onChange={chooseLanguage}
      className={className === "footer" ? classes.footerDropDown : classes.dropDownSelect}
      name="Language"
    >
      <option value="en">ENGLISH</option>
      <option value="fr">FRANÇAIS</option>
      <option value="it">ITALIANO</option>
    </select>
  );
};

export default DropDownLanguage;
