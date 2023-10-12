import classes from './MostPreferred.module.css'
import image from './images/image4.png'
import { useTranslation } from 'react-i18next'
const SingleCardMostPreferres = ()=>{
    const { t } = useTranslation();
    return (
        <div className={classes.MostPreferredSingleCard}>
            <img className={classes.MostPreferredSingleCardImage} src={image} alt='lipstick'/>
            <p className={classes.MostPreferredSingleCardP}>{t("preferredSingleCard.lipstick")}</p>
        </div>
    )
}
export default SingleCardMostPreferres
