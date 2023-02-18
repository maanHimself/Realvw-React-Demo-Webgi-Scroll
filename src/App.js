import logo from "./logo.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import setupWebgi from "./webGi/Webgi";
import useEffectSkipInitialRender from "./components/UseEffectSkipInitialRender";
import Loader from "./components/Loader";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Customization from "./components/Customization";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./styles.css";

function App() {
  let canvas = useRef();
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();

  useEffect(() => {
    setupWebgi(canvas);
  });

  return (
    <>
      <Loader />
      <Header />

      <div className="container-hide">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>

      <Customization />

      <div id="webgi-canvas-container">
        <canvas ref={canvas} id="webgi-canvas"></canvas>
      </div>
    </>
  );
}

export default App;
