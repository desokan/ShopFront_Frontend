import classes from './mostPreferred.module.css'
import SingleCardMostPreferres from './singleCardMostPreferred'

const MostPreferred = () => {
	return (
		<div className={classes.MostPreferredContainer}>
			<div className={classes.MostPreferredTitleContainer}>
				<div className={classes.MostPreferredTitle}>
					<h2 className={classes.MostPreferredTitleH2}>
						{' '}
						MOST PREFERRED CATEGORIES
					</h2>
					<p className={classes.MostPreferredTitleP}>
						The World's Premium Brands In One Destination.
					</p>
				</div>
			</div>
			<div className={classes.MostPreferredCards}>
				<SingleCardMostPreferres />
				<SingleCardMostPreferres />
				<SingleCardMostPreferres />
				<SingleCardMostPreferres />
			</div>
		</div>
	)
}
export default MostPreferred
