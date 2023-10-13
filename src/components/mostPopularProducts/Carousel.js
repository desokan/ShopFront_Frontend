import React, { useState } from 'react'
import MostPopularSingleCard from './SingleCardMostPopular'
import classes from './Carousel.module.css'
import ArrowLeft from '../heroBanner/svgs/ArrowLeft'
import ArrowRight from '../heroBanner/svgs/ArrowRight'

const Carousel = ({ products }) => {
	const [startIndex, setStartIndex] = useState(0)
	const cardsPerPage = 4
	const totalProducts = products.length

  
	const nextSlide = () => {
		setStartIndex((startIndex + 1) % totalProducts)
	}

	const prevSlide = () => {
		setStartIndex((startIndex - 1 + totalProducts) % totalProducts)
	}

	const visibleProducts = products.slice(startIndex, startIndex + cardsPerPage)

	// Duplicate the first few products to the end to create the illusion of an infinite carousel.
	if (visibleProducts.length < cardsPerPage) {
		const remaining = cardsPerPage - visibleProducts.length
		visibleProducts.push(...products.slice(0, remaining))
	}

	return (
		<div className={classes.carousel}>
			<div className={classes.arrowLeft} onClick={prevSlide}>
				<ArrowLeft width="80px" height="80px" fill="none" />
			</div>
			<div className={classes.cardContainer}>
        {visibleProducts.map((product, index) => (
          console.log(product),
					<MostPopularSingleCard key={index} product={product} />
				))}
			</div>
			<div className={classes.arrowRight} onClick={nextSlide}>
				<ArrowRight width="80px" height="80px" fill="none" />
			</div>
		</div>
	)
}

export default Carousel
