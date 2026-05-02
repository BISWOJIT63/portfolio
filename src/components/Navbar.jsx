import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Button from "./ui/Button";
import LogoB from "./LogoB";
import { Github } from "./Icons";

const Navbar = ({
  showLogo,
  isDark,
  toggleTheme,
  onOpenHire,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 mx-auto w-full max-w-[1126px] z-[100] backdrop-blur-lg border-b border-x transition-colors duration-300 ${
        isDark
          ? "bg-[#000000]/60 border-neutral-900/50"
          : "bg-white/80 border-neutral-200"
      }`}
    >
      <div
        className={`w-full mx-auto px-5 sm:px-8 h-14 flex items-center justify-between text-sm font-medium ${
          isDark ? "text-neutral-400" : "text-neutral-500"
        }`}
      >
        {/* Dynamic Logo that slides in on scroll */}
        <div
          className={`transition-all duration-300 ease-in-out transform origin-left overflow-hidden flex items-center ${
            showLogo
              ? "opacity-100 translate-x-0 w-[42px] sm:w-[48px] mr-2 sm:mr-3"
              : "opacity-0 -translate-x-4 pointer-events-none w-0 mr-0"
          }`}
        >
          <a
            href="#home"
            aria-label="Home"
            className="block transition-transform hover:scale-105"
          >
            <LogoB isDark={isDark} className="h-7 w-auto" />
          </a>
        </div>

        {/* Right side content */}
        <div className="flex items-center justify-end gap-4 sm:gap-6 flex-1 overflow-hidden">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className={`transition whitespace-nowrap ${
                isDark ? "hover:text-white" : "hover:text-black"
              }`}
            >
              Portfolio
            </a>
            <a
              href="#blog"
              className={`transition whitespace-nowrap ${
                isDark ? "hover:text-white" : "hover:text-black"
              }`}
            >
              Blog
            </a>
            <a
              href="#experience"
              className={`transition whitespace-nowrap ${
                isDark ? "hover:text-white" : "hover:text-black"
              }`}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={`transition whitespace-nowrap ${
                isDark ? "hover:text-white" : "hover:text-black"
              }`}
            >
              Projects
            </a>
          </div>

          {/* Action Icons */}
          <div
            className={`flex items-center gap-1.5 sm:gap-3 md:border-l md:pl-4 md:pl-6 shrink-0 ${
              isDark ? "md:border-neutral-800" : "md:border-neutral-300"
            }`}
          >
            <div className="hidden md:block">
              <Button
                variant="default"
                size="sm"
                onClick={onOpenHire}
                className="font-bold rounded-md text-xs h-8 px-3"
                isDark={isDark}
              >
                Hire Me
              </Button>
            </div>

            <a
              href="https://github.com/BISWOJIT63"
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-md transition ${
                isDark
                  ? "hover:bg-neutral-900/50 hover:text-white text-neutral-300"
                  : "hover:bg-neutral-100/50 hover:text-black text-neutral-600"
              }`}
            >
              <Github className="w-[18px] h-[18px]" />
            </a>

            <div
              className={`relative z-[60] flex w-[1px] h-4 mx-0.5 ${
                isDark ? "bg-neutral-800" : "bg-neutral-300"
              }`}
            ></div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md transition ${
                isDark
                  ? "hover:bg-neutral-900/50 hover:text-white text-neutral-300"
                  : "hover:bg-neutral-100/50 hover:text-black text-neutral-600"
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-[18px] h-[18px]" />
              ) : (
                <Moon className="w-[18px] h-[18px]" />
              )}
            </button>

            <button
              className={`md:hidden p-1.5 rounded-[10px] border transition ml-0.5 ${
                isDark
                  ? "hover:bg-neutral-800 hover:text-white bg-neutral-900/80 border-neutral-800"
                  : "hover:bg-neutral-200 hover:text-black bg-neutral-100 border-neutral-200"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Popover */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[64px] right-4 w-[200px] rounded-[20px] animate-in fade-in slide-in-from-top-2 duration-200">
            <div
              className={`w-full p-2.5 rounded-[20px] border shadow-2xl flex flex-col gap-1 text-[13.5px] font-medium ${
                isDark
                  ? "border-neutral-800 bg-[#161616]/95 backdrop-blur-2xl shadow-black/80"
                  : "border-neutral-200 bg-white/95 backdrop-blur-2xl shadow-black/5"
              }`}
            >
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-[12px] transition ${
                  isDark
                    ? "hover:bg-neutral-800 hover:text-white text-neutral-100"
                    : "hover:bg-neutral-100 hover:text-black text-neutral-800"
                }`}
              >
                Portfolio
              </a>
              <a
                href="#blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-[12px] transition ${
                  isDark
                    ? "hover:bg-neutral-800 hover:text-white text-neutral-100"
                    : "hover:bg-neutral-100 hover:text-black text-neutral-800"
                }`}
              >
                Blog
              </a>
              <a
                href="#experience"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-[12px] transition ${
                  isDark
                    ? "hover:bg-neutral-800 hover:text-white text-neutral-100"
                    : "hover:bg-neutral-100 hover:text-black text-neutral-800"
                }`}
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-[12px] transition ${
                  isDark
                    ? "hover:bg-neutral-800 hover:text-white text-neutral-100"
                    : "hover:bg-neutral-100 hover:text-black text-neutral-800"
                }`}
              >
                Projects
              </a>
              <div
                className={`h-[1px] w-full my-1 ${
                  isDark ? "bg-neutral-800" : "bg-neutral-200"
                }`}
              ></div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenHire();
                }}
                className={`w-full mt-1 px-4 py-2 font-bold rounded-[12px] text-center transition ${
                  isDark
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-black text-white hover:bg-neutral-800"
                }`}
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
