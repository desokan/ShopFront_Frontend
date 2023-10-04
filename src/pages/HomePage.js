import NavBar from '../components/navbar/NavBarContainer'
import MainSlider from '../components/heroBanner/heroBanner'
import WeeklyFeatured from '../components/weeklyFeatured/weeklyFeatured'
import Footer from '../components/footer/FooterContainer'
import MostPreferred from '../components/mostPreferred/mostPreferred'
import RecentlyViewed from '../components/recentlyViewed/RecentlyViewed'

const HomePage = () => {
	return (
		<>
			<NavBar />
			<MainSlider />
			<WeeklyFeatured />
			<MostPreferred />
      <RecentlyViewed />
			<Footer />
		</>
	)
}

export default HomePage
