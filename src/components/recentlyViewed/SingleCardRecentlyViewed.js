import React, { useState } from 'react'
import classes from './RecentlyViewed.module.css'
import Image4 from './images/image4.png'
import BagIcon from '../svgs/BagIcon'
import { useTranslation } from 'react-i18next'

const SingleCardRecentViewed = () => {
	const { t } = useTranslation();
	const [productRating, setProductRating] = useState(0)

	const handleStarClick = (starIndex) => {
		setProductRating(starIndex)
	}

	const renderStars = () => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<span
					key={i}
					className={`${classes.ProductRatingStar} ${
						i <= productRating ? classes.ProductRatingStarFilled : ''
					}`}
					onClick={() => handleStarClick(i)}
				>
					{i <= productRating ? '★' : '☆'}
				</span>
			)
		}
		return stars
	}

	return (
		<div className={classes.RecentlyViewedSingleCard}>
			<div className={classes.RecentlyViewedImageContainer}>
				<img
					className={classes.RecentlyViewedImage}
					src={Image4}
					alt="image4"
				/>
			</div>
			<div className={classes.RecentlyViewedAddToCartButtonContainer}>
				<button className={classes.RecentlyViewedAddToCartButton}>
					<BagIcon fill="white" />
					{t("recentsSingleCard.add")}
				</button>
			</div>
			<div className={classes.RecentlyViewedProductInfo}>
				<p className={classes.RecentlyViewedMakeup}>{t("recentsSingleCard.makeup")}</p>
				<p className={classes.RecentlyViewedText}>{t("recentsSingleCard.detail")}</p>
				<p className={classes.RecentlyViewedText}>$29</p>
				<div className={classes.RecentlyViewedStarsContainer}>
					{renderStars()}
				</div>
			</div>
		</div>
	)
}

export default SingleCardRecentViewed
