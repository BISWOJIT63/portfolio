import React from "react";

const SectionHeading = ({ children, isDark }) => (
  <h2
    className={`text-xl font-bold mb-6 flex items-center gap-2 ${
      isDark ? "text-neutral-100" : "text-neutral-900"
    }`}
  >
    {children}
  </h2>
);

export default SectionHeading;
