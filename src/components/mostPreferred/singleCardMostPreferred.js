import classes from './mostPreferred.module.css'
import image from './images/image4.png'
const SingleCardMostPreferres = ()=>{
    return (
        <div className={classes.MostPreferredSingleCard}>
            <img className={classes.MostPreferredSingleCardImage} src={image} alt='lipstick'/>
            <p className={classes.MostPreferredSingleCardP}>lipstick</p>
        </div>
    )
}
export default SingleCardMostPreferres