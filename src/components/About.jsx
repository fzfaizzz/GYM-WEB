import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const animateDivs = (container, firstClass, secondClass) => {
      // Animate the first div
      gsap.fromTo(
        `.${firstClass}`,
        { x: "-100%", opacity: 0 },
        {
          x: "100%",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      // Animate the second div
      gsap.fromTo(
        `.${secondClass}`,
        { x: "100%", opacity: 0 },
        {
          x: "-100%",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    };

    // Target each animation container
    document.querySelectorAll(".animation-container").forEach((container, index) => {
      animateDivs(container, `first-div-${index}`, `second-div-${index}`);
    });
  }, []);

  // Content data for each section
  const content = [
    {
      first: { img: "https://i.pinimg.com/736x/bb/4c/64/bb4c64b7a34d96cba526eeed205ec712.jpg", title: "Before | After" },
      second: { img: "/img/Trans1.jpg", title: "Before | After" },
    },
    {
      first: { img: "https://i.pinimg.com/736x/e3/27/88/e32788c9b7ccf04b6e7d87318e116063.jpg", title: "Before | After" },
      second: { img: "https://i.pinimg.com/736x/65/c0/91/65c091cdb883ddfc59c1740ac92287fd.jpg", title: "Before | After" },
    },
  ];

  return (
    <div>
      <div className="scroll-container">
      {content.map((section, index) => (
        <div
          className="animation-container hidden md:flex md:flex-row justify-between items-center mx-4 lg:mx-10 my-10 lg:my-20 h-auto lg:h-64"
          key={index}
        >
          <div
            className={`first-div-${index} bg-gray-400 text-white flex flex-col items-center justify-center w-full lg:w-1/2 rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-4 p-6`}
          >
            <img
              src={section.first.img}
              alt="Placeholder"
              className="w-40 h-40 mb-4 object-cover rounded-md shadow-md"
            />
            <h2 className="text-xl font-bold text-center">{section.first.title}</h2>
          </div>
          <div
            className={`second-div-${index} bg-gray-30 backdrop-blur-md text-white flex flex-col items-center justify-center w-full lg:w-1/2 rounded-lg shadow-lg lg:ml-4 p-6 `}
          >
            <img
              src={section.second.img}
              alt="Placeholder"
              className="w-40 h-40 mb-4 object-cover rounded-md shadow-md"
            />
            <h2 className="text-xl font-bold text-center">{section.second.title}</h2>
          </div>
        </div>
      ))}
    </div>

      {/* Mobile View */}
      
    </div>
  );
}
