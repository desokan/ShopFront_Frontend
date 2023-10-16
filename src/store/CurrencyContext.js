import { createContext, useContext, useState, useEffect } from "react";

const BASE_URL =
  "http://data.fixer.io/api/latest?access_key=435120ccfe39ca7b5b5142840aecafee";

const CurrencyContext = createContext();

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setExchangeRates(data));
  }, []);

  const value = {
    selectedCurrency,
    setSelectedCurrency,
    exchangeRates,
    setExchangeRates,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
