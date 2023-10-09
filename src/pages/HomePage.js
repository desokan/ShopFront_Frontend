import NavBar from '../components/navbar/NavBarContainer'
import MainSlider from '../components/heroBanner/MainSlider'
import Footer from '../components/footer/FooterContainer'
import RecentlyViewed from '../components/recentlyViewed/RecentlyViewed'
import PreferredMost from '../components/mostPreferred/PreferredMost'
import FeaturedWeekly from '../components/weeklyFeatured/FeaturedWeekly'

const HomePage = () => {
	return (
		<>
			<NavBar />
			<MainSlider />
			<FeaturedWeekly />
			<PreferredMost />
      		<RecentlyViewed />
			<Footer />
		</>
	)
}

export default HomePage
