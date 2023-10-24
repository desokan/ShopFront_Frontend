import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Cart.module.css";
import BackDrop from "../util/Backdrop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CartItem from "./CartItem/CartItem";

const baseUrl = "http://localhost:4000";

const Cart = ({ setOpenCartModal }) => {
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
    setOpenCartModal(false);
    //  setOpenLoginModal(false)
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
      }).then(function(response) {
        return response.json();
      });

      navigate("/");
      console.log("Redirecting to HomePage...");

      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <BackDrop />
      <motion.div
        className={classes.loginBox}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={classes.closeLoginForm}>
          <p className={classes.loginText}>
            <b>SHOPPING BAG ( 1 )</b>
          </p>
          <button className={classes.closeLogin} onClick={handleCloseLogin}>
            X
          </button>
        </div>
        <div className={classes.loginForm}>
        <div className={classes.cartItems}> 
          <CartItem/>
        </div>

   
          <div className={classes.break}></div> 
          <div className={classes.subTotal}>
            <p>SUBTOTAL:</p>
            <p id={classes.amount}>$176.00</p>
          </div>


          <button
            id={classes.viewCart}
            className={classes.loginButton}
            type="submit"
          >
            VIEW CART
          </button>
          <button className={classes.loginButton} type="submit">
            CHECKOUT
          </button>
        
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
