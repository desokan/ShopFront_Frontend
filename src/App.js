import NavBar from './components/navbar/NavBarContainer'
// import { Routes, Route } from "react-router-dom";
import MainSlider from './components/heroBanner/heroBanner'
import Footer from './components/footer/FooterContainer'
import WeeklyFeatured from './components/weeklyFeatured/weeklyFeatured'
import MostPreferred from './components/mostPreferred/mostPreferred'

const App = () => {
  return (
    <>
      <NavBar />
      <MainSlider />
      <WeeklyFeatured />
      <MostPreferred/>
      <Footer/>
    </>
  )
}

export default App
