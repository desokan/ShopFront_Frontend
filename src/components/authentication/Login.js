import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

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
    <div className="loginBox">
        <div className={classes.backDrop}></div>
      <p><b>LOGIN</b></p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="text-box"
            type="text"
            placeholder="username"
            onChange={handleChange}
            name="username"
            value={username}
          />
        </div>
        <div className="input-container">
          <input
            className="text-box"
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="input-info">
          <label className="checkbox-label">
            <p>Remember me</p>
            <input
              className="checkbox-input"
              type="checkbox"
              id="rememberMe"
              // checked={formData.isSold}
              onChange={handleChange}
              name="rememberMe"
            />
          </label>
        </div>
        <p>Lost password?</p>
        <button className="login-button" type="submit">
          LOG IN
        </button>
        <p>No account yet? Create Account</p>
      </form>
    </div>

  );
};

export default Login;
