import classes from './WeeklyFeatured.module.css'
import { useTranslation } from 'react-i18next'
import Carousel from './Carousel'


const WeeklyFeatured = () => {
	const { t } = useTranslation();
  const products = t('recentlyViewed.products', { returnObjects: true })
	return (
		<div className={classes.WeeklyFeaturedContainer}>
			<div className={classes.WeeklyFeaturedTitle}>
				<h3 className={classes.WeeklyFeaturedTitleH3}>
					{t("weeklyFeatured.products")}
				</h3>
				<p className={classes.WeeklyFeaturedTitleP}>
				{t("weeklyFeatured.premiumTitle")}
				</p>
			</div>
			<div className={classes.WeeklyFeaturedCards}>
     
        <Carousel
          products={products}
        />
    
			</div>
		</div>
	)
}

export default WeeklyFeatured;
