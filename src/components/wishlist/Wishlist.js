import { useEffect, useState } from "react";
import classes from "./Wishlist.module.css";
import BackDrop from "../util/Backdrop";
import { motion } from "framer-motion";
import { Wishlist } from '../../App';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../svgs/CloseIcon";
import { useTranslation } from "react-i18next";
import WishlistItem from "./wishlistItem/WishlistItem";
import { DashbordNavigation } from "../../App";

const WishList = ({ closeWishlist }) => {
  const { t } = useTranslation();

  const [dashbordNavigation, setDashbordNavigation] = useContext(DashbordNavigation);
  const [title, setTitle] = useState(dashbordNavigation);
  const navigate = useNavigate();

  const [myWishlist] = useContext(Wishlist);
  const [emptyWishlist, setEmptyWishlist] = useState("");
  const [hasToken, setHasToken]= useState('')

  const token = localStorage.getItem('token')

  const handleCloseCart = () => {
    closeWishlist(false);
  };

  useEffect(() => {
    if (myWishlist.length === 0) {
      setEmptyWishlist(true);
    }
    if(token){
      setHasToken(true)
    }
  }, [myWishlist]);

  const handleClick = (value) => {
    setDashbordNavigation(value);
    navigate(`/dashboard`);
    console.log('title',title);
  };

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
            onClick={() => handleClick('WISHLIST')}            
              className={
                (emptyWishlist || !hasToken) ? classes.checkoutButtonTwo : classes.checkoutButton
              }
              
              
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
