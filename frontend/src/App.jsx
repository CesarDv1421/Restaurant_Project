import { useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Menu from "./views/Menu.jsx";
import LandingPage from "./views/LandingPage.jsx";
import RollCachapa from "./views/RollCachapa.jsx";
import SignIn from "./views/SignIn.jsx";
import SignUp from "./views/SignUp.jsx";
import OrderList from "./views/OrderList.jsx";
import Admin from "./views/Admin.jsx";
import { AuthContext } from "./context/authContext.jsx";
import Contact from "./views/Contact.jsx";

function App() {
  const { userToken } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/rollcachapa"
          element={userToken ? <RollCachapa /> : <Navigate to="/signin" />}
        />
        <Route
          path="/menu"
          element={userToken ? <Menu /> : <Navigate to="/signin" />}
        />
        <Route
          path="/orderlist"
          element={userToken ? <OrderList /> : <Navigate to="/signin" />}
        />
        <Route
          path="/contact"
          element={userToken ? <Contact /> : <Navigate to="/signin" />}
        />
        <Route
          path="/admin"
          element={
            userToken && userToken.rol === "admin" ? (
              <Admin />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
