import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import CustomHomesAndShops from "./components/CustomHomesAndShops";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import TopNav from "./components/NavBar";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Opener from "./components/Opener";
import BidModal from "./components/BidModal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Stack>
        <TopNav toggle={toggleModal} />
        <BidModal show={openModal} setShow={setOpenModal} />
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
      {/* <Opener /> */}
      <Footer />
    </>
  );
}

export default App;
