import React, { useState } from 'react';
import classes from './WeeklyFeatured.module.css'
import Image4 from './images/image4.png'
import BagIcon from '../svgs/BagIcon'

const SingleCard = () => {
  const [productRating, setProductRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setProductRating(starIndex);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${classes.ProductRatingStar} ${i <= productRating ? classes.ProductRatingStarFilled : ''}`}
          onClick={() => handleStarClick(i)}
        >
          {i <= productRating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={classes.WeeklyFeaturedSingleCard}>
          <div className={classes.WeeklyFeaturedImageContainer}>
            <img
              className={classes.WeeklyFeaturedImage}
              src={Image4}
              alt="image4"
            />
          </div>
          <div className={classes.WeeklyFeaturedAddToCartButtonContainer}>
            <button className={classes.WeeklyFeaturedAddToCartButton}>
              <BagIcon fill="white" />
              ADD TO CART
            </button>
          </div>
          <div className={classes.WeeklyFeaturedProductInfo}>
            <p className={classes.WeeklyFeaturedMakeup}>Makeup</p>
            <p className={classes.WeeklyFeaturedText}>
              RADIANT LIFT FOUNDATION
            </p>
            <p className={classes.WeeklyFeaturedText}>$29</p>
            <div className={classes.WeeklyFeaturedStarsContainer}>
          {renderStars()}
        </div>
          </div>
        </div>
  );
};

export default SingleCard;