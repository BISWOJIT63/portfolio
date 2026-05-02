import React, { useState, useEffect } from "react";
import {
  MapPin,
  Globe,
  Mail,
  Briefcase,
  User,
  Calendar,
  Languages,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  Trophy,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Smartphone,
  Sun,
  Moon,
  Command,
  Volume2,
  MessageCircle,
  X,
  Send,
  Bot,
  Phone,
  Clock,
  Lightbulb,
  Download,
  PhoneCall,
  Menu,
  Verified,
  GraduationCap,
} from "lucide-react";

// Assets
import profilepic from "./assets/profilepic.png";
import flag from "./assets/flag.png";

// Data
import {
  profileData,
  experienceData,
  projectsData,
  blogData,
  socialLinks,
} from "./data/portfolioData";

// UI Components
import Button from "./components/ui/Button";
import Badge from "./components/ui/Badge";
import Input from "./components/ui/Input";
import SectionHeading from "./components/ui/SectionHeading";

// Icons & Logo
import {
  Github,
  Linkedin,
  Twitter,
  FileText,
  XIcon,
  DiscordIcon,
  LeetCodeIcon,
} from "./components/Icons";
import LogoB from "./components/LogoB";

// Feature Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import HireModal from "./components/HireModal";
import GithubGraph from "./components/GithubGraph";
import Chatbot from "./components/Chatbot";
import { stack } from "./data/stack.js";

const ICONS = {
  Github,
  Linkedin,
  Twitter,
  FileText,
  XIcon,
  DiscordIcon,
  LeetCodeIcon,
};

