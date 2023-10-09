import classes from './PreferredMost.module.css'
import SingularCardPreferredMost from './SingularCardPreferredMost'

const PreferredMost = () => {
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
				<SingularCardPreferredMost />
				<SingularCardPreferredMost />
				<SingularCardPreferredMost />
				<SingularCardPreferredMost />
			</div>
		</div>
	)
}
export default PreferredMost