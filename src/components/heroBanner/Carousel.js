import React, { useState } from 'react';
import classes from './CarouselBanner.module.css'
import ArrowLeft from '../heroBanner/svgs/ArrowLeft';
import ArrowRight from '../heroBanner/svgs/ArrowRight';
import SingleBanner from './SingleBanner';

const Carousel = ({ banner }) => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 1;
  const totalProducts = banner.length;

  const nextSlide = () => {
    setStartIndex((startIndex + 1) % totalProducts);
  };

  const prevSlide = () => {
    setStartIndex((startIndex - 1 + totalProducts) % totalProducts);
  };

  const visibleProducts = banner.slice(startIndex, startIndex + cardsPerPage);

  // Duplicate the first few products to the end to create the illusion of an infinite carousel.
  if (visibleProducts.length < cardsPerPage) {
    const remaining = cardsPerPage - visibleProducts.length;
    visibleProducts.push(...banner.slice(0, remaining));
  }

  return (
    <div className={classes.carousel}>
      <div className={classes.arrowLeft} onClick={prevSlide}>
        <ArrowLeft width="45px" height="45px"  />
      </div>
      <div className={classes.cardContainer}>
        {visibleProducts.map((banner, index) => (
          <SingleBanner key={index} banner={banner} />
        ))}
      </div>
      <div className={classes.arrowRight} onClick={nextSlide}>
        <ArrowRight width="45px" height="45px"  />
      </div>
    </div>
  );
};

export default Carousel;