export default function App() {
  const [scrolledPastLogo, setScrolledPastLogo] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  // Rotating domains state
  const domains = [
    "AI Agents & Telegram Bots",
    "Full Stack Web Development",
    "Open Source Contribution",
    "System Architecture",
  ];
  const [domainIndex, setDomainIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTime, setCurrentTime] = useState("10:09 // same time");
  const [activeStack, setActiveStack] = useState(null);

  useEffect(() => {
    document.documentElement.style.backgroundColor = isDark
      ? "#000000"
      : "#ffffff";
    document.body.style.backgroundColor = isDark ? "#000000" : "#ffffff";
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Typewriter Animation Effect
  useEffect(() => {
    const currentDomain = domains[domainIndex];
    const speed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentDomain) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setDomainIndex((prev) => (prev + 1) % domains.length);
      } else {
        setDisplayText(
          currentDomain.substring(
            0,
            displayText.length + (isDeleting ? -1 : 1),
          ),
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, domainIndex]);

  // Dynamic Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      });
      setCurrentTime(`${timeString} // same time`);
    };
    updateTime();
    const int = setInterval(updateTime, 10000);
    return () => clearInterval(int);
  }, []);

  // Clear active stack name after 2 seconds
  useEffect(() => {
    if (activeStack) {
      const timer = setTimeout(() => setActiveStack(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [activeStack]);

  // Text-to-speech function
  const speakName = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      const utterance = new SpeechSynthesisUtterance(
        "hey, my self Beeswojit Sahoo",
      );
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Native Web Audio API Sound effect for clicks
  useEffect(() => {
    const playClickSound = () => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(
          300,
          audioCtx.currentTime + 0.1,
        );
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioCtx.currentTime + 0.1,
        );
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.1);
      } catch (e) {
        console.error("Audio playback failed", e);
      }
    };

    const handleClick = (e) => {
      if (e.target.closest("a, button")) {
        playClickSound();
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // Enable smooth scrolling and track scroll position for the Navbar logo
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      // Show logo when scrolled past 150px (approximate bottom of the top logo)
      if (window.scrollY > 150) {
        setScrolledPastLogo(true);
      } else {
        setScrolledPastLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`min-h-screen font-mono transition-colors duration-300 ${
        isDark
          ? "bg-[#000000] text-neutral-300 selection:bg-neutral-800 selection:text-white"
          : "bg-white text-neutral-700 selection:bg-neutral-200 selection:text-black"
      }`}
    >
      <style>{`
        ${!isHireModalOpen ? "* { cursor: none !important; }" : ""}
        ::-webkit-scrollbar { width: 8px; }

        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${
          isDark ? "#333" : "#ccc"
        }; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${
          isDark ? "#555" : "#aaa"
        }; }
      `}</style>

      <CustomCursor isDark={isDark} isHidden={isHireModalOpen} />
      <HireModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        isDark={isDark}
      />

      {/* Restored Dotted Background (Radial Gradient) */}
      <div
        className={`fixed inset-0 z-[0] pointer-events-none ${
          isDark ? "opacity-10" : "opacity-[0.05]"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          color: isDark ? "white" : "black",
        }}
      ></div>

      <div className="relative z-10">
        <Navbar
          showLogo={scrolledPastLogo}
          isDark={isDark}
          toggleTheme={() => setIsDark(!isDark)}
          onOpenHire={() => setIsHireModalOpen(true)}
        />

        <main className="flex flex-col gap-12 relative w-full overflow-x-hidden">
          {/* --- HERO / PROFILE SECTION (Grid Layout) --- */}
          <div className="flex flex-col mt-8">
            {/* Logo Row */}
            <div
              id="home"
              className={`flex justify-center pt-16 pb-12 scroll-mt-24 border-b ${
                isDark ? "border-neutral-800" : "border-neutral-300"
              }`}
            >
              <LogoB isDark={isDark} className="h-16 w-auto" />
            </div>

            {/* Avatar & Name Row */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-[40%_60%] border-b relative ${
                isDark ? "border-neutral-800" : "border-neutral-300"
              }`}
            >
              {/* Diagonal background specific to Avatar & Name */}
              <div
                className="absolute inset-0 z-[-1] opacity-[0.08]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 8px)",
                  color: isDark ? "white" : "black",
                }}
              ></div>
              <div
                className={`p-8 border-b sm:border-b-0 flex justify-center items-center ${
                  isDark ? "border-neutral-800" : "border-neutral-300"
                }`}
              >
                <div className="relative group">
                  {/* Flag peeking from behind */}
                  <img
                    src={flag}
                    alt="Flag"
                    className="absolute top-1/2 -right-25 -translate-y-1/2 w-50 h-50 object-contain opacity-80 transition-transform duration-500 group-hover:translate-x-2 z-0"
                  />
                  <img
                    src={profilepic}
                    alt="Profile Avatar"
                    className={`w-32 h-32 rounded-full border-2 object-cover object-[55%_5%] relative z-10 ${
                      isDark
                        ? "border-neutral-800 bg-neutral-900"
                        : "border-neutral-200 bg-white"
                    }`}
                  />
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center relative z-10">
                <p
                  className={`text-xs mb-1 font-mono uppercase tracking-wider ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  {/* Status text or empty */}
                  {profileData.status}
                </p>
                <h1
                  className={`text-3xl sm:text-4xl font-bold flex flex-nowrap items-center gap-2 mb-1 whitespace-nowrap ${
                    isDark ? "text-white" : "text-neutral-950"
                  }`}
                >
                  <span className="leading-tight shrink-0">
                    {profileData.name}
                  </span>
                  <div className="flex items-center gap-1.5 mt-[-1px] shrink-0">
                    <Verified className="w-6 h-6 text-blue-500 fill-blue-500/20" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakName();
                      }}
                      className={`p-1.5 rounded-full transition-colors ${
                        isDark
                          ? "hover:bg-neutral-800 text-neutral-400 hover:text-white"
                          : "hover:bg-neutral-200 text-neutral-500 hover:text-black"
                      }`}
                      title="Hear my name"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </h1>
                <p
                  className={`text-sm h-5 font-mono ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Info Grid Row */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-[40%_60%] border-b ${
                isDark ? "border-neutral-800" : "border-neutral-300"
              }`}
            >
              <div
                className={`p-6 sm:p-8 border-b sm:border-b-0 flex flex-col gap-4 text-sm ${
                  isDark
                    ? "border-neutral-800 text-neutral-400"
                    : "border-neutral-300 text-neutral-600"
                }`}
              >
                <div
                  className={`flex items-center gap-3 font-medium ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <Lightbulb
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  Founder @Lazy Coderz(Hackathon Team)
                </div>
                <div
                  className={`flex items-center gap-3 font-medium ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <Briefcase
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  Freelancer @Lets Do It
                </div>
                <div className="flex items-center gap-3">
                  <MapPin
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  India
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  6370115231
                </div>
                <div className="flex items-center gap-3">
                  <Mail
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  biswojitsahoo165@gmail.com
                </div>
              </div>

              <div
                className={`p-6 sm:p-8 flex flex-col gap-4 text-sm ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <User
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  he/him
                </div>
                <div className="flex items-center gap-3">
                  <Clock
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  {currentTime}
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  6370115231
                </div>
                <div className="flex items-center gap-3">
                  <Globe
                    className={`w-4 h-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />{" "}
                  <a
                    href="#"
                    className={`transition ${
                      isDark ? "hover:text-white" : "hover:text-black"
                    }`}
                  >
                    Under Constuction
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1126px] mx-auto px-5 sm:px-8 flex flex-col gap-12">
            {/* Socials Link Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => {
                const IconComponent = ICONS[social.iconName];

                return (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-4 border rounded-xl transition-all duration-300 group ${
                      isDark
                        ? "border-neutral-800 hover:bg-neutral-900/50 hover:border-neutral-700"
                        : "border-neutral-200 bg-white hover:bg-neutral-50 shadow-sm hover:border-neutral-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-xl shadow-sm transition-transform group-hover:scale-105 ${
                          social.id === "github" && isDark
                            ? "bg-neutral-900"
                            : social.bg
                        }`}
                      >
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span
                          className={`text-[15px] font-bold ${
                            isDark ? "text-white" : "text-black"
                          }`}
                        >
                          {social.label}
                        </span>
                        <span
                          className={`text-[13px] ${
                            isDark ? "text-neutral-500" : "text-neutral-500"
                          }`}
                        >
                          {social.user}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        isDark
                          ? "bg-neutral-800 text-white"
                          : "bg-neutral-100 text-black"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>

            <hr
              className={`border-t ${isDark ? "border-neutral-900" : "border-neutral-100"}`}
            />

            {/* --- ABOUT SECTION --- */}
            <section id="about" className="scroll-mt-24">
              <SectionHeading isDark={isDark}>About</SectionHeading>
              <div
                className={`space-y-4 text-sm leading-relaxed whitespace-pre-line ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {profileData.about}
              </div>
            </section>

            <hr
              className={`border-t ${isDark ? "border-neutral-900" : "border-neutral-100"}`}
            />

            {/* --- GITHUB ACTIVITY --- */}

            {/* --- GITHUB ACTIVITY --- */}
            <section>
              <GithubGraph isDark={isDark} />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div
                  className={`p-3 border rounded-lg ${
                    isDark
                      ? "border-neutral-800 bg-neutral-950/50"
                      : "border-neutral-200 bg-white shadow-sm"
                  }`}
                >
                  <p className="text-xs text-neutral-500 mb-1">
                    Created a pull request in
                  </p>
                  <p
                    className={`text-sm flex items-center gap-1 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <Github className="w-3 h-3" /> Biswojit/website-builder
                  </p>
                </div>
                <div
                  className={`p-3 border rounded-lg ${
                    isDark
                      ? "border-neutral-800 bg-neutral-950/50"
                      : "border-neutral-200 bg-white shadow-sm"
                  }`}
                >
                  <p className="text-xs text-neutral-500 mb-1">
                    Pushed commits to repository
                  </p>
                  <p
                    className={`text-sm flex items-center gap-1 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <Github className="w-3 h-3" /> Biswojit/MERN-API
                  </p>
                </div>
                <div
                  className={`p-3 border rounded-lg ${
                    isDark
                      ? "border-neutral-800 bg-neutral-950/50"
                      : "border-neutral-200 bg-white shadow-sm"
                  }`}
                >
                  <p className="text-xs text-neutral-500 mb-1">
                    Starred repository
                  </p>
                  <p
                    className={`text-sm flex items-center gap-1 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <Github className="w-3 h-3" /> facebook/react
                  </p>
                </div>
              </div>
            </section>

            <section id="stack" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-6 h-8">
                <SectionHeading isDark={isDark}>Stack</SectionHeading>
                {activeStack && (
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold animate-in fade-in slide-in-from-right-2 duration-300 ${
                      isDark
                        ? "bg-white text-black"
                        : "bg-neutral-900 text-white"
                    }`}
                  >
                    Active: {activeStack}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                {stack.map((item, i) => (
                  <div key={i} className="group relative">
                    {/* Hover Tooltip */}
                    <div
                      className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded md text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 shadow-lg ${
                        isDark
                          ? "bg-white text-black translate-y-1 group-hover:translate-y-0"
                          : "bg-neutral-900 text-white translate-y-1 group-hover:translate-y-0"
                      }`}
                    >
                      {item.name}
                      {/* Tooltip Arrow */}
                      <div
                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${isDark ? "bg-white" : "bg-neutral-900"}`}
                      ></div>
                    </div>

                    <button
                      onClick={() => setActiveStack(item.name)}
                      className={`w-16 h-16 flex items-center justify-center rounded-md border transition-all duration-300 group-hover:scale-105 active:scale-95 ${
                        isDark
                          ? "bg-neutral-900 border-neutral-800 hover:border-neutral-700"
                          : "bg-white border-neutral-200 shadow-sm hover:border-neutral-300"
                      } ${
                        activeStack === item.name
                          ? isDark
                            ? "ring-2 ring-white"
                            : "ring-2 ring-neutral-900"
                          : ""
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8"
                        style={{
                          filter:
                            isDark &&
                            ["Next.js", "Express", "OpenAI"].includes(item.name)
                              ? "invert(1)"
                              : "none",
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <hr
              className={`border-t ${isDark ? "border-neutral-900" : "border-neutral-100"}`}
            />

            {/* --- BLOG SECTION --- */}
            <section id="blog" className="scroll-mt-24">
              <SectionHeading isDark={isDark}>Blog</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {blogData.map((blog) => (
                  <div key={blog.id} className="group cursor-pointer">
                    <div
                      className={`overflow-hidden rounded-xl border mb-3 relative ${
                        isDark ? "border-neutral-800" : "border-neutral-200"
                      }`}
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-md">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3
                      className={`font-medium transition leading-snug ${
                        isDark
                          ? "text-neutral-200 group-hover:text-white"
                          : "text-neutral-800 group-hover:text-black"
                      }`}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-2">{blog.date}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  className="rounded-full text-xs h-8"
                  isDark={isDark}
                >
                  Show all <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </section>

            <hr
              className={`border-t ${isDark ? "border-neutral-900" : "border-neutral-100"}`}
            />

            {/* --- EXPERIENCE SECTION --- */}
            <section id="experience" className="scroll-mt-24">
              <SectionHeading isDark={isDark}>Experience</SectionHeading>
              <div className="space-y-6">
                {experienceData.map((exp, index) => (
                  <div key={exp.id} className="relative pl-6">
                    {/* Vertical Timeline Line & Dot */}
                    <div
                      className={`absolute left-0 top-2 bottom-0 w-[1px] hidden sm:block ${
                        isDark ? "bg-neutral-800" : "bg-neutral-200"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-neutral-500 ring-4 z-10 hidden sm:block ${
                        isDark ? "ring-black" : "ring-slate-50"
                      }`}
                    ></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3
                        className={`font-semibold text-base flex items-center gap-2 ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        {exp.role}
                        {index === 0 && (
                          <span className="bg-blue-500/20 text-blue-500 text-[10px] px-2 py-0.5 rounded-full font-medium">
                            New
                          </span>
                        )}
                      </h3>
                      <span className="text-xs text-neutral-500">
                        {exp.date}
                      </span>
                    </div>
                    <p
                      className={`text-sm mb-3 ${
                        isDark ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      {exp.company}
                    </p>

                    {exp.details.length > 0 && (
                      <ul
                        className={`list-disc list-inside text-sm space-y-2 mb-4 ${
                          isDark ? "text-neutral-400" : "text-neutral-600"
                        }`}
                      >
                        {exp.details.map((detail, i) => (
                          <li key={i} className="leading-relaxed">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            isDark={isDark}
                            className="text-[11px]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Added Education mocked structure since it's on the screenshot */}
                <div
                  className={`pt-4 border-t ${
                    isDark ? "border-neutral-900" : "border-neutral-200"
                  }`}
                >
                  <h3 className="text-neutral-500 text-sm font-medium mb-4">
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? "border-neutral-800 bg-neutral-950/30 hover:bg-neutral-900/50"
                        : "border-neutral-200 bg-white shadow-sm hover:bg-neutral-50"
                    }`}>
                      <div
                        className={`text-sm flex items-center gap-2 ${
                          isDark ? "text-neutral-300" : "text-neutral-800"
                        }`}
                      >
                        <GraduationCap className="h-4 w-4 text-neutral-500" />
                        BCA (Bachelor of Computer Applications)
                      </div>
                      <div className="text-xs text-neutral-500">
                        2023 - 2026
                      </div>
                    </div>
                    <div className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? "border-neutral-800 bg-neutral-950/30 hover:bg-neutral-900/50"
                        : "border-neutral-200 bg-white shadow-sm hover:bg-neutral-50"
                    }`}>
                      <div
                        className={`text-sm flex items-center gap-2 ${
                          isDark ? "text-neutral-300" : "text-neutral-800"
                        }`}
                      >
                        <GraduationCap className="h-4 w-4 text-neutral-500" />
                        Class 12 (Senior Secondary)
                      </div>
                      <div className="text-xs text-neutral-500">
                        2021 - 2023
                      </div>
                    </div>
                    <div className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? "border-neutral-800 bg-neutral-950/30 hover:bg-neutral-900/50"
                        : "border-neutral-200 bg-white shadow-sm hover:bg-neutral-50"
                    }`}>
                      <div
                        className={`text-sm flex items-center gap-2 ${
                          isDark ? "text-neutral-300" : "text-neutral-800"
                        }`}
                      >
                        <GraduationCap className="h-4 w-4 text-neutral-500" />
                        Class 10 (Secondary Education)
                      </div>
                      <div className="text-xs text-neutral-500">
                        2020 - 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr
              className={`border-t ${isDark ? "border-neutral-900" : "border-neutral-100"}`}
            />

            {/* --- PROJECTS SECTION --- */}
            <section id="projects" className="scroll-mt-24">
              <SectionHeading isDark={isDark}>Projects</SectionHeading>
              <div className="flex flex-col gap-4">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className={`group p-5 rounded-2xl border transition duration-300 ${
                      isDark
                        ? "border-neutral-800 bg-neutral-950/30 hover:bg-neutral-900/50"
                        : "border-neutral-200 bg-white hover:bg-neutral-50 shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className={`text-lg font-semibold flex items-center gap-2 ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded flex items-center justify-center text-xs ${
                            isDark ? "bg-neutral-800" : "bg-neutral-100"
                          }`}
                        >
                          <Code2 className="w-3.5 h-3.5" />
                        </div>
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        className={`p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border ${
                          isDark
                            ? "bg-neutral-900 border-neutral-800"
                            : "bg-white border-neutral-200 hover:bg-neutral-100"
                        }`}
                      >
                        <ArrowUpRight
                          className={`w-4 h-4 ${
                            isDark ? "text-white" : "text-black"
                          }`}
                        />
                      </a>
                    </div>
                    <p className="text-xs text-neutral-500 mb-4">
                      {project.date}
                    </p>
                    <p
                      className={`text-sm leading-relaxed mb-6 whitespace-pre-line ${
                        isDark ? "text-neutral-400" : "text-neutral-600"
                      }`}
                    >
                      {project.description}
                    </p>
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            isDark={isDark}
                            className="text-[10px] rounded"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* --- HONORS & CERTIFICATIONS --- */}
            <div className="flex flex-col gap-12">
              <section>
                <SectionHeading isDark={isDark}>Honors & Awards</SectionHeading>
                <div
                  className={`flex items-start gap-4 p-4 border rounded-xl transition-all duration-300 ${
                    isDark
                      ? "border-neutral-800 bg-neutral-950/30 hover:bg-neutral-900/50"
                      : "border-neutral-200 bg-white shadow-sm hover:bg-neutral-50"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg border ${
                      isDark
                        ? "bg-neutral-900 border-neutral-800"
                        : "bg-neutral-50 border-neutral-200"
                    }`}
                  >
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-neutral-900"
                      }`}
                    >
                      GSSoC'24 2024
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      GirlScript Foundation • Contributor
                    </p>
                  </div>
                </div>
              </section>

              <hr
                className={`border-t sm:hidden ${isDark ? "border-neutral-900" : "border-neutral-100"}`}
              />

              <section>
                <SectionHeading isDark={isDark}>Certifications</SectionHeading>
                <div className="space-y-4">
                  <div
                    className={`flex items-start gap-4 p-4 border rounded-xl transition-all duration-300 ${
                      isDark
                        ? "border-neutral-800 bg-neutral-950/30 hover:bg-neutral-900/50"
                        : "border-neutral-200 bg-white shadow-sm hover:bg-neutral-50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg border ${
                        isDark
                          ? "bg-neutral-900 border-neutral-800"
                          : "bg-neutral-50 border-neutral-200"
                      }`}
                    >
                      <BookOpen className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        Git and GitHub Master
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1">
                        HackerRank • Aug 2024
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex items-start gap-4 p-4 border rounded-xl transition-all duration-300 ${
                      isDark
                        ? "border-neutral-800 bg-neutral-950/30 hover:bg-neutral-900/50"
                        : "border-neutral-200 bg-white shadow-sm hover:bg-neutral-50"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg border ${
                        isDark
                          ? "bg-neutral-900 border-neutral-800"
                          : "bg-neutral-50 border-neutral-200"
                      }`}
                    >
                      <Code2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        React Basics
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1">
                        HackerRank • Jul 2024
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer isDark={isDark} />
      </div>

      {/* AI Chatbot Widget */}
      <Chatbot isDark={isDark} />
    </div>
  );
}
    