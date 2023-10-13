import React from 'react'
import classes from './HeroBanner.module.css'
import ArrowLeft from './svgs/ArrowLeft'
import ArrowRight from './svgs/ArrowRight'
import { useTranslation } from 'react-i18next'

import Carousel from './Carousel'

const MainSlider = () => {
	const { t } = useTranslation();
	const banners = t('heroBanner.banners', { returnObjects: true })
	return (
		
		<Carousel  banner={banners}/>
		
	)
}

export default MainSlider
