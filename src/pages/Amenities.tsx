import React from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import {
  Wifi,
  Car,
  Shirt,
  Clock,
  UtensilsCrossed,
  Phone,
  Dumbbell,
  Coffee,
} from "lucide-react";

const Amenities = () => {
  return (
    <Layout>
      <div className="bg-ivory">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[60vh] flex items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa')",
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hotel Amenities
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Exceptional services and facilities for a comfortable stay
            </p>
          </div>
        </section>

        {/* Main Amenities Section */}
        <section className="py-16 container mx-auto px-4">
          <SectionTitle title="Our Services & Amenities">At RD Hotels, we pride ourselves on offering a comprehensive range of
            amenities designed to enhance your stay and ensure maximum comfort
            and convenience.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Wifi}
              title="Free Wi-Fi"
              description="High-speed internet access throughout the hotel for all guests"
            />
            <FeatureCard
              icon={Car}
              title="Travel Desk"
              description="24/7 transportation arrangements and travel assistance"
            />
            <FeatureCard
              icon={Shirt}
              title="Laundry Service"
              description="Same-day laundry and dry cleaning services available"
            />
            <FeatureCard
              icon={UtensilsCrossed}
              title="24/7 Room Service"
              description="Enjoy our delicious cuisine in the comfort of your room anytime"
            />
            <FeatureCard
              icon={Clock}
              title="Express Check-in/out"
              description="Streamlined process for a hassle-free arrival and departure"
            />
            <FeatureCard
              icon={Phone}
              title="Doctor on Call"
              description="Medical assistance available upon request at any time"
            />
            <FeatureCard
              icon={Dumbbell}
              title="Fitness Center"
              description="Modern gym equipment for maintaining your fitness routine"
            />
            <FeatureCard
              icon={Coffee}
              title="Business Center"
              description="Fully equipped workspace with printing and scanning facilities"
            />
          </div>
        </section>

        {/* Premium Amenities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="Premium Experiences">Elevate your stay with our exclusive premium amenities and
              services.</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-luxury overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef"
                    alt="Spa Services"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-maroon text-white py-1 px-3 rounded-full text-sm">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-3">Spa & Wellness</h3>
                  <p className="text-gray-600 mb-4">
                    Indulge in rejuvenating spa treatments and massages by our
                    skilled therapists using premium products. Perfect for
                    relaxation and wellness.
                  </p>
                  <Button className="mt-2">Book a Session</Button>
                </div>
              </div>

              <div className="card-luxury overflow-hidden">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                    alt="Fine Dining"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-maroon text-white py-1 px-3 rounded-full text-sm">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-3">
                    Private Chef Experience
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Enjoy a customized dining experience with our executive chef
                    preparing a special menu tailored to your preferences, served
                    in your suite or private dining area.
                  </p>
                  <Button className="mt-2">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-maroon text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Experience Luxury at RD Hotels
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your stay today and enjoy our premium amenities and
              world-class service.
            </p>
            <Button className="bg-white text-maroon hover:bg-gold hover:text-white">
              Book Your Stay
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Amenities;
