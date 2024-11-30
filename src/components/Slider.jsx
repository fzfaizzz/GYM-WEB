import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-[#b7b7b8] to-[20%] to-white flex flex-col justify-center items-start overflow-hidden"
    >
      {/* Logo */}
      <div className="absolute top-6 left-8 text-black font-serif text-[1.8rem] font-bold">
        FitCore <span className="text-sm font-normal">&#9660;</span>
      </div>

      {/* Large Black Circle */}
      <div
        className="absolute w-[450px] h-[450px] bg-[#2c2c2c] rounded-full -left-40 top-0"
        style={{ zIndex: 1  }}
      ></div>

      {/* Main Text with Dynamic Mask */}
      <div
        className="relative z-10 pl-14 mix-blend-difference text-white"
        style={{ isolation: "isolate" }}
      >
          <h1 className="text-[10vw] z-20 font-extrabold leading-tight tracking-tighter uppercase">
          Build <br />
          <p className=" leading-none">Endure </p>
          Transform <br />
        
        </h1>
      </div>

      {/* Small Circle at Bottom */}
      <div
        className="absolute bg-[#2c2c2c] w-[150px] h-[150px] rounded-full flex items-center justify-center text-white font-medium text-center text-xs leading-tight bottom-10 right-10 shadow-lg"
        style={{ zIndex: 2 }}
      >
        EMPOWERING <br />
        YOUR FITNESS JOURNEY
      </div>
    </div>
  );
};

export default HeroSection;
