import WishlistItemDash from './WishlistItemDash'
import classes from "./WishlistItemDash.module.css";

const Wishlist = () => {
  return (
    <div className={classes.itemList}>
      <WishlistItemDash />
    </div>
  )
}
export default Wishlist
