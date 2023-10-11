import classes from './WeeklyFeatured.module.css'
import ArrowLeft from '../heroBanner/svgs/ArrowLeft'
import SingleCard from './SingleCard'
import ArrowRight from '../heroBanner/svgs/ArrowRight'

const WeeklyFeaturedd = () => {
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
      <div className={classes.WeeklyFeaturedArrowRight}>
        <ArrowRight width='80px' height='80px' fill='none' />
      </div>
    </div>
  )
}


export default WeeklyFeaturedd
