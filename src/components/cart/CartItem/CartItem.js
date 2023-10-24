import classes from "./CartItem.module.css";
import { useEffect, useState } from "react";

const CartItem = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const myCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(myCart);
    console.log("myCart", myCart);
  }, []);

  return (
    <div>
      {cart.length > 0 &&
        cart.map((cartItem) => {
          return (
            <section className={classes.itemContainer}>
              <div className={classes.imgContainer}>
                <img src={cartItem.imageUrl} alt={cartItem.name} />
              </div>
              <div className={classes.itemsInfo}>
                <div className={classes.topItemGrid}>
                  <p>{cartItem.name}</p>
                  <button className={classes.closeLogin}>X</button>
                </div>
                <div className={classes.productInfo}>
                  <span>Category: {cartItem.category}</span>
                  <span>Rating: {cartItem.rating}</span>
                </div>
                <div className={classes.amount}>
                  <div className={classes.quantity}>
                    <span className={classes.quantityButton}>-</span>
                    <span className={classes.itemQuantity}>{cartItem.quantity}</span>
                    <span className={classes.quantityButton}>+</span>
                  </div>

                  <span className={classes.price}>${cartItem.price}</span>
                </div>
              </div>
            </section>
          );
        })}
      {cart.length === 0 && <div>Your Cart is empty</div>}
    </div>
  );
};

export default CartItem;
