import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopFeatures from "@/components/TopFeatures";
import ChooseYourEdition from "@/components/ChooseYourEdition";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <HeroSection />
      <TopFeatures />
      <ChooseYourEdition />
      <Footer />
    </div>
  );
};

export default page;
