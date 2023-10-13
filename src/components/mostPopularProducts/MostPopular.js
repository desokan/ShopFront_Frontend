import React from 'react'
import classes from './MostPopular.module.css'
import SingleCardMostPopular from './SingleCardMostPopular'
import Carousel from './Carousel'
import { useTranslation } from 'react-i18next'

const MostPopular = () => {
	const { t } = useTranslation()
	const productCategories = t('mostPopular.tabs', {
		returnObjects: true,
	})

	const products = t('recentlyViewed.products', {
		returnObjects: true,
	})

	console.log(productCategories)

	return (
		<div className={classes.MostPopularContainer}>
			<div className={classes.MostPopularTitleContainer}>
				<div className={classes.MostPopularTitle}>
					<h2 className={classes.MostPopularTitleH2}>
						{t('mostPopular.title')}
					</h2>
					<p className={classes.MostPopularTitleP}>
						{t('mostPopular.subTitle')}
					</p>
				</div>
			</div>
			<div className={classes.MostPopularCards}>
				<Carousel products={products} />
			</div>
		</div>
	)
}

export default MostPopular
