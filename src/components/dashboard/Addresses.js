import { useTranslation } from 'react-i18next';
import classes from './Addresses.module.css'
const Addresses = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>
       {t('addresses.text')}
      </h3>
      <div className={classes.addressContainer}>
        <div className={classes.billingAddress}>
          <div>
            <h3 className={classes.addressType}>{t('addresses.billing')}</h3>
            <p className={classes.addressLine}>
              Daniel Robinson <br />
              1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United
              States <br /> <br /> sale@uomo.com <br /> +1 246-345-0695
            </p>
          </div>
          <div className={classes.edit}>  {t('addresses.edit')}</div>
        </div>
        <div className={classes.shippingAddress}>
          <div>
            <h3 className={classes.addressType}>  {t('addresses.shipping')}</h3>
            <p className={classes.addressLine}>
              Daniel Robinson <br />
              1418 River Drive, Suite 35 Cottonhall, CA 9622 <br /> United
              States <br /> <br /> sale@uomo.com <br /> +1 246-345-0695
            </p>
          </div>
          <div className={classes.edit}>  {t('addresses.edit')}</div>
        </div>
      </div>
    </div>
  )
}
export default Addresses
