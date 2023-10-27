import { useEffect, useState } from "react";
import classes from "./Cart.module.css";
import BackDrop from "../util/Backdrop";
import { motion } from "framer-motion";
import CartItem from "./CartItem/CartItem";
import { Context1 } from "../../pages/HomePage";
import { useContext } from "react";
import CloseIcon from "../svgs/CloseIcon";
import { useTranslation } from "react-i18next";

const Cart = ({ setOpenCartModal }) => {
  const { t } = useTranslation();

  const [myShoppingBag, setMyShoppingBag] = useContext(Context1);
  const [emptyCart, setEmptyCart] = useState("");

  const handleCloseCart = () => {
    setOpenCartModal(false);
  };
  const total = () => {
    let tot = 0;
    myShoppingBag.forEach((item) => {
      tot += item.price * item.quantity;
    });
    return tot
  };

  useEffect(() => {
    if (myShoppingBag.length === 0) {
      setEmptyCart(true);
    }
  }, [myShoppingBag]);

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
            <b>{t('cart.shoppingBag')}({myShoppingBag.length})</b>
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
            <p id={classes.amount}>${total()}</p>
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
