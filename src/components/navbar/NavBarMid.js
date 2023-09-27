import classes from "./NavBarMid.module.css";
import LogoSvg from "../svgs/LogoSvg";
const NavBarMid = () =>{
    return(
        <div className={classes.container}>
           <LogoSvg fontColor={'#222222'}/>
           <div className={classes.searchBar}>
            
           </div>

        </div>
    )
}
export default NavBarMid