import classes from "./Login.module.css";
import { useState, useEffect } from "react";
import BackDrop from "../util/Backdrop";
import { motion } from "framer-motion";
import Login from "./Login";
import AccountMenu from "./AccountMenu";

const Container = ({ closeLogin, openRegister }) => {
  const [loggedIn, setLoggedIn] = useState("");
  let token = localStorage.getItem("token");

  const userForParse = localStorage.getItem('user')
  const user = JSON.parse(userForParse)

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <BackDrop />
      <motion.div
        className={classes.loginBox}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {!loggedIn && (
          <Login closeLogin={closeLogin} openRegister={openRegister} />
        )}
        {loggedIn && <AccountMenu closeLogin={closeLogin} openRegister={openRegister} user={user}/>}
      </motion.div>
    </div>
  );
};

export default Container;
