import NavBar from "../components/navbar/NavBarContainer";
import MainSlider from "../components/heroBanner/heroBanner";
import WeeklyFeatured from "../components/weeklyFeatured/weeklyFeatured";
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