import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Privacy from "./pages/Privacy";
import Register from "./components/authentication/Register";
import { CurrencyProvider } from "./store/CurrencyContext";


const App = () => {
  return (
    <>
      <CurrencyProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CurrencyProvider>
    </>
  );
};

export default App;
