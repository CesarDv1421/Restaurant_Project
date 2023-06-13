import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Menu from "./views/Menu.jsx";
import LandingPage from "./views/LandingPage.jsx";
import RollCachapa from "./views/RollCachapa.jsx";
import SignIn from "./views/SignIn.jsx";
import SignUp from "./views/SignUp.jsx";
import OrderList from "./views/OrderList.jsx";
import Admin from "./views/Admin.jsx";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"))

  console.log(isAuth, localStorage.getItem("rol"))

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/rollcachapa" element={isAuth ? <RollCachapa /> : <SignIn/> } />
        <Route path="/menu" element={isAuth ? <Menu /> : <SignIn/>} />
        <Route path="/orderlist" element={isAuth ? <OrderList /> : <SignIn/> }/>
        <Route path="/admin" element={isAuth && localStorage.getItem('rol') === "admin" ? <Admin /> : <SignIn/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
