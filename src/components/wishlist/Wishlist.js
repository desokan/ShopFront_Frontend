import { useEffect, useState } from "react";
import classes from "./Wishlist.module.css";
import BackDrop from "../util/Backdrop";
import { motion } from "framer-motion";
import { Wishlist } from "../../pages/HomePage";
import { useContext } from "react";
import CloseIcon from "../svgs/CloseIcon";
import { useTranslation } from "react-i18next";
import WishlistItem from "./wishlistItem/WishlistItem";

const WishList = ({ closeWishlist }) => {
  const { t } = useTranslation();

  const [myWishlist] = useContext(Wishlist);
  const [emptyWishlist, setEmptyWishlist] = useState("");

  const handleCloseCart = () => {
    closeWishlist(false);
  };

  useEffect(() => {
    if (myWishlist.length === 0) {
      setEmptyWishlist(true);
    }
  }, [myWishlist]);

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
            <b>{t('wishlist.wishlist')}  ({myWishlist.length})</b>
          </p>
          <button className={classes.closeCart} onClick={handleCloseCart}>
            <CloseIcon />
          </button>
        </div>
        <div className={classes.cartContainer}>
          <div className={classes.cartItems}>
            <WishlistItem/>
          </div>

          <div className={classes.break}></div>
          {emptyWishlist && (
            <button
              className={
                emptyWishlist ? classes.checkoutButtonTwo : classes.checkoutButton
              }
              type="submit"
              disabled
            >
              {t('wishlist.viewWishlist')}
            </button>
          )}
          {!emptyWishlist && (
            <button
              className={
                emptyWishlist ? classes.checkoutButtonTwo : classes.checkoutButton
              }
              type="submit"
              disabled
            >
              {t('wishlist.wishlist')}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WishList;
