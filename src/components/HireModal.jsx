import React from "react";
import { X, Mail, PhoneCall, Download } from "lucide-react";
import Button from "./ui/Button";

const HireModal = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200 cursor-default"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-sm p-6 rounded-2xl border shadow-2xl cursor-default ${
          isDark
            ? "bg-neutral-950 border-neutral-800 text-white"
            : "bg-white border-neutral-200 text-black"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 rounded-md"
          isDark={isDark}
        >
          <X className="w-5 h-5" />
        </Button>
        <h2 className="text-xl font-bold mb-6">Let's Work Together</h2>
        <div className="space-y-4">
          <div
            className={`p-4 rounded-xl border space-y-4 ${
              isDark
                ? "border-neutral-800 bg-neutral-900/50"
                : "border-neutral-200 bg-neutral-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Mail
                className={`w-5 h-5 ${isDark ? "text-blue-400" : "text-blue-600"}`}
              />
              <span className="font-medium text-sm">
                tanmaytiwaricyber@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall
                className={`w-5 h-5 ${
                  isDark ? "text-green-400" : "text-green-600"
                }`}
              />
              <span className="font-medium text-sm">+91 404-000-0000</span>
            </div>
          </div>
          <Button
            className="w-full py-6 rounded-xl font-bold text-base"
            isDark={isDark}
            onClick={() => (window.location.href = "#")}
          >
            <Download className="w-5 h-5 mr-2" /> Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HireModal;
