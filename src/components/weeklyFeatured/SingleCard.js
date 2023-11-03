import React from 'react'
import classes from './WeeklyFeatured.module.css'
import BagIcon from '../svgs/BagIcon'
import { useTranslation } from 'react-i18next'
import { ShoppingBag } from '../../pages/HomePage'
import { useContext } from 'react'

const SingleCard = ({ product }) => {
  const [myShoppingBag, setMyShoppingBag] = useContext(ShoppingBag)

  const { name, category, price, rating, imageUrl } = product

  const { t } = useTranslation()

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
    const bag = [...myShoppingBag]

    const findItem = bag.find((item) => item.name === product.name)

    if (myShoppingBag.length === 0) {
      bag.push(product)
      product.quantity++
    } else {
      if (findItem) {
        findItem.quantity++
      } else {
        bag.push(product)
        product.quantity++
      }
    }
    setMyShoppingBag(bag)
    localStorage.setItem('cart', JSON.stringify(bag));
  }
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
        <button
          className={classes.WeeklyFeaturedAddToCartButton}
          onClick={handleAddToCart}
        >
          <BagIcon fill="white" />
          <span className={classes.span}> {t('weeklyFeatured.add')}</span>
        </button>
      </div>
      <div className={classes.WeeklyFeaturedProductInfo}>
        <p className={classes.WeeklyFeaturedMakeup}>{category}</p>
        <p className={classes.WeeklyFeaturedText}>{name}</p>
        <p className={classes.WeeklyFeaturedText}>€{price}</p>
        <div className={classes.WeeklyFeaturedStarsContainer}>
          {renderStars()}
        </div>
      </div>
    </div>
  )
}

export default SingleCard
