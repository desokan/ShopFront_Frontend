import React from 'react';
import classes from './MostPreferred.module.css';
import SingleCardMostPreferred from './SingleCardMostPreferred';

const MostPreferred = () => {
  const makeupCategories = [
    {
      id: 1,
      name: "Foundation",
      image: 'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30031_FB020.jpg?v=1623427028'
    },
    {
      id: 2,
      name: "Lipstick",
      image: 'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_POSTHOL22_T2PRODUCT_CONCRETE_FENTY_ICON_VELVET_LIQUID_LIP_OPEN_MVP_1200x1500_ea016da9-a316-4f2b-8afd-9d822277a907.jpg?v=1669934439'
    },
    {
      id: 3,
      name: "Mascara",
      image: 'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/54548.jpg?v=1674248158'
    },
    {
      id: 4,
      name: "Skincare",
      image: 'https://cdn.shopify.com/s/files/1/0341/3458/9485/files/FS_SUMR23_T2-PRODUCT_SILO_CHERRYDUB-BODYSCRUB_1200x1500_47ddf686-8f30-48d9-bf46-9b6ed63a8cdd.jpg?v=1687302603'
    }
  ];

  return (
    <div className={classes.MostPreferredContainer}>
      <div className={classes.MostPreferredTitleContainer}>
        <div className={classes.MostPreferredTitle}>
          <h2 className={classes.MostPreferredTitleH2}>
            MOST PREFERRED CATEGORIES
          </h2>
          <p className={classes.MostPreferredTitleP}>
            The World's Premium Brands In One Destination.
          </p>
        </div>
      </div>
      <div className={classes.MostPreferredCards}>
        {makeupCategories.map((category) => (
          <SingleCardMostPreferred key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MostPreferred;
