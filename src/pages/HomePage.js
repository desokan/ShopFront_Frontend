import NavBar from '../components/navbar/NavBarContainer'
import MainSlider from '../components/heroBanner/HeroBanner'
import WeeklyFeatured from '../components/weeklyFeatured/WeeklyFeatured'
import Footer from '../components/footer/FooterContainer'
import RecentlyViewed from '../components/recentlyViewed/RecentlyViewed'
import MostPreferred from '../components/mostPreferred/MostPreferred'

const HomePage = () => {
	return (
		<>
			<NavBar />
			<MainSlider />
			<WeeklyFeatured />
			<MostPreferred/>
      <RecentlyViewed />
			<Footer />
		</>
	)
}

export default HomePage
