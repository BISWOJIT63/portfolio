import React, { useState } from "react";
import { Search, X } from "lucide-react";
import Badge from "./ui/Badge";
import { projectsData, blogData, experienceData } from "../data/portfolioData";

const SearchModal = ({ isOpen, onClose, isDark }) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const allItems = [
    ...projectsData.map((p) => ({
      title: p.title,
      type: "Project",
      link: p.link || "#",
    })),
    ...blogData.map((b) => ({ title: b.title, type: "Blog", link: "#blog" })),
    ...experienceData.map((e) => ({
      title: e.role,
      type: "Experience",
      link: "#experience",
    })),
  ];

  const results = allItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 pt-[15vh] animate-in fade-in duration-200 cursor-default"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg rounded-2xl border shadow-2xl flex flex-col overflow-hidden ${
          isDark
            ? "bg-neutral-950 border-neutral-800 text-white"
            : "bg-white border-neutral-200 text-black"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex items-center px-4 py-3 border-b ${
            isDark ? "border-neutral-800" : "border-neutral-200"
          }`}
        >
          <Search className="w-5 h-5 text-neutral-500 mr-3" />
          <input
            autoFocus
            type="text"
            placeholder="Search projects, blogs, experience..."
            className={`flex-1 bg-transparent border-none outline-none text-sm ${
              isDark
                ? "placeholder:text-neutral-500 text-white"
                : "placeholder:text-neutral-400 text-black"
            }`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-neutral-800/10 transition"
          >
            <X className="w-4 h-4 text-neutral-500" />
          </button>
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {query && results.length === 0 && (
            <div className="p-4 text-center text-sm text-neutral-500">
              No results found for "{query}"
            </div>
          )}
          {results.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={onClose}
              className={`flex items-center justify-between p-3 rounded-xl transition cursor-pointer ${
                isDark ? "hover:bg-neutral-900" : "hover:bg-neutral-100"
              }`}
            >
              <span className="text-sm font-medium">{item.title}</span>
              <Badge variant="secondary" isDark={isDark} className="text-[10px]">
                {item.type}
              </Badge>
            </a>
          ))}
          {!query && (
            <div className="p-4 text-center text-sm text-neutral-500">
              Type to start searching...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
