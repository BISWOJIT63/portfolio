import React from "react";

const Input = React.forwardRef(
  ({ className = "", isDark, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
          isDark
            ? "border-neutral-800 bg-neutral-950 text-neutral-50 placeholder:text-neutral-600 focus-visible:ring-1 focus-visible:ring-neutral-700"
            : "border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-1 focus-visible:ring-neutral-300"
        } ${className}`}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Input;
