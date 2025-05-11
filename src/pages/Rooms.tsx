
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import RoomCard from "@/components/RoomCard";

const Rooms = () => {
  // Rooms data
  const rooms = [
    {
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      name: "Deluxe Room",
      description: "Spacious room with modern amenities and city view. Perfect for business travelers and couples.",
      price: "₹3,500/night",
      features: ["Free WiFi", "AC", "Room Service", "TV", "Toiletries"],
      link: "/rooms/deluxe",
    },
    {
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974",
      name: "Executive Suite",
      description: "Premium suite with separate living area and luxury amenities for an elevated stay experience.",
      price: "₹5,500/night",
      features: ["Free WiFi", "AC", "Breakfast Included", "Mini Bar", "Bath Tub"],
      link: "/rooms/executive-suite",
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      name: "Family Suite",
      description: "Perfect for families with extra space and comfort. Features two bedrooms and a living area.",
      price: "₹6,500/night",
      features: ["Free WiFi", "AC", "Room Service", "2 Bedrooms", "Living Room"],
      link: "/rooms/family-suite",
    },
    {
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070",
      name: "Standard Non-AC Room",
      description: "Comfortable and affordable accommodation with essential amenities for budget travelers.",
      price: "₹2,000/night",
      features: ["Free WiFi", "TV", "Room Service", "Toiletries"],
      link: "/rooms/standard-non-ac",
    },
    {
      image: "https://images.unsplash.com/photo-1595576508898-0079fa58f6ed?q=80&w=2074",
      name: "Executive Non-AC Room",
      description: "Spacious non-AC accommodation with upgraded amenities and comfort.",
      price: "₹2,500/night",
      features: ["Free WiFi", "TV", "Room Service", "Desk", "Toiletries"],
      link: "/rooms/executive-non-ac",
    },
    {
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067",
      name: "Presidential Suite",
      description: "Our most luxurious offering with premium amenities, spacious layout and personalized service.",
      price: "₹10,000/night",
      features: ["Free WiFi", "AC", "24/7 Butler", "Jacuzzi", "Mini Bar"],
      link: "/rooms/presidential-suite",
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Rooms & Suites"
        subtitle="Experience comfort and luxury in our thoughtfully designed accommodations"
        backgroundImage="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070"
      />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Accommodation Options"
            subtitle="Choose the perfect space for your stay from our selection of rooms and suites."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Room Policies */}
      <section className="py-16 bg-muted px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Room Policies"
            subtitle="Important information regarding your stay"
            centered={true}
          />

          <div className="max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">Check-in & Check-out</h3>
                <p className="text-gray-600">Check-in: 12:00 PM | Check-out: 11:00 AM</p>
                <p className="text-gray-600 mt-2">Early check-in and late check-out available upon request and subject to availability.</p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">Cancellation Policy</h3>
                <p className="text-gray-600">Free cancellation up to 24 hours prior to check-in. Cancellations within 24 hours of arrival are subject to one night's charge.</p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">Children & Extra Bed Policy</h3>
                <p className="text-gray-600">Children under 5 years stay free when using existing bedding. Extra beds are available for ₹1,000 per night.</p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">Pet Policy</h3>
                <p className="text-gray-600">We regret that pets are not allowed, except for service animals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
