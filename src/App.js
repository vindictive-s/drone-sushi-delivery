import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import PopularSection from "./components/PopularSection";
import TrackSection from "./components/TrackSection";
import PaymentSection from "./components/PaymentSection";
import InfoSection from "./components/InfoSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";
import { SliderData } from "./components/Carousel/SliderData";
import { MenuData } from "./components/PopularSection/MenuData";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <PopularSection slides={SliderData} />
      <TrackSection />
      <PaymentSection />
      <InfoSection />
      <FormSection />
      <Footer />
    </>
  );
};

export default App;
