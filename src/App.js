import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Privacy from "./pages/Privacy";
import React, { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const language = localStorage.getItem("savedLanguage");
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const cartForParse = localStorage.getItem("cart");
  const shoppingCart = JSON.parse(cartForParse) || [];
  const [myShoppingBag, setMyShoppingBag] = useState(shoppingCart);
  const wishlistForParse = localStorage.getItem("wishlist");
  const wishlist = JSON.parse(wishlistForParse) || [];
  const [myWishlist, setMyWishlist] = useState(wishlist);
  const getDefaultTitle = () => {
    if (selectedLanguage === "it") {
      return "CRUSCOTTO";
    } else if (language === "fr") {
      return "TABLEAU DE BORD";
    } else {
      return "DASHBOARD";
    }
  };

  const [dashbordNavigation, setDashbordNavigation] = useState(
    getDefaultTitle()
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

  }, []);
  return (
    <>

        <DashbordNavigation.Provider
          value={[dashbordNavigation, setDashbordNavigation]}
        >
          <Wishlist.Provider value={[myWishlist, setMyWishlist]}>
            <ShoppingBag.Provider value={[myShoppingBag, setMyShoppingBag]}>
              <Language.Provider
                value={[selectedLanguage, setSelectedLanguage]}
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </Language.Provider>
            </ShoppingBag.Provider>
          </Wishlist.Provider>
        </DashbordNavigation.Provider>

    </>
  );
};

export default App;

export const Language = React.createContext();
export const ShoppingBag = React.createContext();
export const Wishlist = React.createContext();
export const DashbordNavigation = React.createContext();