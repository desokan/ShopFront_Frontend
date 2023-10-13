import React, { useState } from 'react';
import classes from './MostPopular.module.css';
import SingleCardMostPopular from './SingleCardMostPopular';
import Carousel from './Carousel';
import { useTranslation } from 'react-i18next';

const MostPopular = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('ALL');
  const productCategories = t('mostPopular.tabs', {
    returnObjects: true,
  });

  const products = t('mostPopular.products', {
    returnObjects: true,
  });

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className={classes.MostPopularContainer}>
      <div className={classes.MostPopularTitleContainer}>
        <div className={classes.MostPopularTitle}>
          <h2 className={classes.MostPopularTitleH3}>
            {t('mostPopular.title')}
          </h2>
          <p className={classes.MostPopularTitleP}>
            {t('mostPopular.subTitle')}
          </p>
        </div>
      </div>
      <div>
        <ul>
          {productCategories.map((category, index) => (
            <li
              className={`${classes.tab} ${selectedTab === category.tabName ? classes.active : ''}`}
              key={index}
              onClick={() => handleTabClick(category.tabName)}
            >
              {category.tabName}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.MostPopularCards}>
        <Carousel products={products.filter(product => selectedTab === 'ALL' || product.mainCategory === selectedTab)} />
      </div>
    </div>
  );
}

export default MostPopular;
