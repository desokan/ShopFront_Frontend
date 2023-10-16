import NavBar from "../components/navbar/NavBarContainer";
import MainSlider from "../components/heroBanner/HeroBanner";
import WeeklyFeatured from "../components/weeklyFeatured/WeeklyFeatured";
import Footer from "../components/footer/FooterContainer";
import RecentlyViewed from "../components/recentlyViewed/RecentlyViewed";
import MostPreferred from "../components/mostPreferred/MostPreferred";
import MostPopular from "../components/mostPopularProducts/MostPopular";
import i18n from "../i18n";
import React, { useState } from "react";

const HomePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  return (
    <>
      <Context.Provider value={[selectedLanguage, setSelectedLanguage]}>
        <NavBar />
        <MainSlider />
        <WeeklyFeatured />
        <MostPreferred />
        <MostPopular />
        <RecentlyViewed />
        <Footer />
      </Context.Provider>
    </>
  );
};

export default HomePage;
export const Context = React.createContext();
