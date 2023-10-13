import React from 'react'
import classes from './MostPopular.module.css'
import BagIcon from '../svgs/BagIcon'

const MostPopularSingleCard = ({ product }) => {
  const { name, category, price, rating, imageUrl } = product

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

  return (
    <div className={classes.MostPopularSingleCard}>
      <div className={classes.MostPopularImageContainer}>
        <img className={classes.MostPopularImage} src={imageUrl} alt={name} />
      </div>
      <div className={classes.MostPopularAddToCartButtonContainer}>
        <button className={classes.MostPopularAddToCartButton}>
          <BagIcon fill="white" />
          ADD TO CART
        </button>
      </div>
      <div className={classes.MostPopularProductInfo}>
        <p className={classes.MostPopularMakeup}>{category}</p>
        <p className={classes.MostPopularText}>{name}</p>
        <p className={classes.MostPopularText}>${price}</p>
        <div className={classes.MostPopularStarsContainer}>{renderStars()}</div>
      </div>
    </div>
  )
}

export default MostPopularSingleCard
