import NavBar from "../components/navbar/NavBarContainer";
import MainSlider from "../components/heroBanner/HeroBanner";
import WeeklyFeatured from "../components/weeklyFeatured/WeeklyFeatured";
import Footer from "../components/footer/FooterContainer";

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <MainSlider/>
            <WeeklyFeatured/>
            <Footer/>
        </>
    )
}

export default HomePage;