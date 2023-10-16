import React, { useState, useEffect } from 'react';
import classes from './MostPopular.module.css';
import Carousel from './Carousel';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

const MostPopular = () => {
	const { t } = useTranslation();
  
	const [selectedTab, setSelectedTab] = useState('');
  
	useEffect(() => {
	  if (i18n.language === 'it') {
		setSelectedTab("TUTTI");
	  } else if (i18n.language === "fr") {
		setSelectedTab("TOUS");
	  } else {
		setSelectedTab("ALL");
	  }
	}, []);
  
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
        <ul className={classes.MostPopularUl}>
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
        <Carousel
          products={products.filter(product => selectedTab === 'ALL' || selectedTab === 'TUTTI' || selectedTab === 'TOUS' || product.mainCategory === selectedTab)}
        />
      </div>
    </div>
  );
}

export default MostPopular;
