
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import RoomCard from "@/components/RoomCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Bed, Utensils, Calendar, Clock, Wifi, MapPin, Phone
} from "lucide-react";

const Home = () => {
  // Sample rooms data
  const featuredRooms = [
    {
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      name: "Deluxe Room",
      description: "Spacious room with modern amenities and city view.",
      price: "₹3,500/night",
      features: ["Free WiFi", "AC", "Room Service"],
      link: "/rooms",
    },
    {
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974",
      name: "Executive Suite",
      description: "Premium suite with separate living area and luxury amenities.",
      price: "₹5,500/night",
      features: ["Free WiFi", "AC", "Breakfast Included"],
      link: "/rooms",
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      name: "Family Suite",
      description: "Perfect for families with extra space and comfort.",
      price: "₹6,500/night",
      features: ["Free WiFi", "AC", "Room Service"],
      link: "/rooms",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Business Traveler",
      quote: "The best hotel experience in Perundurai. Exceptional service and comfortable rooms made my business trip perfect.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      position: "Family Vacation",
      quote: "Our family had an amazing stay at RD Hotels. The staff went above and beyond to make us feel welcome.",
      rating: 5,
    },
    {
      name: "Arun Patel",
      position: "Event Organizer",
      quote: "We hosted our corporate event here and everything was flawless. The event spaces are exceptional.",
      rating: 4,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Where Comfort Meets Class in Perundurai"
        subtitle="Experience luxury and warm hospitality at RD Hotels"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
        buttons={[
          { text: "Book Your Stay", link: "/rooms", variant: "primary" },
          { text: "Explore Our Rooms", link: "/rooms", variant: "secondary" },
        ]}
      />

      {/* Featured Rooms */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Luxury Accommodation"
            subtitle="Choose from our selection of elegantly designed rooms and suites."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms">
              <Button className="btn-secondary">View All Rooms</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle
                title="Experience Luxury and Comfort"
                subtitle="RD Hotels stands as a beacon of hospitality in Perundurai, Tamil Nadu, offering an unmatched blend of modern luxury and traditional warmth."
              />
              <p className="mb-6 text-gray-600">
                Our hotel is designed to cater to both business and leisure travelers, providing a sanctuary of comfort with world-class amenities and personalized service. From the moment you step into our elegant lobby, you'll experience the distinctive character and commitment to excellence that sets RD Hotels apart.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="text-gold mr-2">
                    <Wifi size={20} />
                  </div>
                  <span>High-Speed WiFi</span>
                </div>
                <div className="flex items-center">
                  <div className="text-gold mr-2">
                    <Utensils size={20} />
                  </div>
                  <span>Fine Dining</span>
                </div>
                <div className="flex items-center">
                  <div className="text-gold mr-2">
                    <Calendar size={20} />
                  </div>
                  <span>Event Spaces</span>
                </div>
                <div className="flex items-center">
                  <div className="text-gold mr-2">
                    <Clock size={20} />
                  </div>
                  <span>24/7 Service</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="btn-primary">Discover Our Story</Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
                  alt="RD Hotels Lobby"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/20 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-maroon/10 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Amenities */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Premium Amenities"
            subtitle="Enjoy our world-class facilities and services throughout your stay."
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureCard
              icon={Clock}
              title="24/7 Room Service"
              description="Round-the-clock service to cater to all your needs, whenever you need it."
            />
            <FeatureCard
              icon={MapPin}
              title="Travel Desk"
              description="Assistance with travel arrangements and local sightseeing tours."
            />
            <FeatureCard
              icon={Wifi}
              title="High-Speed WiFi"
              description="Stay connected with complimentary high-speed internet throughout the property."
            />
            <FeatureCard
              icon={Phone}
              title="Doctor on Call"
              description="Medical assistance available on request for your peace of mind."
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/amenities">
              <Button className="btn-secondary">View All Amenities</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dining Highlight */}
      <section className="py-20 bg-charcoal text-white px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
                alt="Suvai Restaurant"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <SectionTitle
                title="Exquisite Dining Experience"
                subtitle="Indulge in a culinary journey at our signature restaurant and trendy bar."
                light={true}
              />
              <p className="mb-8 text-white/80">
                Our Suvai Multicuisine Restaurant offers an array of delectable dishes from around the world, prepared by expert chefs using the finest ingredients. For a more relaxed atmosphere, visit our Chill & Chip Bar for craft cocktails and light bites.
              </p>
              <Link to="/dining">
                <Button className="bg-gold text-charcoal hover:bg-gold/90 px-6 py-3 rounded-md transition-all font-medium">
                  Explore Dining Options
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Guest Experiences"
            subtitle="Hear what our guests have to say about their stay with us."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Book your stay directly with us for the best rates and exclusive perks.
          </p>
          <Button className="btn-primary text-lg px-8 py-6">Book Your Stay Now</Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
