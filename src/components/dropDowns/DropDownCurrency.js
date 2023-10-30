import classes from "./DropDownCurrency.module.css";

const DropDownCurrency = ({ className }) => {
  return (
    <div
      className={
        className === "footer" ? classes.footerDropDown : classes.dropDownSelect
      }
      name="Currency"
    >
      EURO €
    </div>
  );
};

export default DropDownCurrency;
