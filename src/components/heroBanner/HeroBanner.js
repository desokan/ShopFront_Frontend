import React from 'react'
import classes from './HeroBanner.module.css'
import ArrowLeft from './svgs/ArrowLeft'
import ArrowRight from './svgs/ArrowRight'
import { useTranslation } from 'react-i18next'

const MainSlider = () => {
	const { t } = useTranslation();
	return (
		<div className={classes.heroBannerContainer}>
			<div className={classes.heroBannerArrowLeft}>
				<ArrowLeft />
			</div>
			<div className={classes.heroBannerTextContainer}>
				<h2 className={classes.heroBannerTextContainerH1}>{t("heroBanner.glow")}</h2>
				<p className={classes.heroBannerTextContainerP}>
					{t("heroBanner.bannerText")}
				</p>
				<button className={classes.heroBannerTextContainerButton}>
					{t("heroBanner.more")}
				</button>
			</div>

			<div className={classes.heroBannerArrowRight}>
				<ArrowRight />
			</div>
		</div>
	)
}

export default MainSlider
