import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackDrop from "../util/Backdrop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CloseIcon from "../svgs/CloseIcon";
import classes from './Account.module.css'

const AccountMenu = ({ closeLogin, openRegister, user }) => {
  const handleCloseAccount = () => {
    closeLogin(false);
  };

  const handleLogout = () => {
    handleCloseAccount()
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

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
        <h1 className={classes.accountH1}>ACCOUNT DETAILS</h1>
        <ul className={classes.accountUL}>
          <li className={classes.accountLi}>DASHBORD</li>
          <li className={classes.accountLi}>ORDERS</li>
          <li className={classes.accountLi}>SETTINGS</li>
          <li className={classes.accountLi}>WISHLIST</li>
          <li className={classes.accountLi} onClick={handleLogout} >
            LOGOUT
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountMenu;
