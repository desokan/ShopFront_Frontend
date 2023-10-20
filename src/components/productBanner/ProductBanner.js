import classes from './ProductBanner.module.css'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import { useTranslation } from 'react-i18next'

const ProductBanner = () => {
  const { t } = useTranslation();
  const productsBanner = t('productBanner', { returnObjects: true })
  return (
    <div className={classes.ProductBannerMain}>
      <div className={classes.ProductBannerContainer}>
        <div className={classes.ProductBannerTextBox}>
          <h2 className={classes.ProductBannerH2}>
          {productsBanner.title}
          </h2>
          <p className={classes.ProductBannerP}>
          {productsBanner.subTitle}
          </p>
          <button className={classes.ProductBannerButton}>{productsBanner.shopNow}</button>
        </div>
        <div className={classes.ProductBannerLeft}>
          <div className={classes.ProductBannerProduct1}>
            <img
              src={image1}
              alt="foundation"
              className={classes.ProductBannerImage1}
            />
            <div className={classes.ProductInfoContainer}>
              <button className={classes.ProductBannerPlusButton}>
                <span className={classes.ProductBannerPlus}>+</span>
              </button>
              <div className={classes.ProductInfo}>
                <div className={classes.ProductInfoEmpty}></div>
                <h2 className={classes.ProductInfoH2}>{productsBanner.products[1].title}</h2>
                <p className={classes.ProductInfoP}>{productsBanner.products[1].subTitle}</p>
                <button className={classes.ProductInfoButton}>{productsBanner.products[1].shopNow}</button>
              </div>
            </div>
          </div>
          <div className={classes.ProductBannerProduct2}>
            <img
              src={image2}
              alt="powder"
              className={classes.ProductBannerImage2}
            />
            <div className={classes.ProductInfoContainer}>
              <button className={classes.ProductBannerPlusButton2}>
                <span className={classes.ProductBannerPlus2}>+</span>
              </button>
              <div className={classes.ProductInfo2}>
                <div className={classes.ProductInfoEmpty2}></div>
                <h2 className={classes.ProductInfoH2}>{productsBanner.products[0].title}</h2>
                <p className={classes.ProductInfoP}>{productsBanner.products[0].subTitle}</p>
                <button className={classes.ProductInfoButton}>{productsBanner.products[0].shopNow}</button>
              </div>
            </div>
          </div>
          <div className={classes.ProductBannerProduct3}>
            <img
              src={image3}
              alt="cream"
              className={classes.ProductBannerImage3}
            />
            <div className={classes.ProductInfoContainer}>
              <button className={classes.ProductBannerPlusButton3}>
                <span className={classes.ProductBannerPlus3}>+</span>
              </button>
              <div className={classes.ProductInfo3}>
                <div className={classes.ProductInfoEmpty3}></div>
                <h2 className={classes.ProductInfoH2}>{productsBanner.products[2].title}</h2>
                <p className={classes.ProductInfoP}>{productsBanner.products[2].subTitle}</p>
                <button className={classes.ProductInfoButton}>{productsBanner.products[2].shopNow}</button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ProductBannerRight}></div>
      </div>
    </div>
  )
}

export default ProductBanner
