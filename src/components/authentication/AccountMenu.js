import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import BackDrop from "../util/Backdrop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CloseIcon from "../svgs/CloseIcon";

const AccountMenu = ({ closeLogin, openRegister, username }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });






  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleCloseLogin = () => {
    closeLogin(false);
    //  setOpenLoginModal(false)
  };

  const handleRegister = () => {
    closeLogin(false);
    openRegister(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.accessToken);

      });

    console.log("Redirecting to HomePage...");
  };
  return (
    <>
      <div className={classes.closeLoginForm}>
        <p className={classes.loginText}>
          <b>WELCOME BACK, {username.toUpperCase()}</b>
        </p>
        <button className={classes.closeLogin} onClick={handleCloseLogin}>
          <CloseIcon />
        </button>
      </div>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <input
          className={classes.textBox}
          type="text"
          placeholder="Username or email address *"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <input
          className={classes.textBox}
          type="password"
          placeholder="Password *"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />

        <div className={classes.inputInfo}>
          <div className={classes.checkboxLabel}>
            <input
              className={classes.checkboxInput}
              type="checkbox"
              id="rememberMe"
              onChange={handleChange}
              name="rememberMe"
            />{" "}
            <label className={classes.checkboxLabel}>Remember Me</label>
          </div>
          <div>
            <p className={classes.underline}>
              <Link>Lost password?</Link>
            </p>
          </div>
        </div>

        <button className={classes.loginButton} type="submit">
          LOG IN
        </button>
        <p className={classes.newAccount}>
          No account yet?{" "}
          <span>
            <Link onClick={handleRegister}>Create Account</Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default AccountMenu;
