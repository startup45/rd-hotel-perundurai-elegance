
import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  iconColor = "text-maroon",
}: FeatureCardProps) => {
  return (
    <div className="card-luxury p-6 flex flex-col items-center text-center">
      <div className={`${iconColor} bg-ivory rounded-full p-4 mb-4`}>
        <Icon size={28} />
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
