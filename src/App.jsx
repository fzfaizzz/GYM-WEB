import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, [isLoaded]);

  return (
    <>
      {/* Preloader */}
      {!isLoaded && <Preloader setIsLoaded={setIsLoaded} />}

      {/* Main Content */}
      <div
        data-scroll-container
        ref={scrollRef}
        style={{
          overflow: "hidden",
          position: "relative",
          visibility: isLoaded ? "visible" : "hidden",
        }}
      >
        <div data-scroll-section>
          <Header />
        </div>
        <div data-scroll-section>
          <Hero />
        </div>
        <div data-scroll-section>
          <Services />
        </div>
        <div data-scroll-section>
          <Slider/>
        </div>
        {/* <div data-scroll-section>
          <About />
        </div> */}
        <div data-scroll-section>
          <Gallery />
        </div>
        <div data-scroll-section>
          <Contact/>
        </div>
        <div data-scroll-section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
