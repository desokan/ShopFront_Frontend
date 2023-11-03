import NavBar from "../components/navbar/NavBarContainer";
import MainSlider from "../components/heroBanner/HeroBanner";
import WeeklyFeatured from "../components/weeklyFeatured/WeeklyFeatured";
import Footer from "../components/footer/FooterContainer";
import RecentlyViewed from "../components/recentlyViewed/RecentlyViewed";
import MostPreferred from "../components/mostPreferred/MostPreferred";
import MostPopular from "../components/mostPopularProducts/MostPopular";
import ChatBox from "../components/chatbox/Chatbox";
import React from "react";
import ProductBanner from "../components/productBanner/ProductBanner";

const HomePage = () => {
 
  return (
    <>
   
          <NavBar />
          <MainSlider />
          <WeeklyFeatured />
          <MostPreferred />
          <MostPopular />
          <RecentlyViewed />
          <ProductBanner />
          <Footer />
          <ChatBox />

    </>
  );
};

export default HomePage;
