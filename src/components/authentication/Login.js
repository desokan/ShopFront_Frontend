import { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "../svgs/CloseIcon";

const Login = ({ closeLogin, openRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleCloseLogin = () => {
    closeLogin(false);
  };

  const handleRegister = () => {
    closeLogin(false);
    openRegister(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  try {
    
    fetch(`http://localhost:4000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
 
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        const user = data.user;
        const stringifyUser = JSON.stringify(user);
        localStorage.setItem("user", stringifyUser);
        handleCloseLogin();
      });
  } catch (error) {
    console.log(error);
  }
    
  };
  return (
    <>
      <div className={classes.closeLoginForm}>
        <p className={classes.loginText}>
          <b>LOGIN</b>
        </p>
        <button className={classes.closeLogin} onClick={handleCloseLogin}>
          <CloseIcon />
        </button>
      </div>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <input
          className={classes.textBox}
          type="text"
          placeholder="Email address *"
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

export default Login;
