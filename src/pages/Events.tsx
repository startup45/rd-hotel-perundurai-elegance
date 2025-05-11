import React from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import GalleryGrid from "@/components/GalleryGrid";
import ContactForm from "@/components/ContactForm";
import { CalendarCheck, Users, Clipboard } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const Events = () => {
  const eventImages = [
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      alt: "Corporate Event Setting",
      category: "corporate",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      alt: "Wedding Reception",
      category: "wedding",
    },
    {
      src: "https://images.unsplash.com/photo-1561489396-888724a1543d",
      alt: "Conference Room Setup",
      category: "conference",
    },
    {
      src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56",
      alt: "Birthday Celebration",
      category: "celebrations",
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
      alt: "Cocktail Party",
      category: "celebrations",
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      alt: "Business Meeting",
      category: "corporate",
    },
  ];

  const eventCategories = ["wedding", "corporate", "conference", "celebrations"];

  return (
    <Layout>
      <div className="bg-ivory">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[60vh] flex items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Events & Celebrations
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Create unforgettable moments in our elegant event spaces
            </p>
            <Button className="btn-primary mt-8">Inquire Now</Button>
          </div>
        </section>

        {/* Event Spaces Section */}
        <section className="py-16 container mx-auto px-4">
          <SectionTitle title="Our Event Spaces">From intimate gatherings to grand celebrations, RD Hotels offers
            versatile spaces to accommodate your special occasions.</SectionTitle>
          <p className="text-lg mb-12 max-w-3xl">
            From intimate gatherings to grand celebrations, RD Hotels offers
            versatile spaces to accommodate your special occasions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-luxury">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
                alt="Grand Ballroom"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">Grand Ballroom</h3>
                <p className="text-gray-600 mb-4">
                  Our largest venue perfect for weddings and grand receptions.
                  Accommodates up to 500 guests with state-of-the-art
                  audiovisual facilities.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-maroon font-semibold">
                    Capacity: 500
                  </span>
                  <Button variant="outline">View Details</Button>
                </div>
              </div>
            </div>

            <div className="card-luxury">
              <img
                src="https://images.unsplash.com/photo-1561489396-888724a1543d"
                alt="Conference Center"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">Conference Center</h3>
                <p className="text-gray-600 mb-4">
                  Versatile meeting space ideal for corporate events, seminars,
                  and presentations. Fully equipped with modern technology.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-maroon font-semibold">
                    Capacity: 150
                  </span>
                  <Button variant="outline">View Details</Button>
                </div>
              </div>
            </div>

            <div className="card-luxury">
              <img
                src="https://images.unsplash.com/photo-1472653431158-6364773b2a56"
                alt="Celebration Hall"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">Celebration Hall</h3>
                <p className="text-gray-600 mb-4">
                  Intimate space perfect for birthdays, anniversaries, and small
                  gatherings with elegant decor and personalized service.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-maroon font-semibold">Capacity: 80</span>
                  <Button variant="outline">View Details</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="Event Services">Our dedicated team ensures your event runs flawlessly with our
            comprehensive services.</SectionTitle>
            <p className="text-lg mb-12 max-w-3xl">
              Our dedicated team ensures your event runs flawlessly with our
              comprehensive services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={CalendarCheck}
                title="Event Planning"
                description="Our experienced event coordinators will help you plan every detail of your special occasion"
              />
              <FeatureCard
                icon={Users}
                title="Catering Services"
                description="Exquisite menu options customized to your preferences and dietary requirements"
              />
              <FeatureCard
                icon={Clipboard}
                title="Technical Support"
                description="State-of-the-art audio-visual equipment with dedicated technical assistance"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 container mx-auto px-4">
          <SectionTitle title="Event Gallery">Browse through our gallery showcasing the various events hosted at RD
            Hotels.</SectionTitle>
          <p className="text-lg mb-12 max-w-3xl">
            Browse through our gallery showcasing the various events hosted at RD
            Hotels.
          </p>

          <GalleryGrid images={eventImages} categories={eventCategories} />
        </section>

        {/* Inquiry Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="Inquire About Your Event">Contact us to discuss your event requirements and check
            availability.</SectionTitle>
            <p className="text-lg mb-12 max-w-3xl">
              Contact us to discuss your event requirements and check
              availability.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="font-serif text-2xl mb-6">Event Calendar</h3>
                <p className="mb-4">
                  Check our availability for your preferred dates:
                </p>
                <div className="border rounded-lg p-6 bg-ivory">
                  <Calendar
                    mode="single"
                    className="p-3 pointer-events-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-6">Contact Us</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Events;
