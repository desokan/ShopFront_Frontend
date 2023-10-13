import React from 'react';
import classes from './WeeklyFeatured.module.css';
import ArrowLeft from '../heroBanner/svgs/ArrowLeft';
import SingleCard from './SingleCard';
import ArrowRight from '../heroBanner/svgs/ArrowRight';
import Carousel from './Carousel';


const WeeklyFeaturedd = () => {
  const dummyData = [
    {
      id: 1,
      name: "RADIANT LIFT FOUNDATION",
      category: "Makeup",
      price: 29,
      rating: 4,
      image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWNkp2TW0CW1GYOZy1GU7dismoiEJ-xgTFK9E6WM7FbpAiYEUwraCq5uph7_uKbLVMFvncd0K9Vngn2Rd8hAccTcD-uxprYfy-ovobHf2-&usqp=CAc'
    },
    {
      id: 2,
      name: "MOISTURIZING SKIN CREAM",
      category: "Skincare",
      price: 35,
      rating: 5,
      image:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/47137.jpg?v=1614390686'
    },
    {
      id: 3,
      name: "EYE ENHANCING MASCARA",
      category: "Makeup",
      price: 15,
      rating: 3,
      image:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30029_FB3019.jpg?v=1623353290'
    },
    {
      id: 4,
      name: "HYDRATING FACIAL CLEANSER",
      category: "Skincare",
      price: 20,
      rating: 4,
      image:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_POSTHOL2021_T2PRODUCT_CONCRETE_LIQUID_KILLAWATT_OPEN_HONEYHAWTIE_1200x1500_9c0beef5-fde6-4059-b50d-162806cc7192.jpg?v=1647985851'
    },
    {
      id: 5,
      name: "HYDRATING FACIAL CLEANSER",
      category: "Skincare",
      price: 20,
      rating: 4,
      image:'https://cdn.shopify.com/s/files/1/0341/3458/9485/files/FB_F23_T2PRODUCT_ECOMM_MATCH_STIX_COLOR-ADAPTIVE_OPEN_1200X1500_72DPI.jpg?v=1696626222'
    },
    {
      id: 6,
      name: "HYDRATING FACIAL CLEANSER",
      category: "Skincare",
      price: 20,
      rating: 4,
      image:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB80005_FB8034.jpg?v=1618440189'
    },
  ];
  return (
    <div className={classes.WeeklyFeaturedContainer}>
      <div className={classes.WeeklyFeaturedTitle}>
        <h3 className={classes.WeeklyFeaturedTitleH3}>WEEKLY FEATURED PRODUCTS</h3>
        <p className={classes.WeeklyFeaturedTitleP}>
          The World's Premium Brands In One Destination.
        </p>
      </div>
      <div className={classes.WeeklyFeaturedCards}>
      <Carousel products={dummyData} />
      </div>
    </div>
  );
}

export default WeeklyFeaturedd;
