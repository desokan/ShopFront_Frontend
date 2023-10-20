import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import BackDrop from "../util/Backdrop";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:4000";

const Login = ({closeLogin}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mockUsername = "SaraRasheed";
  const mockPassword = "TripleEqual";

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(`Input "${name}":`, value);
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  const handleCloseLogin = () => {
   closeLogin(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username, password);
    console.log(mockUsername, mockPassword);

    if (username !== mockUsername || password !== mockPassword) {
      console.log("Login failed. Invalid credentials.");
    } else {
      console.log("Login successful");

      fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }).then(function (response) {
        return response.json();
      });

      navigate("/");
      console.log("Redirecting to HomePage...");

      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className={classes.backDrop}>
      <BackDrop />
      <div className={classes.loginBox}>
        <div className={classes.closeLoginForm}>
          <p className={classes.loginText}>
            <b>LOGIN</b>
          </p>
          <button className={classes.closeLogin} onClick={handleCloseLogin}>
            X
          </button>
        </div>
        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <input
            className={classes.textBox}
            type="text"
            placeholder="Username or email address *"
            onChange={handleChange}
            name="username"
            value={username}
          />

          <input
            className={classes.textBox}
            type="password"
            placeholder="Password *"
            onChange={handleChange}
            name="password"
            value={password}
          />

          <div className={classes.inputInfo}>
            <div className={classes.checkboxLabel}>
              <input
                className={classes.checkboxInput}
                type="checkbox"
                id="rememberMe"
                // checked={formData.isSold}
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
              <Link to="/register">Create Account</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
