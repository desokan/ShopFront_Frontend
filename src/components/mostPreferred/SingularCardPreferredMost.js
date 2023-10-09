import classes from './PreferredMost.module.css'
import image from './images/image4.png'

const SingularCardPreferredMost = ()=>{
    return (
        <div className={classes.MostPreferredSingleCard}>
            <img className={classes.MostPreferredSingleCardImage} src={image} alt='lipstick'/>
            <p className={classes.MostPreferredSingleCardP}>lipstick</p>
        </div>
    )
}

export default SingularCardPreferredMost