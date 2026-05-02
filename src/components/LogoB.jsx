import React from "react";

const LogoB = ({ isDark = true, className = "h-8 w-auto" }) => (
  <svg
    viewBox="0 0 96 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-colors duration-300 ${
      isDark ? "text-white" : "text-black"
    } ${className}`}
  >
    {/* --- Letter B --- */}
    <rect x="2" y="0" width="40" height="12" rx="3" fill="currentColor" />
    <rect x="0" y="14" width="12" height="12" rx="3" fill="currentColor" />
    <rect x="32" y="14" width="12" height="12" rx="3" fill="currentColor" />
    <rect x="2" y="28" width="40" height="12" rx="3" fill="currentColor" />
    <rect x="0" y="42" width="12" height="12" rx="3" fill="currentColor" />
    <rect x="32" y="42" width="12" height="12" rx="3" fill="currentColor" />
    <rect x="2" y="56" width="40" height="12" rx="3" fill="currentColor" />

    {/* --- Letter S --- */}
    <rect x="54" y="0" width="40" height="12" rx="3" fill="currentColor" />
    <rect x="52" y="14" width="12" height="12" rx="3" fill="currentColor" />
    <rect x="54" y="28" width="40" height="12" rx="3" fill="currentColor" />
    <rect x="84" y="42" width="12" height="12" rx="3" fill="currentColor" />
    <rect x="54" y="56" width="40" height="12" rx="3" fill="currentColor" />
  </svg>
);

export default LogoB;
