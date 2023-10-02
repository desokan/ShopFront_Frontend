import classes from './WeeklyFeatured.module.css'
import ArrowLeft from '../heroBanner/svgs/ArrowLeft'
import ArrowRight from '../heroBanner/svgs/ArrowRight'
import BagIcon from '../svgs/BagIcon'
import Image4 from './images/image4.png'
import React, { useState } from 'react';
import SingleCard from './SingleCard'

const WeeklyFeatured = () => {
  return (
    <div className={classes.WeeklyFeaturedContainer}>
      <div className={classes.WeeklyFeaturedArrowLeft}>
        <ArrowLeft width='80px' height='80px' fill='none' />
      </div>
      <div className={classes.WeeklyFeaturedTitle}>
        <h3 className={classes.WeeklyFeaturedTitleH3}>
          WEEKLY FEATURED PRODUCTS
        </h3>
        <p className={classes.WeeklyFeaturedTitleP}>
          The World's Premium Brands In One Destination.
        </p>
      </div>
      <div className={classes.WeeklyFeaturedCards}>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
      </div>
    </div>
  )
}


export default WeeklyFeatured
