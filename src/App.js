import NavBar from './components/navbar/NavBarContainer'
// import { Routes, Route } from "react-router-dom";
import MainSlider from './components/heroBanner/heroBanner.js'
import Footer from './components/footer/FooterContainer'

const App = () => {
  return (
    <>
      <NavBar />
      <MainSlider />
      <Footer/>
    </>
  )
}

export default App
