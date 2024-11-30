import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Cross as Hamburger } from "hamburger-react";
import { useGSAP } from "@gsap/react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // To track animation
  const menuRef = useRef(null);

  const textRef = useRef(null);

  useGSAP(() => {
    gsap.to("#join", {
      scale: 1.3,
      repeat: -1,
      yoyo: true,             
      duration: 1,         
      ease: "elastic.out(0.1, 0.5)", 
    });
  }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".h1",
  //     { opacity: 0, y: -50 },
  //     { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5, stagger:0.5 },
  //   //   {delay: 1},
  //   //   {stagger:0.5},
  //   );
  // }, []);

  const toggleMenu = () => {
    if (isAnimating) return; // Prevent new toggles during animations
    setIsMenuOpen((prev) => !prev);
  };

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     // Open animation
  //     setIsAnimating(true);
  //     gsap.fromTo(
  //       menuRef.current,
  //       { x: "100%" }, // Start off-screen to the right
  //       {
  //         x: "0%",
  //         duration: 1,
  //         ease: "power3.out",
  //         onComplete: () => setIsAnimating(false),
  //       }
  //     );
  //   } else {
  //     // Close animation
  //     setIsAnimating(true);
  //     gsap.to(menuRef.current, {
  //       x: "100%",
  //       duration: 1,
  //       ease: "power3.in",
  //       onComplete: () => {
  //         setIsAnimating(false);
  //       },
  //     });
  //   }
  // }, [isMenuOpen]);

  return (
    <div className="text-white pt-5 h-16 bg-transparent">
      <div className="px-4 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-[anzo5] uppercase text-[5vh] sm:text-[7vh] leading-[5vh] ml-2 sm:ml-5">
          Fitness
        </h1>

        {/* Desktop Navigation */}
        <div  className="flex space-x-4 font-[anzo3]  items-center">
          {/* <h1 className="h1 cursor-pointer">Training</h1>
          <h1 className="h1 cursor-pointer">Blog</h1>
          <h1 className="h1 pr-5 sm:pr-20 cursor-pointer">Why Join</h1> */}
          <div >
            <button id="join" className=" px-4 text-sm  py-1 bg-white text-black rounded-3xl mr-10 cursor-pointer hover:bg-gray-200 transition duration-300">Join Us</button>
          </div>
        </div>

        {/* Hamburger Menu */}
        {/* <div className="sm:hidden z-50">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle navigation"
          >
            <Hamburger easing="ease-in" toggled={isMenuOpen} />
          </button>
        </div>
      </div>

      
      <div
        ref={menuRef}
        className={`sm:hidden fixed top-0 right-0 bg-black text-white w-2/3 h-full z-40 shadow-lg`}
        style={{
          visibility: isMenuOpen || isAnimating ? "visible" : "hidden",
        }}
      >
        <div className="flex flex-col text-center py-4 mt-10">
          <h1 className="py-4 border-b border-gray-500 hover:text-gray-300 transition">
            Training
          </h1>
          <h1 className="py-4 border-b border-gray-500 hover:text-gray-300 transition">
            Blog
          </h1>
          <h1 className="py-4 border-b border-gray-500 hover:text-gray-300 transition">
            Why Join
          </h1>
          <div className="px-6 py-2 bg-white text-black rounded-3xl mx-auto mt-6 w-max hover:bg-gray-200 transition">
            Join Us
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
