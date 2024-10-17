import React from "react";
import Hero from "./components/hero/Hero";
import TextSection from "./components/text/TextSection";
import Peoples from "./components/peoples/Peoples";
import Partners from "./components/partners/Partners";
import QrContainer from "./components/qr/QrContainer";
import Parallax from "./components/parallax/Parallax";

const Home = () => {
  return (
    <>
      <Hero />
      <TextSection />
      <Peoples />
      <Partners />
      <QrContainer />
      <Parallax />
    </>
  );
};

export default Home;
