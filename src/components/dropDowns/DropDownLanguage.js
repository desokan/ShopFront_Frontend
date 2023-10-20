import classes from "./DropDownLanguage.module.css";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { Context } from "../../pages/HomePage";
import i18n from "../../i18n";

const DropDownLanguage = ({ className }) => {
  const [selectedLanguage, setSelectedLanguage] = useContext(Context);
  const { t } = useTranslation();

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
      value={selectedLanguage}
      onChange={chooseLanguage}
      className={className === "footer" ? classes.footerDropDown : classes.dropDownSelect}
      name="Language"
    >
      <option value="en">{t("dropdown.en")}</option>
      <option value="fr">{t("dropdown.fr")}</option>
      <option value="it">{t("dropdown.it")}</option>
    </select>
  );
};

export default DropDownLanguage;
