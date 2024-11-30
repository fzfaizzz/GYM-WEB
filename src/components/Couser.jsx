import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Update cursor coordinates on mouse move
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX + window.scrollX;
      coords.current.y = e.clientY + window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animate cursor
    const animateCursor = () => {
      if (cursorRef.current) {
        const { x, y } = coords.current;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Cleanup event listener
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-50"
      style={{ transition: "transform 0.1s linear" }}
    ></div>
  );
};

export default Cursor;
