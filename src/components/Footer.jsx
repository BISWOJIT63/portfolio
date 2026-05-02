import React from "react";
import LogoB from "./LogoB";
import { profileData } from "../data/portfolioData";

const Footer = ({ isDark }) => {
  return (
    <footer
      className={`border-t pt-16 pb-8 flex flex-col items-center justify-center gap-6 w-full ${
        isDark ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <LogoB isDark={isDark} />
      <div
        className={`text-2xl font-light tracking-[0.3em] ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        B<span className="text-neutral-500">ISWOJIT</span>
      </div>
      <p className="text-xs text-neutral-500 mt-4">
        Built with React & Tailwind CSS. Designed by {profileData.name}.
      </p>
    </footer>
  );
};

export default Footer;
