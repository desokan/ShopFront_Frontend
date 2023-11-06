import NavBar from "../components/navbar/NavBarContainer";
import MainSlider from "../components/heroBanner/HeroBanner";
import WeeklyFeatured from "../components/weeklyFeatured/WeeklyFeatured";
import Footer from "../components/footer/FooterContainer";
import RecentlyViewed from "../components/recentlyViewed/RecentlyViewed";
import MostPreferred from "../components/mostPreferred/MostPreferred";
import MostPopular from "../components/mostPopularProducts/MostPopular";
import ChatBox from "../components/chatbox/Chatbox";
import i18n from "../i18n";
import React, { useState } from "react";
import ProductBanner from "../components/productBanner/ProductBanner";

const HomePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const cartForParse = localStorage.getItem("cart");
  const shoppingCart = JSON.parse(cartForParse) || [];
  const [myShoppingBag, setMyShoppingBag] = useState(shoppingCart);
  const wishlistForParse = localStorage.getItem("wishlist");
  const wishlist = JSON.parse(wishlistForParse) || [];
  const [myWishlist, setMyWishlist] = useState(wishlist);
  
  return (
    <>
    <Wishlist.Provider value={[myWishlist, setMyWishlist]}>
      <ShoppingBag.Provider value={[myShoppingBag, setMyShoppingBag]}>
        <Language.Provider value={[selectedLanguage, setSelectedLanguage]}>
          <NavBar />
          <MainSlider />
          <WeeklyFeatured />
          <MostPreferred />
          <MostPopular />
          <RecentlyViewed />
          <ProductBanner />
          <Footer />
          <ChatBox />
        </Language.Provider>
      </ShoppingBag.Provider>
      </Wishlist.Provider>
    </>
  );
};

export default HomePage;
export const Language = React.createContext();
export const ShoppingBag = React.createContext();
export const Wishlist = React.createContext();
