import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { HiOutlineArrowDown } from "react-icons/hi";

export default function App() {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const [splineScene, setSplineScene] = useState(null); // Store Spline scene
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animate heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0 }
    );

    // Animate button
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 },
      "<0.3" // Start slightly after the heading animation
    );

    // Looping arrow animation
    gsap.fromTo(
      arrowRef.current,
      { y: 0, opacity: 0.8 },
      {
        y: 20,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse animation
      }
    );
  }, []);

  // Handle Spline scene loading
  const onLoad = (scene) => {
    setIsLoaded(true);
    setSplineScene(scene); // Save the loaded scene for later use
  };


  return (
   <div className="">
     <div className="relative w-full h-screen overflow-hidden">
      {/* Header */}
      {/* <div className="flex absolute top-10 z-50 bg-none justify-between w-full px-6">
        <h1 className="font-[anzo5] text-white uppercase text-[5vh] sm:text-[7vh] leading-[5vh]">
          Fitness
        </h1>
        <button
          id="join"
          className="px-4 py-1 bg-white text-black rounded-3xl cursor-pointer hover:bg-gray-200 transition duration-300"
        >
          Join Us
        </button>
      </div> */}

      {/* Overlay Text */}
      <header className="absolute md:top-1/4 md:left-1/2 md:transform md:-translate-x-1/2 -md:translate-y-1/2 flex flex-col justify-center inset-0 items-center z-10 space-y-6">
        <h1
          ref={headingRef}
          className="font-[anzo5] text-white text-6xl sm:text-7xl md:text-8xl text-center"
        >
          JOIN OUR GYM
        </h1>
        <button
          ref={buttonRef}
          className="px-6 py-2 text-lg md:text-xl font-semibold bg-white text-black rounded-lg shadow-lg"
        >
          Explore
        </button>
        {/* Down Arrow */}
        <div ref={arrowRef} className="text-white mt-4">
          <HiOutlineArrowDown size={40} />
        </div>
      </header>

      {/* Loading Spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
        </div>
      )}

      {/* Spline 3D Scene */}
      <div className="relative w-full h-screen">
        <Spline
          scene="https://prod.spline.design/Y9Vqn8V6w-Gs01g1/scene.splinecode"
          onLoad={onLoad}
        />
      </div>

      {/* Footer */}
      <div className="bg-black h-14 w-full absolute -bottom-1 right-0"></div>
    </div>
   </div>
  );
}
