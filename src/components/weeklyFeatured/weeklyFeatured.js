import classes from "./WeeklyFeatured.module.css";
import ArrowLeft from "../heroBanner/svgs/ArrowLeft";
import ArrowRight from "../heroBanner/svgs/ArrowRight";
import Image4 from "./images/image4.png";

const WeeklyFeatured = () => {
  return (
    <div className={classes.WeeklyFeaturedContainer}>
      <div className={classes.WeeklyFeaturedTitle}>
        <h3 className={classes.WeeklyFeaturedTitleH3}>
          WEEKLY FEATURED PRODUCTS
        </h3>
        <p className={classes.WeeklyFeaturedTitleP}>
          The World's Premium Brands In One Destination.
        </p>
      </div>
      <div className={classes.WeeklyFeaturedCards}>
        <div className={classes.WeeklyFeaturedSingleCard}>
          <div className={classes.WeeklyFeaturedImageContainer}>
            <img
              className={classes.WeeklyFeaturedImage}
              src={Image4}
              alt="image4"
            />
          </div>
          <div className={classes.WeeklyFeaturedProductInfo}>
            <p className={classes.WeeklyFeaturedMakeup}>Makeup</p>
            <p className={classes.WeeklyFeaturedText}>
              RADIANT LIFT FOUNDATION
            </p>
            <p className={classes.WeeklyFeaturedText}>$29</p>
            <p>
              <span className={classes.WeeklyFeaturedStars}>
                {" "}
                &#x2606; &#x2606; &#x2606; &#x2606; &#x2606;
              </span>
            </p>
          </div>
        </div>
        <div className={classes.WeeklyFeaturedSingleCard}>
          <div className={classes.WeeklyFeaturedImageContainer}>
            <img
              className={classes.WeeklyFeaturedImage}
              src={Image4}
              alt="image4"
            />
          </div>
          <div className={classes.WeeklyFeaturedProductInfo}>
            <p className={classes.WeeklyFeaturedMakeup}>Makeup</p>
            <p className={classes.WeeklyFeaturedText}>
              RADIANT LIFT FOUNDATION
            </p>
            <p className={classes.WeeklyFeaturedText}>$29</p>
            <p>
              <span className={classes.WeeklyFeaturedStars}>
                {" "}
                &#x2606; &#x2606; &#x2606; &#x2606; &#x2606;
              </span>
            </p>
          </div>
        </div>
        <div className={classes.WeeklyFeaturedSingleCard}>
          <div className={classes.WeeklyFeaturedImageContainer}>
            <img
              className={classes.WeeklyFeaturedImage}
              src={Image4}
              alt="image4"
            />
          </div>
          <div className={classes.WeeklyFeaturedProductInfo}>
            <p className={classes.WeeklyFeaturedMakeup}>Makeup</p>
            <p className={classes.WeeklyFeaturedText}>
              RADIANT LIFT FOUNDATION
            </p>
            <p className={classes.WeeklyFeaturedText}>$29</p>
            <p>
              <span className={classes.WeeklyFeaturedStars}>
                {" "}
                &#x2606; &#x2606; &#x2606; &#x2606; &#x2606;
              </span>
            </p>
          </div>
        </div>
        <div className={classes.WeeklyFeaturedSingleCard}>
          <div className={classes.WeeklyFeaturedImageContainer}>
            <img
              className={classes.WeeklyFeaturedImage}
              src={Image4}
              alt="image4"
            />
          </div>
          <div className={classes.WeeklyFeaturedProductInfo}>
            <p className={classes.WeeklyFeaturedMakeup}>Makeup</p>
            <p className={classes.WeeklyFeaturedText}>
              RADIANT LIFT FOUNDATION
            </p>
            <p className={classes.WeeklyFeaturedText}>$29</p>
            <p>
              <span className={classes.WeeklyFeaturedStars}>
                {" "}
                &#x2606; &#x2606; &#x2606; &#x2606; &#x2606;
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.WeeklyFeaturedArrowLeft}>
        <ArrowLeft />
      </div>
      <div className={classes.WeeklyFeaturedArrowRight}>
        <ArrowRight />
      </div>
    </div>
  );
};

export default WeeklyFeatured;
