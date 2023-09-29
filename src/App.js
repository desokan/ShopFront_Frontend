import NavBar from './components/navbar/NavBarContainer'
// import { Routes, Route } from "react-router-dom";
import MainSlider from './components/heroBanner/HeroBanner'
import Footer from './components/footer/FooterContainer'
import WeeklyFeatured from './components/weeklyFeatured/weeklyFeatured'

const App = () => {
  return (
    <>
      <NavBar />
      <MainSlider />
      <WeeklyFeatured />
      <Footer/>
    </>
  )
}

export default App
