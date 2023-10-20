import classes from "./Backdrop.module.css";
import { motion } from "framer-motion";

const BackDrop = () => {
  return (
    <motion.div className={classes.backDrop}
    initial={{ x: 1000 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.8 }}
    ></motion.div>
  );
};

export default BackDrop;
