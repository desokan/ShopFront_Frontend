import React from 'react';
import classes from './HeroBanner.module.css';
const SingleBanner = ({banner}) =>{
    const { glow, bannerText, more, imageUrl } = banner;
    return (
        <div className={classes.heroBannerContainer} style={{backgroundImage:`url(${imageUrl})`}}>
			<div className={classes.heroBannerTextContainer}>
				<h2 className={classes.heroBannerTextContainerH1}>{glow}</h2>
				<p className={classes.heroBannerTextContainerP}>
					{bannerText}
				</p>
				<button className={classes.heroBannerTextContainerButton}>
					{more}
				</button>
			</div>
		</div>
    )
}
export default SingleBanner