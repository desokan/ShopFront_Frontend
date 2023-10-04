import classes from './RecentlyViewed.module.css'
import ArrowLeft from '../heroBanner/svgs/ArrowLeft'
import SingleCardRecentlyViewed from './SingleCardRecentlyViewed'
import ArrowRight from '../heroBanner/svgs/ArrowRight'

const RecentlyViewed = () => {
	return (
		<div className={classes.RecentlyViewedContainer}>
			<div className={classes.RecentlyViewedArrowLeft}>
				<ArrowLeft width="80px" height="80px" fill="none" />
			</div>
			<div className={classes.RecentlyViewedTitle}>
				<h3 className={classes.RecentlyViewedTitleH3}>
					RECENTLY VIEWED 
				</h3>
				<p className={classes.RecentlyViewedTitleP}>
					Are you still interested in these products?
				</p>
			</div>
			<div className={classes.RecentlyViewedCards}> 
				<SingleCardRecentlyViewed />
				<SingleCardRecentlyViewed />
				<SingleCardRecentlyViewed />
				<SingleCardRecentlyViewed />
			</div>
			<div className={classes.RecentlyViewedArrowRight}>
				<ArrowRight width="80px" height="80px" fill="none" />
			</div>
		</div>
	)
}

export default RecentlyViewed
