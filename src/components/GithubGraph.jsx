import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubGraph = ({ isDark }) => {
  return (
    <div
      className={`w-full overflow-hidden border rounded-xl p-4 sm:p-6 transition-all duration-300 relative ${
        isDark
          ? "border-neutral-800 bg-neutral-950/50 hover:bg-neutral-900/50 shadow-inner"
          : "border-neutral-200 bg-white hover:bg-neutral-50 shadow-sm"
      }`}
    >
      <style>{`
        @keyframes elegant-glimmer {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.6; filter: brightness(1.4) saturate(1.2); }
        }
        .glimmer-block {
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .glimmer-block:hover {
          transform: scale(1.2);
          filter: brightness(1.6) saturate(1.5);
          z-index: 50;
          position: relative;
        }
      `}</style>
      
      <div className="flex flex-col items-center justify-center overflow-x-auto scrollbar-hide py-2">
        <GitHubCalendar
          username="BISWOJIT63"
          colorScheme={isDark ? "dark" : "light"}
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          hideColorLegend={false}
          showWeekdayLabels={true}
          renderBlock={(block, activity) => {
            // Apply a unique, randomized animation to each contribution square
            return React.cloneElement(block, {
              style: {
                ...block.props.style,
                animation: `elegant-glimmer ${Math.random() * 2 + 0.8}s infinite ${Math.random() * 2}s ease-in-out`,
              },
              className: `glimmer-block ${block.props.className || ""}`,
            });
          }}
        />
      </div>
      <div className="absolute top-2 right-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
        <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-tighter">Live Activity Flow</span>
      </div>
    </div>
  );
};

export default GithubGraph;
