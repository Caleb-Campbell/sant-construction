import React from "react";
import { Stack } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import CustomHomesAndShops from "./components/CustomHomesAndShops";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Stack>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/custom-homes-and-shops"
            element={<CustomHomesAndShops />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Stack>
      ;
    </>
  );
}

export default App;
