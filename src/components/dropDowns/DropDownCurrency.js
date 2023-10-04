import classes from "./DropDownCurrency.module.css"

const DropDownCurrency = () => {
  return (
    <select className={classes.dropDownSelect} name="Currency">
      <option value="Pound">GBP £</option>
      <option value="Euros">EURO €</option>
      <option value="Dollars">USD $</option>
    </select>
  );
};

export default DropDownCurrency;