import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Gym = () => {
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const before = beforeRef.current;
    const after = afterRef.current;
    const container = containerRef.current;

    gsap.fromTo(
      before,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      after,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div
        ref={containerRef}
        className="w-full max-w-sm p-6 flex flex-col items-center justify-center relative"
      >
        <div
          ref={beforeRef}
          className="w-full mb-8 flex flex-col items-center text-center"
        >
          <img
            src="https://i.pinimg.com/736x/bb/4c/64/bb4c64b7a34d96cba526eeed205ec712.jpg"
            alt="Before Transformation"
            className="w-40 rounded-lg"
          />
          <h2 className="text-xl mt-4">Before | After</h2>
        </div>

        <div
          ref={afterRef}
          className="w-full flex flex-col items-center text-center"
        >
          <img
            src="/img/Trans1.jpg"
            alt="After Transformation"
            className="w-40 rounded-lg"
          />
          <h2 className="text-xl mt-4">Before | After</h2>
        </div>

        {/* Optional Divider */}
        {/* <div className="absolute inset-y-0 left-1/2 w-1 bg-gray-700"></div> */}
        <div
          ref={beforeRef}
          className="w-full mb-8 flex flex-col mt-10 items-center text-center"
        >
          <img
            src="https://i.pinimg.com/736x/e3/27/88/e32788c9b7ccf04b6e7d87318e116063.jpg"
            alt="Before Transformation"
            className="w-40 rounded-lg"
          />
          <h2 className="text-xl mt-4">Before | After</h2>
        </div>
      </div>
    </div>
  );
};

export default Gym;
