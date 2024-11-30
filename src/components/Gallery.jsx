import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About"
import Gym from "./Testimonials";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ScrollZoom() {
  useEffect(() => {
  
    ScrollTrigger.refresh();

  
    gsap.to(".zoom-element", {
      scale: 2,
      y: -100, 
      ease: "power1.inOut", 
      scrollTrigger: {
        trigger: ".zoom-element", 
        start: "top 90%",
        end: "top 30%", 
        scrub: 0.5, 

      },
    });

 
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="relative w-full bg-white min-h-screen text-black">
   
      <div className="h-[30vh] bg-white flex items-center justify-center">
      
      </div>

      <div className="zoom-element bg-black w-full h-[170vh] mx-auto rounded-full flex items-center justify-center text-3xl font-bold text-white">
      <div className=" mt-7">
      <About/>
      </div>
      <div className="md:hidden">
        <Gym/>
      </div>
      </div>

    </div>
  );
}

export default ScrollZoom;
