import React from 'react'
import classes from './WeeklyFeatured.module.css'
import BagIcon from '../svgs/BagIcon'
import { useTranslation } from 'react-i18next'

const SingleCard = ({ product }) => {
  const { name, category, price, rating, imageUrl } = product
  const { t } = useTranslation();
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${classes.ProductRatingStar} ${
            i <= rating ? classes.ProductRatingStarFilled : ''
          }`}
        >
          {i <= rating ? '★' : '☆'}
        </span>
      )
    }
    return stars
  }
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    existingCart.push(product);

    localStorage.setItem('cart', JSON.stringify(existingCart));
  };
  return (
    <div className={classes.WeeklyFeaturedSingleCard}>
      <div className={classes.WeeklyFeaturedImageContainer}>
        <img
          className={classes.WeeklyFeaturedImage}
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className={classes.WeeklyFeaturedAddToCartButtonContainer}>
        <button className={classes.WeeklyFeaturedAddToCartButton} onClick={handleAddToCart}>
          <BagIcon fill="white" />
         <span  className={classes.span}> {t("weeklyFeatured.add")}</span>
        </button>
      </div>
      <div className={classes.WeeklyFeaturedProductInfo}>
        <p className={classes.WeeklyFeaturedMakeup}>{category}</p>
        <p className={classes.WeeklyFeaturedText}>{name}</p>
        <p className={classes.WeeklyFeaturedText}>${price}</p>
        <div className={classes.WeeklyFeaturedStarsContainer}>
          {renderStars()}
        </div>
      </div>
    </div>
  )
}

export default SingleCard
