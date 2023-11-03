import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Privacy from "./pages/Privacy";
import Dashbord from "./pages/dashbord/Dashbord"
import { CurrencyProvider } from "./store/CurrencyContext";
import React, { useState } from "react";
import i18n from "./i18n";



const App = () => {
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
      <CurrencyProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/dashbord" element={<Dashbord/>} />
        </Routes>
      </CurrencyProvider>
      </Language.Provider>
      </ShoppingBag.Provider>
      </Wishlist.Provider>
    </>
  );
};

export default App;
export const Language = React.createContext();
export const ShoppingBag = React.createContext();
export const Wishlist = React.createContext();
