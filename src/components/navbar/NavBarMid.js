import classes from './NavBarMid.module.css'
import LogoSvg from '../svgs/LogoSvg'
import SearchIcon from '../svgs/SearchIcon'
import HeartIcon from '../svgs/HeartIcon'
import UserIcon from '../svgs/UserIcon'
import CartIcon from '../svgs/CartIcon'
import Login from '../authentication/Login'
import Register from '../authentication/Register'
import { useState, useContext, useEffect } from 'react'
import Cart from '../cart/Cart'
import { ShoppingBag } from '../../pages/HomePage'

const NavBarMid = ({ isVisible }) => {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [openRegisterModal, setOpenRegisterModal] = useState(false)
  const [openCartModal, setOpenCartModal] = useState(false)
  const [myShoppingBag] = useContext(ShoppingBag)
  const [emptyCart, setEmptyCart] = useState(true);

  const handleLogin = () => {
    setOpenLoginModal(true)
  }
  const handleCart = () => {
    setOpenCartModal(true)
  }
  useEffect(() => {
    if (myShoppingBag.length === 0) {
      setEmptyCart(true);
    }else setEmptyCart(false)
  }, [myShoppingBag]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <LogoSvg fontColor={'#222222'} />
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
        <div  className={
                emptyCart ? classes.noCartItemNumber : classes.cartItemNumber
              }>{myShoppingBag.length}</div>
        </div>
      </div>
    </div>
  )
}
export default NavBarMid
