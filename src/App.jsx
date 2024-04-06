import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./LoginPopUp/LoginPopUp";
import { useState } from "react";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {/* Showing login or not */}
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}

      <div className="app">

        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>

      </div>
      
      <Footer />
    </>
  );
};

export default App;
