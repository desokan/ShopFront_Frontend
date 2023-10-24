import NavBar from "../components/navbar/NavBarContainer";
import MainSlider from "../components/heroBanner/HeroBanner";
import WeeklyFeatured from "../components/weeklyFeatured/WeeklyFeatured";
import Footer from "../components/footer/FooterContainer";
import RecentlyViewed from "../components/recentlyViewed/RecentlyViewed";
import MostPreferred from "../components/mostPreferred/MostPreferred";
import MostPopular from "../components/mostPopularProducts/MostPopular";
import ChatBox from '../components/chatbox/Chatbox'
import i18n from "../i18n";
import React, { useState } from "react";
import ProductBanner from "../components/productBanner/ProductBanner";

const HomePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
  const [myShoppingBag, setMyShoppingBag] = useState([])
  return (
    <>
     <Context1.Provider value={[myShoppingBag, setMyShoppingBag]}>
      <Context.Provider value={[selectedLanguage, setSelectedLanguage]}>
        
        <NavBar />
        <MainSlider />
        <WeeklyFeatured />
        <MostPreferred />
        <MostPopular />
        <RecentlyViewed />
        <ProductBanner/>
        <Footer />
        <ChatBox/>
      </Context.Provider>
      </Context1.Provider>
    </>
  );
};

export default HomePage;
export const Context = React.createContext();
export const Context1 = React.createContext();
