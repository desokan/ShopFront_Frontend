import classes from './RecentlyViewed.module.css'
import Carousel from '../weeklyFeatured/Carousel'

const RecentlyViewed = () => {
	const dummyData = [
		{
		  id: 1,
		  name: "RADIANT LIFT FOUNDATION",
		  category: "Makeup",
		  price: 29,
		  rating: 4,
		  image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWNkp2TW0CW1GYOZy1GU7dismoiEJ-xgTFK9E6WM7FbpAiYEUwraCq5uph7_uKbLVMFvncd0K9Vngn2Rd8hAccTcD-uxprYfy-ovobHf2-&usqp=CAc'
		},
		{
		  id: 2,
		  name: "MOISTURIZING SKIN CREAM",
		  category: "Skincare",
		  price: 35,
		  rating: 5,
		  image:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/47137.jpg?v=1614390686'
		},
		{
		  id: 3,
		  name: "EYE ENHANCING MASCARA",
		  category: "Makeup",
		  price: 15,
		  rating: 3,
		  image:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB30029_FB3019.jpg?v=1623353290'
		},
		{
		  id: 4,
		  name: "HYDRATING FACIAL CLEANSER",
		  category: "Skincare",
		  price: 20,
		  rating: 4,
		  image:'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_POSTHOL2021_T2PRODUCT_CONCRETE_LIQUID_KILLAWATT_OPEN_HONEYHAWTIE_1200x1500_9c0beef5-fde6-4059-b50d-162806cc7192.jpg?v=1647985851'
		},
	  ];
	return (
		<div className={classes.RecentlyViewedContainer}>
			<div className={classes.RecentlyViewedTitle}>
				<h3 className={classes.RecentlyViewedTitleH3}>
					RECENTLY VIEWED 
				</h3>
				<p className={classes.RecentlyViewedTitleP}>
					Are you still interested in these products?
				</p>
			</div>
			<Carousel products={dummyData} />
		</div>
	)
}

export default RecentlyViewed
