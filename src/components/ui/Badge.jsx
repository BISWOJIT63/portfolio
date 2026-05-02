import React from "react";

const Badge = ({
  className = "",
  variant = "default",
  isDark,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variants = {
    default: isDark
      ? "border-transparent bg-neutral-800 text-neutral-50"
      : "border-transparent bg-neutral-900 text-neutral-50",
    secondary: isDark
      ? "bg-neutral-900 border-neutral-800 text-neutral-300"
      : "bg-white border-neutral-200 text-neutral-600 shadow-sm",
    outline: isDark
      ? "text-neutral-400 border-neutral-800 bg-black"
      : "text-neutral-600 border-neutral-200 bg-neutral-100",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
