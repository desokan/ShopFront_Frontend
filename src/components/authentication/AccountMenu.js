import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../svgs/CloseIcon";
import classes from './Account.module.css'
import { DashbordNavigation } from "../../App";

const AccountMenu = ({ closeLogin, openRegister, user }) => {
  
  const [dashbordNavigation, setDashbordNavigation] = useContext(DashbordNavigation);
  const [title, setTitle] = useState(dashbordNavigation);
  const navigate = useNavigate();

  useEffect(() => {
    setDashbordNavigation(title);
  }, [title,dashbordNavigation]);

  const handleCloseAccount = () => {
    closeLogin(false);
  };

  const handleLogout = () => {
    handleCloseAccount()
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const handleClick = (value) => {
    setDashbordNavigation(value);
    navigate(`/dashboard`);
  };

  return (
    <>
      <div className={classes.closeAccountForm}>
        <p className={classes.accountText}>
          <b>WELCOME BACK, {user.username.toUpperCase()}</b>
        </p>
        <button className={classes.closeAccount} onClick={handleCloseAccount}>
          <CloseIcon />
        </button>
      </div>
      <div className={classes.accountContainer}>
        <ul className={classes.accountUL}>
          <li className={classes.accountLi} value='DASHBORD' onClick={() => handleClick('DASHBORD')}>DASHBORD</li>
          <li className={classes.accountLi} value='ORDERS' onClick={() => handleClick('ORDERS')}>ORDERS</li>
          <li className={classes.accountLi} value='ACCOUNT DETAILS' onClick={() => handleClick('ACCOUNT DETAILS')}>ACCOUNT DETAILS</li>
          <li className={classes.accountLi} value='WISHLIST' onClick={() => handleClick('WISHLIST')}>WISHLIST</li>
          <li className={classes.accountLi} onClick={handleLogout}>
            LOGOUT
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountMenu;
