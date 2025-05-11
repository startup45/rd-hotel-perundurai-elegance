
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttons?: Array<{
    text: string;
    link: string;
    variant: "primary" | "secondary";
  }>;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttons,
}: HeroSectionProps) => {
  return (
    <div
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {subtitle}
            </p>
          )}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {buttons.map((button, index) => (
                <Link key={index} to={button.link}>
                  <Button
                    className={
                      button.variant === "primary"
                        ? "btn-primary"
                        : "btn-secondary bg-transparent border border-white text-white hover:bg-white/20"
                    }
                  >
                    {button.text}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
