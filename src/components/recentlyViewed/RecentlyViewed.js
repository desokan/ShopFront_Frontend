import classes from './RecentlyViewed.module.css'
import { useTranslation } from 'react-i18next'
import Carousel from '../weeklyFeatured/Carousel'

const RecentlyViewed = () => {
	const { t } = useTranslation();
	return (
		<div className={classes.RecentlyViewedContainer}>
			<div className={classes.RecentlyViewedTitle}>
				<h3 className={classes.RecentlyViewedTitleH3}>
					{t("recentlyViewed.recentlyViewed")} 
				</h3>
				<p className={classes.RecentlyViewedTitleP}>
					{t("recentlyViewed.stillInterested")}
				</p>
			</div>
			<Carousel products={t("recentlyViewed.products")}/>
		</div>
	)
}

export default RecentlyViewed
