import classes from "./NavBarMid.module.css";
import LogoSvg from "../svgs/LogoSvg";
import SearchIcon from "../svgs/SearchIcon";
import HeartIcon from "../svgs/HeartIcon";
import UserIcon from "../svgs/UserIcon";
import CartIcon from "../svgs/CartIcon";
import Container from "../authentication/Container";
import Register from "../authentication/Register";
import { useState, useContext, useEffect } from "react";
import Cart from "../cart/Cart";
import { ShoppingBag } from "../../pages/HomePage";

const NavBarMid = ({ isVisible }) => {
  const [testContext] = useContext(ShoppingBag);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [myShoppingBag, setMyShoppingBag] = useState(testContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const handleLogin = () => {
    setOpenLoginModal(true);
  };
  const handleCart = () => {
    setOpenCartModal(true);
  };

  useEffect(() => {
    setMyShoppingBag(testContext);
    if (myShoppingBag.length === 0) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }
  }, [myShoppingBag, testContext]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <LogoSvg fontColor={"#222222"} />
        <div className={classes.searchBar}>
          <div>
            <SearchIcon />
          </div>
        </div>
        <div className={classes.icons}>
          <HeartIcon />
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
          {openCartModal && <Cart setOpenCartModal={setOpenCartModal} />}
          <div
            onClick={setOpenCartModal}
            className={
              emptyCart ? classes.noCartItemNumber : classes.cartItemNumber
            }
          >
            {testContext.length}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBarMid;
