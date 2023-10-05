import classes from "./DropDownLanguage.module.css"

const DropDownLanguage = ({className}) => {
  return (
    <select className={(className === 'footer' ? classes.footerDropDown : classes.dropDownSelect)} name="Language">
      <option value="English">ENGLISH</option>
      <option value="French">FRENCH</option>
      <option value="Italian">ITALIAN</option>
    </select>
  );
};

export default DropDownLanguage;
