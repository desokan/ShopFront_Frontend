import { useEffect, useState } from "react";
import classes from "./Cart.module.css";
import BackDrop from "../util/Backdrop";
import { motion } from "framer-motion";
import CartItem from "./CartItem/CartItem";
import { ShoppingBag } from "../../pages/HomePage";
import { useContext } from "react";
import CloseIcon from "../svgs/CloseIcon";
import { useTranslation } from "react-i18next";

const Cart = ({ setOpenCartModal }) => {
  const { t } = useTranslation();
  const cartForParse = localStorage.getItem('cart')
  const shoppingCart = JSON.parse(cartForParse)
  const [emptyCart, setEmptyCart] = useState("");
console.log("cart",shoppingCart)
  const handleCloseCart = () => {
    setOpenCartModal(false);
  };
  const total = () => {
    let tot = 0;
    shoppingCart.forEach((item) => {
      tot += item.price * item.quantity;
    });
    return tot
  };

  useEffect(() => {
    if (shoppingCart.length === 0) {
      setEmptyCart(true);
    }
  }, [shoppingCart]);

  return (
    <div>
      <BackDrop />
      <motion.div
        className={classes.CartBox}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={classes.closeShoppingBag}>
          <p className={classes.cartText}>
            <b>{t('cart.shoppingBag')}  ({shoppingCart.length})</b>
          </p>
          <button className={classes.closeCart} onClick={handleCloseCart}>
            <CloseIcon />
          </button>
        </div>
        <div className={classes.cartContainer}>
          <div className={classes.cartItems}>
            <CartItem />
          </div>

          <div className={classes.break}></div>
          <div className={classes.subTotal}>
            <p>{t('cart.total')}:</p>
            <p id={classes.amount}>€{total()}</p>
          </div>

          <button
            id={classes.viewCart}
            className={classes.checkoutButton}
            type="submit"
          >
            {t('cart.viewCart')}
          </button>
          {emptyCart && (
            <button
              className={
                emptyCart ? classes.checkoutButtonTwo : classes.checkoutButton
              }
              type="submit"
              disabled
            >
              {t('cart.checkout')}
            </button>
          )}
          {!emptyCart && (
            <button
              className={
                emptyCart ? classes.checkoutButtonTwo : classes.checkoutButton
              }
              type="submit"
              disabled
            >
              {t('cart.checkout')}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
