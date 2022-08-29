import React,  {useContext} from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// import { useAuth } from "../context/AuthContext";

import Homepage from "../pages/Homepage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import Login from "../pages/Login/Login";
// import BeefPage from "../pages/Barns/BeefCattle/BeefPage";
// import DairyPage from "../pages/Barns/DairyCattle/DairyPage";
// import GoatPage from "../pages/Barns/Goat/GoatPage";
// import SheepPage from "../pages/Barns/Sheep/SheepPage";
// import HorsePage from "../pages/Barns/Horse/HorsePage";
// import PoultryPage from "../pages/Barns/Poultry/PoultryPage";
// import Dashboard from "../pages/Dashboard";

// import {Login, Register } from "../pages/LoginRegister";

function AppRouter() {

  // const {currentUser} = useAuth()

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  return (
    <BrowserRouter>
		<Navbar/>
      <Routes>
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} /> */}

        <Route path="/" element={<Homepage /> } />
        {/* <Route path="/homepage" element={<Dashboard /> } />
        <Route path="/beefPage" element={<BeefPage /> } />
        <Route path="/dairyPage" element={<DairyPage /> } />
        <Route path="/goatPage" element={<GoatPage /> } />
        <Route path="/sheepPage" element={<SheepPage /> } />
        <Route path="/horsePage" element={<HorsePage /> } />
        <Route path="/poultryPage" element={<PoultryPage /> } />
        <Route path="about" element={<About />} /> */}
        {/* <Route path="/auth" element={<SignUp />} /> */}
      </Routes>
			<Footer/>
      </BrowserRouter>
  
  );
}
export default AppRouter