import React from "react";
import { Stack } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import CustomHomesAndShops from "./components/CustomHomesAndShops";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import NavBar from "./components/NavBar";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Opener from "./components/Opener";

function App() {
  return (
    <>
      <Opener />
      <Stack>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/custom-homes-and-shops"
            element={<CustomHomesAndShops />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Stack>
      <Footer />
    </>
  );
}

export default App;
