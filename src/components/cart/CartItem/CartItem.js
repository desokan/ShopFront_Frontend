import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <section className={classes.itemContainer}>
      <div className={classes.imgContainer}>
        <img
          src="https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FS_SUMMER_2021_ECom_DeluxeCleansr_2883_R3_RGB_1200X1500_72DPI.jpg?v=1619139355"
          alt=""
        />
      </div>
      <div className={classes.itemsInfo}>
        <div className={classes.topItemGrid}>
          <p>Zessi Dresses</p>
          <button className={classes.closeLogin}>X</button>
        </div>

        <div>
          -<span>2</span>+
        </div>
      </div>
    </section>
  );
};

export default CartItem;
