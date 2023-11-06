import { useState } from "react";
import classes from "./Account.module.css";

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    emailAddress: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <form>
      <div className={classes.nameContainer}>
        <input
          type="text"
          className={classes.nameInputs}
          placeholder="First Name"
          value={formData.firstName}
          name="firstName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          className={classes.nameInputs}
          placeholder="Last Name"
          value={formData.lastName}
          name="lastName"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={classes.DisplayNameEmail}>
        <input
          type="text"
          className={classes.nameInputs}
          placeholder="Display Name"
          value={formData.displayName}
          name="displayName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          className={classes.nameInputs}
          placeholder="Email Address"
          value={formData.emailAddress}
          name="emailAddress"
          onChange={(e) => handleChange(e)}
        />
        <h4> PASSWORD CHANGE</h4>
        <input
          type="text"
          className={classes.nameInputs}
          placeholder="Current Password"
          value={formData.currentPassword}
          name="currentPassword"
          onChange={(e) => handleChange(e)}
        />{" "}
        <input
          type="text"
          className={classes.nameInputs}
          placeholder="New Password"
          value={formData.newPassword}
          name="emailAddress"
          onChange={(e) => handleChange(e)}
        />{" "}
        <input
          type="text"
          className={classes.nameInputs}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
};
export default Account;
