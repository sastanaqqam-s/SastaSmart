import React, { useState, useEffect } from "react";
import Preloader from "./components/utils/Pre";
import Navbar from "./components/utils/Navbar";
import Smart from "./components/Home/Smart";


import Footer from "./components/utils/Footer";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <Router>
      
      <div className="App" >
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Smart />} />
      
        
         
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
