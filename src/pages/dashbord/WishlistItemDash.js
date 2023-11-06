import classes from "./WishlistItemDash.module.css";
import { Wishlist } from "../../App";
import { useContext } from "react";
import CloseIcon from "../../components/svgs/CloseIcon";
import { useTranslation } from "react-i18next";

const WishlistItemDash = () => {
  const { t } = useTranslation();

  const [myWishlist, setMyWishlist] = useContext(Wishlist);

  const renderStars = (cartItem) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${classes.ProductRatingStar} ${
            i <= cartItem.rating ? classes.ProductRatingStarFilled : ""
          }`}
        >
          {i <= cartItem.rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };


  const removeItem = (index) => {
    const list = [...myWishlist];

    list.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(list));
    setMyWishlist(list);
  };

  return (
    <div className={classes.items}>
      {myWishlist.length > 0 &&
        myWishlist.map((cartItem, index) => {
          return (
            <section className={classes.itemContainer} key={index}>
              <div className={classes.imgContainer}>
                <img src={cartItem.imageUrl} alt={cartItem.name} />
              </div>
              <div className={classes.itemsInfo}>
                <div className={classes.topItemGrid}>
                 <p>{cartItem.category}</p>
                  <button
                    className={classes.closeLogin}
                    onClick={() => removeItem(index)}
                    >
                    <CloseIcon />
                  </button>
                </div>
                <div className={classes.productInfo}>
                  <span>
                    <p>{cartItem.name}</p>
                  </span>
                  <span>
                    {t("cart.rating")}: {renderStars(cartItem)}
                  </span>
                  <span>
                €{cartItem.price}
                  </span>
                </div>
                
              </div>
            </section>
          );
        })}
      {myWishlist.length === 0 && (
        <div>
          <p>{t("wishlist.empty")}</p>
        </div>
      )}
    </div>
  );
};

export default WishlistItemDash;