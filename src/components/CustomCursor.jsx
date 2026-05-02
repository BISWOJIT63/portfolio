import React, { useState, useEffect, useRef } from "react";

const CustomCursor = ({ isDark, isHidden }) => {
  const cursorRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  
  // Track mouse position and current cursor position for interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const updateMousePos = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const updateCursorType = (e) => {
      const target = e.target.closest('a, button, input, [role="button"], .group');
      setIsPointer(!!target);
    };

    const animate = () => {
      // Linear Interpolation (lerp) for smooth trailing effect
      // current = current + (target - current) * factor
      const lerpFactor = 0.15;
      
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("mouseover", updateCursorType);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("mouseover", updateCursorType);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999] will-change-transform ${
        isHidden ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      style={{ 
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.3s ease, visibility 0.3s ease'
      }}
    >
      <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
        {/* Outer Ring */}
        <div
          className={`absolute w-8 h-8 rounded-full border transition-all duration-500 ease-out ${
            isPointer
              ? isDark
                ? "scale-[2.5] bg-white/10 border-white/20"
                : "scale-[2.5] bg-black/5 border-black/20"
              : "scale-100"
          } ${isDark ? "border-white/40" : "border-black/40"}`}
        />
        {/* Inner Dot */}
        <div
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            isDark ? "bg-white" : "bg-black"
          } ${isPointer ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        />
      </div>
    </div>
  );
};

export default CustomCursor;
