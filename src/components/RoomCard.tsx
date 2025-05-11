
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Clock, Utensils } from "lucide-react";

interface RoomCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  link: string;
}

const RoomCard = ({
  image,
  name,
  description,
  price,
  features,
  link,
}: RoomCardProps) => {
  // Map feature name to icon
  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes("wifi")) return <Wifi size={16} />;
    if (feature.toLowerCase().includes("service")) return <Clock size={16} />;
    if (feature.toLowerCase().includes("breakfast")) return <Utensils size={16} />;
    return null;
  };

  return (
    <div className="card-luxury group">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-maroon text-white px-3 py-1 rounded text-sm font-medium">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="border-t border-gray-100 pt-4 mb-6">
          <div className="flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center text-sm text-gray-600 bg-ivory px-3 py-1 rounded-full"
              >
                {getFeatureIcon(feature)}
                <span className="ml-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Link to={link}>
          <Button className="btn-primary w-full">Book This Room</Button>
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
