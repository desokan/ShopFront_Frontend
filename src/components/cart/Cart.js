import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Cart.module.css";
import BackDrop from "../util/Backdrop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CartItem from "./CartItem/CartItem";
import { Context1 } from "../../pages/HomePage";
import { useContext } from "react";

const Cart = ({ setOpenCartModal }) => {
  const [myShoppingBag, setMyShoppingBag] = useContext(Context1);
  const handleCloseLogin = () => {
    setOpenCartModal(false);
    //  setOpenLoginModal(false)
  };
  const total = () =>{
    let tot= 0
    myShoppingBag.forEach((item) => {
      tot += item.price * item.quantity
    })
    return tot
  }
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
            <b>SHOPPING BAG ({myShoppingBag.length})</b>
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
            <p id={classes.amount}>${total()}</p>
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
