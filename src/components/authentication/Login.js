import { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "../svgs/CloseIcon";
import { useTranslation } from "react-i18next";

const Login = ({ closeLogin, openRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {t} = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");
  const [failed, setFailed] = useState(false);
  const [red, setRed] = useState("");
  const [shake, setShake] = useState("");
  const sk = "shake 0.2s ease-in-out 0s 2";

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

 const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    async function login() {
      try {
        const registerRes = await fetch("https://determined-trench-coat-mite.cyclic.app/login", opts);

        const data = await registerRes.json();
        if (registerRes.status === 400) {
          setErrorMessage(data);
          setFailed(true);
          setRed("red");
          setShake(sk);
        } else {
          handleCloseLogin();
          localStorage.setItem("token", data.token);
          const user = data.user;
          const stringifyUser = JSON.stringify(user);
          localStorage.setItem("user", stringifyUser);
        }
      } catch (error) {}
    }
login()
    
  };
  return (
    <>
      <div className={classes.closeLoginForm}>
        <p className={classes.loginText}>
          <b>{t("login.Login")}</b>
        </p>
        <button className={classes.closeLogin} onClick={handleCloseLogin}>
          <CloseIcon />
        </button>
      </div>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <input
          style={{
            color: `${red}`,
            animation: `${shake}`,
          }}
          className={classes.textBox}
          type="text"
          placeholder={t("login.Email")}
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <input
          style={{
            color: `${red}`,
            animation: `${shake}`,
          }}
          className={classes.textBox}
          type="password"
          placeholder={t("login.Password")}
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />

          <br/>
        <div className={classes.inputInfo}>
          <div className={classes.checkboxLabel}>
            <input
              className={classes.checkboxInput}
              type="checkbox"
              id="rememberMe"
              onChange={handleChange}
              name="rememberMe"
            />{" "}
            <label className={classes.checkboxLabel}>{t("login.Remember")}</label>
          </div>
          <div>
            <p className={classes.underline}>
              <Link>{t("login.Lost")}</Link>
            </p>
          </div>
        </div>
        <br/>

        {!failed && <div className={classes.error}> </div>}
          {failed && <div className={classes.error}>{errorMessage}</div>}
        <button className={classes.loginButton} type="submit">
        {t("login.Login")}
        </button>
        <p className={classes.newAccount}>
        {t("login.NoAccount")} {" "}
          <span>
            <Link onClick={handleRegister}>{t("login.Create")}</Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
