import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import BackDrop from "../util/Backdrop";

const baseUrl = "http://localhost:4000";

const Login = () => {
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
      <p>
        <b>LOGIN</b>
      </p>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <input
            className={classes.textBox}
            type="text"
            placeholder="Username or email address *"
            onChange={handleChange}
            name="username"
            value={username}
          />
        </div>
        <div className={classes.inputContainer}>
          <input
            className={classes.textBox}
            type="password"
            placeholder="Password *"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className={classes.inputInfo}>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              id="rememberMe"
              // checked={formData.isSold}
              onChange={handleChange}
              name="rememberMe"
            />
          </label>
          <p>Remember me</p>

          <p>Lost password?</p>
        </div>
        <button className="login-button" type="submit">
          LOG IN
        </button>
        <p>No account yet? Create Account</p>
      </form>
    </div>
    </div>
  );
};

export default Login;
