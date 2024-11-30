import { useEffect } from "react";
import { gsap } from "gsap";

const Preloader = ({ setIsLoaded, message = "WELCOME", duration = 1.5 }) => {
  useEffect(() => {
    const timeline = gsap.timeline();

    // Preloader Animation
    timeline
      .to(".preloader-logo", {
        opacity: 1,
        scale: 2.2,
        duration: duration / 2,
        ease: "expo.out", // Smooth scale-in animation
      })
      .to(".preloader-logo", {
        opacity: 0,
        scale: 1,
        duration: duration / 2,
        delay: duration / 2,
        ease: "expo.in", // Smooth fade-out
      })
      .to(".preloader", {
        y: "-100%",
        duration: 1,
        ease: "expo.out", // Gentle slide-out animation
      })
      .call(() => setIsLoaded(true)); // Notify parent that the preloader is complete

    return () => timeline.kill(); // Cleanup animation
  }, [setIsLoaded, duration]);

  return (
    <div
      className="preloader fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center"
      aria-hidden="true"
    >
      <h1 className="preloader-logo text-white text-[30vh] font-[anzo5] opacity-0">
        {message}
      </h1>
    </div>
  );
};

export default Preloader;
