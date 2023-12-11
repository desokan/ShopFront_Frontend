import React from 'react'
import classes from './MostPopular.module.css'
import BagIcon from '../svgs/BagIcon'
import { useTranslation } from 'react-i18next'
import { ShoppingBag, Wishlist } from '../../App'
import { useContext,useState,useEffect } from 'react'
import Heart from '../svgs/Heart'

const MostPopularSingleCard = ({ product }) => {
  const { name, category, price, rating, imageUrl } = product
  const [myShoppingBag, setMyShoppingBag] = useContext(ShoppingBag)

  const [myWishlist, setMyWishlist] = useContext(Wishlist)
  const [isHeartFilled, setIsHeartFilled] = useState(()=>{
    return myWishlist.some((item) => item.name === product.name);
  })
  const { t } = useTranslation();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setMyWishlist(storedWishlist);

    const isInWishlist = storedWishlist.some(item => item.name === product.name);
    setIsHeartFilled(isInWishlist);
  }, [product]);
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${classes.ProductRatingStar} ${
            i <= rating ? classes.ProductRatingStarFilled : ''
          }`}
        >
          {i <= rating ? '★' : '☆'}
        </span>
      )
    }
    return stars
  }
  const handleAddToCart = () => {
    const bag = [...myShoppingBag]

    const findItem = bag.find((item) => item.name === product.name)

    if (myShoppingBag.length === 0) {
      bag.push(product)
      product.quantity++
    } else {
      if (findItem) {
        findItem.quantity++
      } else {
        bag.push(product)
        product.quantity++
      }
    }
    setMyShoppingBag(bag)
    localStorage.setItem('cart', JSON.stringify(bag));
  }
  const handleAddToWishlist = () => {
    const list = [...myWishlist];
    const findItem = list.some((item) => item.name === product.name);
  
    if (!findItem) {
      product.inWishlist = true;
      list.push(product);
      setIsHeartFilled(!isHeartFilled)
    } else {
      const indexToRemove = list.findIndex((item) => item.name === product.name);
     
      product.inWishlist = false;
        list.splice(indexToRemove, 1);
        setIsHeartFilled(!isHeartFilled)
      
    }
    setMyWishlist(list);
    localStorage.setItem('wishlist', JSON.stringify(list));
  }
  
  return (
    <div className={classes.MostPopularSingleCard}>
      <div className={classes.wishListButton} onClick={handleAddToWishlist}>
      { isHeartFilled ?  <Heart fill='#eba37a'/> : <Heart/>}
      </div>
      <div className={classes.MostPopularImageContainer}>
        <img className={classes.MostPopularImage} src={imageUrl} alt={name} />
      </div>
      <div className={classes.MostPopularAddToCartButtonContainer}>
        <button className={classes.MostPopularAddToCartButton} onClick={handleAddToCart}>
          <BagIcon fill="white" />
         <span className={classes.span}>{t("weeklyFeatured.add")}</span>
        </button>
      </div>
      <div className={classes.MostPopularProductInfo}>
        <p className={classes.MostPopularMakeup}>{category}</p>
        <p className={classes.MostPopularText}>{name}</p>
        <p className={classes.MostPopularText}>€{price}</p>
        <div className={classes.MostPopularStarsContainer}>{renderStars()}</div>
      </div>
    </div>
  )
}

export default MostPopularSingleCard
