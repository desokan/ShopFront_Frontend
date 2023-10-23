import classes from "./NavBarMid.module.css";
import LogoSvg from "../svgs/LogoSvg";
import SearchIcon from "../svgs/SearchIcon";
import HeartIcon from "../svgs/HeartIcon";
import UserIcon from "../svgs/UserIcon";
import CartIcon from "../svgs/CartIcon";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import { useState } from "react";
import Cart from "../cart/Cart";

const NavBarMid = ({ isVisible }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  const handleLogin = () => {
    setOpenLoginModal(true);
  };
  const handleCart = () => {
    setOpenCartModal(true);
  };

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
            <Login
              closeLogin={setOpenLoginModal}
              openRegister={setOpenRegisterModal}
            />
          )}
          {openRegisterModal && (
            <Register closeRegister={setOpenRegisterModal} />
          )}
          {openCartModal && <Cart setOpenCartModal={setOpenCartModal} />}
        </div>
      </div>
    </div>
  );
};
export default NavBarMid;
