
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { 
  Wifi, Clock, Phone, MapPin, Utensils, 
  Dumbbell, Car, SwimmingPool, Coffee
} from "lucide-react";

const Amenities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Hotel Amenities"
        subtitle="Enjoy our comprehensive range of services and facilities for a comfortable stay"
        backgroundImage="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=2070"
      />

      {/* All Amenities */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="At Your Service"
            subtitle="Discover all the facilities and services available for our valued guests"
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            <FeatureCard
              icon={Clock}
              title="24/7 Reception"
              description="Our front desk is staffed around the clock to assist with all your needs and inquiries."
            />
            <FeatureCard
              icon={Wifi}
              title="Free High-Speed WiFi"
              description="Stay connected with complimentary high-speed internet access throughout the property."
            />
            <FeatureCard
              icon={Car}
              title="Free Parking"
              description="Secure and convenient parking available for all guests at no additional charge."
            />
            <FeatureCard
              icon={Utensils}
              title="Room Service"
              description="Enjoy delicious meals in the comfort of your room with our prompt room service."
            />
            <FeatureCard
              icon={SwimmingPool}
              title="Swimming Pool"
              description="Take a refreshing dip in our outdoor swimming pool with lounging area."
            />
            <FeatureCard
              icon={Dumbbell}
              title="Fitness Center"
              description="Maintain your workout routine in our well-equipped fitness center."
            />
            <FeatureCard
              icon={MapPin}
              title="Travel Desk"
              description="Assistance with travel arrangements, car rentals, and local sightseeing tours."
            />
            <FeatureCard
              icon={Coffee}
              title="Business Center"
              description="Full-service business center with printing, copying, and other office services."
            />
            <FeatureCard
              icon={Phone}
              title="Doctor on Call"
              description="Medical assistance available on request for your peace of mind."
            />
            <FeatureCard
              icon={Clock}
              title="Laundry Service"
              description="Same-day laundry and dry cleaning services available for your convenience."
            />
            <FeatureCard
              icon={Utensils}
              title="Breakfast Buffet"
              description="Start your day with our extensive breakfast buffet featuring local and international cuisine."
            />
            <FeatureCard
              icon={MapPin}
              title="Concierge Services"
              description="Our knowledgeable concierge staff can help with dinner reservations, show tickets, and more."
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Additional Services"
            subtitle="Enhance your stay with our premium offerings"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4">Transportation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-maroon mr-3 mt-1">
                    <Car size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Airport Transfers</h4>
                    <p className="text-gray-600 text-sm">Private airport pickup and drop-off in comfortable vehicles. Advance booking required.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-maroon mr-3 mt-1">
                    <Car size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Car Rental</h4>
                    <p className="text-gray-600 text-sm">Wide range of vehicles available for rent with or without chauffeur service.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-maroon mr-3 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Sightseeing Tours</h4>
                    <p className="text-gray-600 text-sm">Customized local tours to explore the attractions of Perundurai and surrounding areas.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-serif text-2xl font-semibold mb-4">Business Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-maroon mr-3 mt-1">
                    <Coffee size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Meeting Rooms</h4>
                    <p className="text-gray-600 text-sm">Well-equipped meeting spaces with audio-visual facilities for small gatherings.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-maroon mr-3 mt-1">
                    <Wifi size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Video Conferencing</h4>
                    <p className="text-gray-600 text-sm">High-quality video conferencing facilities for virtual meetings and presentations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-maroon mr-3 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Secretarial Services</h4>
                    <p className="text-gray-600 text-sm">Professional assistance with printing, copying, scanning, and other administrative tasks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Amenities;
