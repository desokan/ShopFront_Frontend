import React from 'react'
import classes from "./HeroBanner.module.css";
import ArrowLeft from './svgs/ArrowLeft';
import ArrowRight from './svgs/ArrowRight';


const MainSlider = () => {
	return (
		<div className={classes.heroBannerContainer}>
      <div className={classes.heroBannerTextContainer}>
       <h2 className={classes.heroBannerTextContainerH1}>NATURAL GLOW</h2>
       <p className={classes.heroBannerTextContainerP}>Beaux products protect, moisturize, and lubricate your skin. It smartly nourish your skin with lotions, day creams, night creams, tinted moisturizers, and more.</p>
      <button className={classes.heroBannerTextContainerButton}>VIEW MORE</button>
      </div>
      <div className={classes.heroBannerArrowLeft}><ArrowLeft/></div>
      <div className={classes.heroBannerArrowRight}><ArrowRight/></div>
    </div>
	)
}

export default MainSlider
