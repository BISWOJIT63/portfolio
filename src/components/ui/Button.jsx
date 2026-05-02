import React from "react";

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      isDark,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      default: isDark
        ? "bg-white text-black hover:bg-neutral-200"
        : "bg-black text-white hover:bg-neutral-800",
      outline: isDark
        ? "border border-neutral-800 bg-transparent hover:bg-neutral-900 text-neutral-300"
        : "border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700",
      ghost: isDark
        ? "hover:bg-neutral-900 hover:text-white"
        : "hover:bg-neutral-100 hover:text-black",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
