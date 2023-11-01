import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";
import BackDrop from "../util/Backdrop";
import { motion } from "framer-motion";
import CloseIcon from "../svgs/CloseIcon";

const Register = ({ closeRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });


  const handleCloseRegister = () => {
    closeRegister(false);
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        handleCloseRegister();
        console.log(data);
        localStorage.setItem("token", data.accessToken);
      });
  }

  return (
    <div className={classes.backDrop}>
      <BackDrop />
      <motion.div
        className={classes.registerBox}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={classes.closeRegisterForm}>
          <p className={classes.registerText}>CREATE AN ACCOUNT</p>
          <button
            className={classes.closeRegister}
            onClick={handleCloseRegister}
          >
            <CloseIcon />
          </button>
        </div>
        <form className={classes.registerForm} onSubmit={handleSubmit}>
          <input
            className={classes.textBox}
            type="text"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
            value={formData.username}
            name="username"
          />
          <input
            className={classes.textBox}
            type="text"
            placeholder="Email address *"
            onChange={(e) => handleChange(e)}
            value={formData.email}
            name="email"
          />
          <input
            className={classes.textBox}
            type="password"
            placeholder="Password *"
            onChange={(e) => handleChange(e)}
            value={formData.password}
            name="password"
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
