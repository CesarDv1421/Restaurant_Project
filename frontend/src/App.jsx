import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./views/Menu/Menu.jsx";
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import RollCachapa from "./views/RollCachapa/RollCachapa.jsx";
import SignIn from "./views/SignIn/SignIn.jsx";
import SignUp from "./views/SignUp/SignUp.jsx";
import OrderList from "./views/OrderList/OrderList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rollcachapa" element={<RollCachapa />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orderlist" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
