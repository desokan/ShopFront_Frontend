/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import classes from "./Dashbord.module.css";
import React, { useState, useContext, useEffect } from "react";
import Orders from "./Orders";
import { DashbordNavigation } from "../../App";
import Addresses from "./Addresses";
import Account from "./Account";
import { useTranslation } from "react-i18next";
import Wishlist from "./Wishlist";
import { motion } from "framer-motion";

const DashboardComponent = () => {
  const { t } = useTranslation();
  let [isOpen, setisOpen] = useState(false);

  const navigate = useNavigate();
  const [dashbordNavigation, setDashbordNavigation] = useContext(
    DashbordNavigation
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || {})
  );

  const [title, setTitle] = useState(dashbordNavigation);
  const handleTitle = (newTitle) => {
    setTitle(newTitle);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  const rightContent = () => {
    if (title === t("dashboard.titles.orders")) {
      return <Orders />;
    } else if (title === t("dashboard.titles.addresses")) {
      return <Addresses />;
    } else if (title === t("dashboard.titles.accountDetails")) {
      return <Account />;
    } else if (title === t("dashboard.titles.wishlist")) {
      return <Wishlist />;
    } else {
      return (
        <div className={classes.rightSectionContainer}>
          <div className={classes.rightSectionTextContainer}>
            <p className={classes.userInfo}>
              {t("dashboard.main.hello")} <b>{user.username}</b>
            </p>
            <p>
              {t("dashboard.main.line1")}{" "}
              <span
                className={classes.span}
                onClick={() => setTitle(t("dashboard.titles.orders"))}
              >
                {t("dashboard.main.line2")}
              </span>
              {t("dashboard.main.line3")}{" "}
              <span
                className={classes.span}
                onClick={() => setTitle(t("dashboard.titles.addresses"))}
              >
                {t("dashboard.main.line4")}
              </span>
              {t("dashboard.main.line5")}{" "}
              <span
                className={classes.span}
                onClick={() => setTitle(t("dashboard.titles.accountDetails"))}
              >
                {t("dashboard.main.line6")}
              </span>
              .
            </p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.title}>{title}</h1>
        <div className={`${classes.container} ${classes.visibilityForMobile}`}>
          <button
            type="button"
            onClick={() => {
              setisOpen((prevState) => !prevState);
            }}
            className={
              isOpen
                ? `${classes.hamburger} ${classes.open}`
                : `${classes.hamburger}`
            }
          >
            <div id={classes.bar1} className={classes.bar}></div>
            <div id={classes.bar2} className={classes.bar}></div>
            <div id={classes.bar3} className={classes.bar}></div>
          </button>
        </div>
        <ul className={`${classes.ul} ${classes.visibilityForDeskTop}`}>
          <li
            className={classes.listItem}
            onClick={() => handleTitle(t("dashboard.titles.dashboard"))}
          >
            {t("dashboard.titles.dashboard")}
          </li>
          <li
            className={classes.listItem}
            onClick={() => handleTitle(t("dashboard.titles.orders"))}
          >
            {t("dashboard.titles.orders")}
          </li>
          <li
            className={classes.listItem}
            onClick={() => handleTitle(t("dashboard.titles.addresses"))}
          >
            {t("dashboard.titles.addresses")}
          </li>
          <li
            className={classes.listItem}
            onClick={() => handleTitle(t("dashboard.titles.accountDetails"))}
          >
            {t("dashboard.titles.accountDetails")}
          </li>
          <li
            className={classes.listItem}
            onClick={() => handleTitle(t("dashboard.titles.wishlist"))}
          >
            {t("dashboard.titles.wishlist")}
          </li>
          <li className={classes.listItem} onClick={handleLogout}>
            {t("dashboard.titles.logout")}
          </li>
        </ul>
        <motion.div
          className={`${classes.backDrop} ${classes.visibilityForMobile}  ${
            isOpen ? "active" : ""
          }`}
          initial={{ x: 500 }}
          animate={isOpen ? { x: 0 } : { x: 500 }}
          transition={{ duration: 0.8 }}
          onClick={() => {
            setisOpen(false);
          }}
        >
          {" "}
          <ul className={`${classes.ul} ${classes.mobileMenu}`}>
            <li
              className={classes.listItem}
              onClick={() => handleTitle(t("dashboard.titles.dashboard"))}
            >
              {t("dashboard.titles.dashboard")}
            </li>
            <li
              className={classes.listItem}
              onClick={() => handleTitle(t("dashboard.titles.orders"))}
            >
              {t("dashboard.titles.orders")}
            </li>
            <li
              className={classes.listItem}
              onClick={() => handleTitle(t("dashboard.titles.addresses"))}
            >
              {t("dashboard.titles.addresses")}
            </li>
            <li
              className={classes.listItem}
              onClick={() => handleTitle(t("dashboard.titles.accountDetails"))}
            >
              {t("dashboard.titles.accountDetails")}
            </li>
            <li
              className={classes.listItem}
              onClick={() => handleTitle(t("dashboard.titles.wishlist"))}
            >
              {t("dashboard.titles.wishlist")}
            </li>
            <li className={classes.listItem} onClick={handleLogout}>
              {t("dashboard.titles.logout")}
            </li>
          </ul>
        </motion.div>
      </div>
      <div
        className={
          title === "WISHLIST" ? `${classes.overflowX}` : `${classes.right}`
        }
      >
        {rightContent()}
      </div>
    </div>
  );
};

export default DashboardComponent;
