import classes from './MostPreferred.module.css'
import SingleCardMostPreferres from './SingleCardMostPreferred'
const MostPreferred = () =>{
    return (
        <div className={classes.MostPreferredContainer}>
            <div className={classes.MostPreferredTitleContainer}>
                <h2 className={classes.MostPreferredTitleH2}> MOST PREFERRED CATEGORIES</h2>
                <p className={classes.MostPreferredTitleP}>The World's Premium Brands In One Destination.</p>
            </div>
            <div className={classes.MostPreferredCards}>
                <SingleCardMostPreferres/>
                <SingleCardMostPreferres/>
                <SingleCardMostPreferres/>
                <SingleCardMostPreferres/>
            </div>
        </div>
    )
}
export default MostPreferred