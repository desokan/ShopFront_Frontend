import classes from "./NavBarMid.module.css";
import LogoSvg from "../svgs/LogoSvg";
import SearchIcon from "../svgs/SearchIcon";
import HeartIcon from "../svgs/HeartIcon";
import UserIcon from "../svgs/UserIcon";
import BagIcon from "../svgs/BagIcon";
import Login from "../authentication/Login";

const NavBarMid = () => {

  const handleLogin = () => {

  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <LogoSvg fontColor={'#222222'}/>
        <div className={classes.searchBar}>
          <div>
            <SearchIcon />
          </div>
        </div>
        <div className={classes.icons}>
          <HeartIcon />
          <UserIcon onClick={handleLogin}/>
          <BagIcon />
        </div>
      </div>
    </div>
  );
};
export default NavBarMid;
