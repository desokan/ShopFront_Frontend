import React, { useState } from 'react'
import SingleCard from './SingleCard'
import classes from './Carousel.module.css'
import ArrowLeft from '../heroBanner/svgs/ArrowLeft'
import ArrowRight from '../heroBanner/svgs/ArrowRight'

const Carousel = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0)
  let cardsPerPage = 0

  if (window.innerWidth > 1900) {
    cardsPerPage = 5
  } else if (window.innerWidth > 1192) {
    cardsPerPage = 4
  } else if (window.innerWidth > 768) {
    cardsPerPage = 3
  } else if (window.innerWidth > 576) {
    cardsPerPage = 2
  } else {
    cardsPerPage = 1
  }

  const totalProducts = products.length

  const nextSlide = () => {
    setStartIndex((startIndex + 1) % totalProducts)
  }

  const prevSlide = () => {
    setStartIndex((startIndex - 1 + totalProducts) % totalProducts)
  }

  const visibleProducts = products.slice(startIndex, startIndex + cardsPerPage)

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
          <SingleCard key={index} product={product} />
        ))}
      </div>
      <div className={classes.arrowRight} onClick={nextSlide}>
        <ArrowRight width="80px" height="80px" fill="none" />
      </div>
    </div>
  )
}

export default Carousel
