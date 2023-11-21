import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        
        <div className="container mt-5">
          <Routes>
            <Route path="React-Portfolio/" element={<About />} />
            <Route path="Portfolio/home" element={<Home />} />
            <Route path="React-Portfolio/about" element={<About />} />
            <Route path="React-Portfolio/portfolio" element={<Portfolio />} />
            <Route path="React-Portfolio/contact" element={<Contact />} />
            <Route path="React-Portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


