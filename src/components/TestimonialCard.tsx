
import React from "react";

interface TestimonialCardProps {
  name: string;
  position?: string;
  image?: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  position,
  image,
  quote,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gold/10">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={i < rating ? "#D4AF37" : "#e2e8f0"}
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
      <blockquote className="mb-6 text-center">
        <p className="italic text-gray-600">{quote}</p>
      </blockquote>
      <div className="flex items-center justify-center">
        {image && (
          <div className="mr-4">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div className="text-center">
          <div className="font-serif font-semibold text-lg">{name}</div>
          {position && <div className="text-sm text-gray-500">{position}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
