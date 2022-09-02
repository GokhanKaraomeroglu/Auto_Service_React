import React from "react";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// import { useAuth } from "../context/AuthContext";

import Homepage from "../pages/Homepage";
// import Navbar from "../components/Navbar";
import NavbarTail from "../components/NavbarTail";
import Footer from "../components/Footer";

import Periodic from "../pages/services/Periodic";
import Maintenance from "../pages/services/Maintenance";
import Accident from "../pages/services/Accident";
import Insurance from "../pages/services/Insurance";

import Motor from "../pages/sections/Motor";
import Boya from "../pages/sections/Boya";
import Mekanik from "../pages/sections/Mekanik";
import Kaborta from "../pages/sections/Kaborta";
import Elektrik from "../pages/sections/Elektrik";

import Unalusta from "../pages/about/Unalusta";
import About from "../pages/about/About";
import Admin from "../pages/about/Admin";
import Teknik from "../pages/about/Teknik";

import Record from "../pages/Record";
import Invoice from "../pages/Invoice";
import Contact from "../pages/contact/Contact";

import Login from "../pages/Login";

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

        <Route path="/invoice" element={<Invoice /> } />
        <Route path="/record" element={<Record /> } />
        <Route path="/contact" element={<Contact /> } />
        
        <Route path="/login" element={<Login /> } />
      
      </Routes>
			<Footer/>
      </BrowserRouter>
  
  );
}
export default AppRouter