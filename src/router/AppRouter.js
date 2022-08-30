import React,  {useContext} from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// import { useAuth } from "../context/AuthContext";

import Homepage from "../pages/Homepage";
import Navbar from "../components/Navbar";
import NavbarTail from "../components/NavbarTail";
import Footer from "../components/Footer";

import Periodic from "../pages/hizmetler/Periodic";
import Maintenance from "../pages/hizmetler/Maintenance";
import Accident from "../pages/hizmetler/Accident";


// import {Login, Register } from "../pages/LoginRegister";

function AppRouter() {

  // const {currentUser} = useAuth()

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  return (
    <BrowserRouter>
		<NavbarTail/>
      <Routes>
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} /> */}

        <Route path="/" element={<Homepage /> } />
        <Route path="/periodic" element={<Periodic /> } />
        <Route path="/maintenance" element={<Maintenance /> } />
        <Route path="/accident" element={<Accident /> } />
        <Route path="/goatPage" element={<GoatPage /> } />
        <Route path="/sheepPage" element={<SheepPage /> } />
        <Route path="/horsePage" element={<HorsePage /> } />
        <Route path="/poultryPage" element={<PoultryPage /> } />
        <Route path="about" element={<About />} /> */}
        {/* <Route path="/auth" element={<SignUp />} />
      </Routes>
			<Footer/>
      </BrowserRouter>
  
  );
}
export default AppRouter