import classes from './CartItem.module.css'
import { Context1 } from '../../../pages/HomePage'
import { useContext } from 'react'

const CartItem = () => {
  const [myShoppingBag, setMyShoppingBag] = useContext(Context1)

  const handleMinusQuantity = (index) => {
    const bag = [...myShoppingBag]
    bag[index].quantity -= 1
    if (bag[index].quantity === 0) {
      bag.splice(index, 1)
    }
    setMyShoppingBag(bag)
  }
  const removeItem = (index) => {
    const bag = [...myShoppingBag]

    bag.splice(index, 1)

    setMyShoppingBag(bag)
  }
  const handlePlusQuantity = (index) => {
    const bag = [...myShoppingBag]
    bag[index].quantity += 1
    setMyShoppingBag(bag)
  }

  return (
    <div>
      {myShoppingBag.length > 0 &&
        myShoppingBag.map((cartItem, index) => {
          return (
            <section className={classes.itemContainer}>
              <div className={classes.imgContainer}>
                <img src={cartItem.imageUrl} alt={cartItem.name} />
              </div>
              <div className={classes.itemsInfo}>
                <div className={classes.topItemGrid}>
                  <p>{cartItem.name}</p>
                  <button
                    className={classes.closeLogin}
                    onClick={() => removeItem(index)}
                  >
                    X
                  </button>
                </div>
                <div className={classes.productInfo}>
                  <span>Category: {cartItem.category}</span>
                  <span>Rating: {cartItem.rating}</span>
                </div>
                <div className={classes.amount}>
                  <div className={classes.quantity}>
                    <span
                      className={classes.quantityButton}
                      onClick={() => handleMinusQuantity(index)}
                    >
                      -
                    </span>
                    <span className={classes.itemQuantity}>
                      {cartItem.quantity}
                    </span>
                    <span
                      className={classes.quantityButton}
                      onClick={() => handlePlusQuantity(index)}
                    >
                      +
                    </span>
                  </div>
                  <span className={classes.price}>${cartItem.price}</span>
                </div>
              </div>
            </section>
          )
        })}
      {myShoppingBag.length === 0 && <div>Your Cart is empty</div>}
    </div>
  )
}

export default CartItem
