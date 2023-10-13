import React from 'react';
import classes from './MostPreferred.module.css';

const SingleCardMostPreferred = ({ category }) => {
  return (
    <div className={classes.MostPreferredSingleCard}>
      <img className={classes.MostPreferredSingleCardImage} src={category.image} alt={category.name} />
      <p className={classes.MostPreferredSingleCardP}>{category.name}</p>
    </div>
  );
};

export default SingleCardMostPreferred;
