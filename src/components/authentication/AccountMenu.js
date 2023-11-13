import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../svgs/CloseIcon";
import classes from './Account.module.css'
import { DashbordNavigation } from "../../App";
import { useTranslation } from "react-i18next";

const AccountMenu = ({ closeLogin, openRegister, user }) => {
  const { t } = useTranslation();
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
          <b>{t("account.welcome")}, {user.username.toUpperCase()}</b>
        </p>
        <button className={classes.closeAccount} onClick={handleCloseAccount}>
          <CloseIcon />
        </button>
      </div>
      <div className={classes.accountContainer}>
        <ul className={classes.accountUL}>
          <li className={classes.accountLi} onClick={() => handleClick(t("account.dashboard"))}>{t("account.dashboard")}</li>
          <li className={classes.accountLi} onClick={() => handleClick(t("account.orders"))}>{t("account.orders")}</li>
          <li className={classes.accountLi} onClick={() => handleClick(t("account.accountDetails"))}>{t("account.accountDetails")}</li>
          <li className={classes.accountLi} onClick={() => handleClick(t("account.wishlist"))}>{t("account.wishlist")}</li>
          <li className={classes.accountLi} onClick={handleLogout}>
          {t("account.logout")}
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountMenu;
