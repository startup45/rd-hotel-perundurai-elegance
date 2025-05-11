
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-charcoal"
        } ${centered ? "mx-auto" : ""}`}
      >
        {title}
        <span className={`block h-1 w-24 mt-4 ${centered ? "mx-auto" : ""} bg-gold`}></span>
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-lg ${light ? "text-white/80" : "text-gray-600"} ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
