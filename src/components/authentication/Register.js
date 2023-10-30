import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import BackDrop from "../util/Backdrop";
import { motion } from "framer-motion"


const baseUrl = "http://localhost:4000";

const Register = ({ closeRegister }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleCloseRegister = () => {
    closeRegister(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email
        }),
      }).then(function (response) {
        return response.json();
      });

      navigate("/");
      console.log("Redirecting to HomePage...");

      setUsername("");
      setEmail("");
      setPassword("");
    
  };

  return (
    <div className={classes.backDrop}>
      <BackDrop />
      <motion.div className={classes.registerBox} initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8 }}>
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

            onChange={(e)=> {setUsername(e.target.value)}}
            name="username"
            value={username}
          />
          <input
            className={classes.textBox}
            type="text"
            placeholder="Email address *"
            onChange={(e)=> {setEmail(e.target.value)}}
            name="email"
            value={email}
          />
          <input
            className={classes.textBox}
            type="password"
            placeholder="Password *"
            onChange={(e)=> {setPassword(e.target.value)}}
            name="password"
            value={password}
            required
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
      </motion.div>
    </div>
  );
};

export default Register;
