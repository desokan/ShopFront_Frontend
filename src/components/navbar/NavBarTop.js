import classes from './NavBarTop.module.css'

const NavBarTop = () => {
    return (
        <>
            <div className={classes.NavBarTopContainer}>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <p>Language <span>^</span> </p>
                <div className={classes.languages}>
                    <p>English</p>
                    <p>French</p>
                </div>
                <p>Currency</p>
                <div className={classes.currencies}>
                    <p id='pound'>£</p>
                    <p id='dollar'>$</p>
                    <p id='euro'>€</p>
                </div>
            </div>
        </>
    )
}

export default NavBarTop