import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";

const App = () => {
  const scrollRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      // Initialize Lenis
      const lenis = new Lenis({
        smooth: true, // Enable smooth scrolling
        lerp: 0.1,    // Adjust the easing factor for smoothness
        direction: "vertical", // Scrolling direction
      });

      // Animation loop for Lenis
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy(); // Cleanup Lenis instance on unmount
      };
    }
  }, [isLoaded]);

  return (
    <>
      {/* Preloader */}
      {!isLoaded && <Preloader setIsLoaded={setIsLoaded} />}

      {/* Main Content */}
      <div
        ref={scrollRef}
        style={{
          overflow: "hidden",
          position: "relative",
          visibility: isLoaded ? "visible" : "hidden",
        }}
      >
        <Header />
        <Hero />
        <Services />
        <Slider />
        {/* Uncomment if needed */}
        {/* <About /> */}
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
