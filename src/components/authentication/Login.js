import { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import CloseIcon from "../svgs/CloseIcon";

const Login = ({ closeLogin, openRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
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
        const registerRes = await fetch("http://localhost:4000/login", opts);

        const data = await registerRes.json();
        if (registerRes.status === 400) {
          setErrorMessage(data);
          setFailed(true);
          setRed("red");
          setShake(sk);
        } else {
          handleCloseLogin();
          localStorage.setItem("token", data.accessToken);
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
          <b>LOGIN</b>
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
          placeholder="Email address *"
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
          placeholder="Password *"
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
            <label className={classes.checkboxLabel}>Remember Me</label>
          </div>
          <div>
            <p className={classes.underline}>
              <Link>Lost password?</Link>
            </p>
          </div>
        </div>
        <br/>

        {!failed && <div className={classes.error}> </div>}
          {failed && <div className={classes.error}>{errorMessage}</div>}
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
