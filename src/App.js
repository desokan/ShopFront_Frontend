import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Privacy from "./pages/Privacy";
import Login from "./components/authentication/Login";

import { CurrencyProvider } from "./store/CurrencyContext";


// const AppendAPI = `${BASE_URL}latest?access_key='435120ccfe39ca7b5b5142840aecafee'`

// GBP : 0.864605

// const convertedPrice = price * exchangeRates[selectedCurrency];

const App = () => {
  return (
    <>
      <CurrencyProvider>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/privacy"} element={<Privacy />} />
          <Route path={"/login"}element={<Login />} />
         
          {/* <Route path={"/register"}element={<RegistrationPage />} /> */}
        </Routes>
      </CurrencyProvider>
    </>
  );
};

export default App;
