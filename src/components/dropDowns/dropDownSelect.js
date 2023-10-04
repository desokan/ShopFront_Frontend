const DropDownSelect = ( { name, value1, value2, value3 }) => {
  return (
    <select name={name} id={name}>
      <option value={value1}>{value1}</option>
      <option value={value2}>{value2}</option>
      <option value={value3}>{value3}</option>
    </select>
  );
};

export default DropDownSelect;
