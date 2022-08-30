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
import Insurance from "../pages/hizmetler/Insurance";

import Motor from "../pages/servis/Motor";
import Boya from "../pages/servis/Boya";
import Mekanik from "../pages/servis/Mekanik";
import Kaborta from "../pages/servis/Kaborta";
import Elektrik from "../pages/servis/Elektrik";

import Unalusta from "../pages/about/Unalusta";
import About from "../pages/about/About";
import Admin from "../pages/about/Admin";
import Teknik from "../pages/about/Teknik";


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
        
        <Route path="/" element={<Homepage /> } />

        <Route path="/periodic" element={<Periodic /> } />
        <Route path="/maintenance" element={<Maintenance /> } />
        <Route path="/accident" element={<Accident /> } />
        <Route path="/insurance" element={<Insurance /> } />

        <Route path="/motor" element={<Motor /> } />
        <Route path="/boya" element={<Boya /> } />
        <Route path="/elektrik" element={<Elektrik /> } />
        <Route path="/kaborta" element={<Kaborta /> } />
        <Route path="/mekanik" element={<Mekanik /> } />
        
        <Route path="/unalusta" element={<Unalusta /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/teknik" element={<Teknik /> } />
        <Route path="/admin" element={<Admin /> } />
        
      
      </Routes>
			<Footer/>
      </BrowserRouter>
  
  );
}
export default AppRouter