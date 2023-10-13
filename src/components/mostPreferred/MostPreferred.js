import React from 'react';
import classes from './MostPreferred.module.css';
import SingleCardMostPreferred from './SingleCardMostPreferred';
import { useTranslation } from 'react-i18next'

const MostPreferred = () => {
  const { t } = useTranslation();
  const productCategories = t('preferredSingleCard.subCategory', { returnObjects: true })

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
        {productCategories.map((category) => (
          <SingleCardMostPreferred key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MostPreferred;
