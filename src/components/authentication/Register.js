import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import BackDrop from "../util/Backdrop";


const baseUrl = "http://localhost:4000";

const Register = ({ closeRegister }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const mockUsername = "SaraRasheed";
  const mockPassword = "TripleEqual";

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(`Input "${name}":`, value);
    if (username === "username" && email === "email") {
      setUsername(value) && setEmail(value);
    } else if (password === "password") {
      setPassword(value);
    }
  }

  const handleCloseRegister = () => {
    closeRegister(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(username, email, password);

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
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={classes.backDrop}>
      <BackDrop />
      <div className={classes.registerBox}>
        <div className={classes.closeRegisterForm}>
          <p className={classes.registerText}>CREATE AN ACCOUNT</p>
          <button
            className={classes.closeRegister}
            onClick={handleCloseRegister}
          >
            X
          </button>
        </div>
        <form className={classes.registerForm} onSubmit={handleSubmit}>
          <input
            className={classes.textBox}
            type="text"
            placeholder="Username"
            onChange={handleChange}
            name="username"
            value={username}
          />
          <input
            className={classes.textBox}
            type="text"
            placeholder="Email address *"
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
          
            <p className={classes.personalData}>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          
          <button className={classes.registerButton} type="submit">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
