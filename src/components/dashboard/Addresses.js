import classes from './Addresses.module.css'
const Addresses = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
        The following addresses will be used on the checkout page by default.
      </h3>
      <div className={classes.addressContainer}>
        <div className={classes.billingAddress}>
          <div>
            <h3 className={classes.addressType}>BILLING ADDRESS</h3>
            <p className={classes.addressLine}>
              Daniel Robinson <br />
              1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United
              States <br /> <br /> sale@uomo.com <br /> +1 246-345-0695
            </p>
          </div>
          <div className={classes.edit}>EDIT</div>
        </div>
        <div className={classes.shippingAddress}>
          <div>
            <h3 className={classes.addressType}>SHIPPING ADDRESS</h3>
            <p className={classes.addressLine}>
              Daniel Robinson <br />
              1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United
              States <br /> <br /> sale@uomo.com <br /> +1 246-345-0695
            </p>
          </div>
          <div className={classes.edit}>EDIT</div>
        </div>
      </div>
    </div>
  )
}
export default Addresses
