import classes from "./NavBarMid.module.css";
import LogoSvg from "../svgs/LogoSvg";
import SearchIcon from "../svgs/SearchIcon";
import HeartIcon from "../svgs/HeartIcon";
import UserIcon from "../svgs/UserIcon";
import CartIcon from "../svgs/CartIcon";
import Container from "../authentication/Container";
import Register from "../authentication/Register";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import { ShoppingBag, Wishlist } from "../../App";
import WishList from "../wishlist/Wishlist";

const NavBarMid = ({ isVisible }) => {
  const [bagContext] = useContext(ShoppingBag);
  const [wishlistContext] = useContext(Wishlist);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openWishlistModal, setOpenWishlistModal] = useState(false);
  const [myShoppingBag, setMyShoppingBag] = useState(bagContext);
  const [myWishlist, setMyWishlist] = useState(wishlistContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const [emptyWishList, setEmptyWishlist] = useState(true);

  const navigate = useNavigate();
  const handleLogin = () => {
    if (window.location.pathname.includes("dashboard")) {
      return;
    }
    setOpenLoginModal(true);
  };
  const handleCart = () => {
    setOpenCartModal(true);
  };
  const handleWishlist = () => {
    setOpenWishlistModal(true);
  };
  useEffect(() => {
    setMyShoppingBag(bagContext);
    if (myShoppingBag.length === 0) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }
    setMyWishlist(wishlistContext);
    if (myWishlist.length === 0) {
      setEmptyWishlist(true);
    } else {
      setEmptyWishlist(false);
    }
  }, [myShoppingBag, bagContext, myWishlist, wishlistContext]);

  const handleClick = () => {
    if ("/dashboard") {
      navigate("/");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div onClick={handleClick} className={classes.logoContainer}>
          <LogoSvg fontColor={"#222222"} />
        </div>

        <div className={classes.icons}>
          <div
            onClick={setOpenWishlistModal}
            className={
              emptyWishList ? classes.noWishlistNumber : classes.wishlistNumber
            }
          >
            {wishlistContext.length}
          </div>
          {openCartModal && <Cart setOpenCartModal={setOpenCartModal} />}
          <div
            onClick={setOpenCartModal}
            className={
              emptyCart ? classes.noCartItemNumber : classes.cartItemNumber
            }
          >
            {bagContext.length}
          </div>

          <HeartIcon onClick={handleWishlist} />
          <UserIcon onClick={handleLogin} />
          <CartIcon onClick={handleCart} />
          {openLoginModal && (
            <Container
              closeLogin={setOpenLoginModal}
              openRegister={setOpenRegisterModal}
            />
          )}
          {openRegisterModal && (
            <Register closeRegister={setOpenRegisterModal} />
          )}
          {openWishlistModal && (
            <WishList closeWishlist={setOpenWishlistModal} />
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBarMid;
