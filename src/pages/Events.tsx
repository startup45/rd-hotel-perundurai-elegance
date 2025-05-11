
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock } from "lucide-react";

const Events = () => {
  // Event spaces data
  const eventSpaces = [
    {
      name: "Grand Ballroom",
      capacity: "Up to 300 guests",
      size: "5000 sq. ft.",
      description: "Our largest venue perfect for weddings, conferences and gala dinners with modern AV equipment and flexible seating arrangements.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
    },
    {
      name: "Executive Boardroom",
      capacity: "Up to 20 guests",
      size: "800 sq. ft.",
      description: "Perfect for corporate meetings and presentations with built-in projection facilities and video conferencing equipment.",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2125",
    },
    {
      name: "Garden Terrace",
      capacity: "Up to 150 guests",
      size: "3000 sq. ft.",
      description: "Beautiful outdoor setting ideal for cocktail receptions, social gatherings and intimate weddings with stunning views.",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2074",
    },
    {
      name: "Celebration Hall",
      capacity: "Up to 200 guests",
      size: "4000 sq. ft.",
      description: "Versatile space suitable for weddings, cultural functions and large gatherings with dedicated entrance and pre-function area.",
      image: "https://images.unsplash.com/photo-1562652581-11192b238be3?q=80&w=2070",
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Events & Conferences"
        subtitle="Host your special occasions and business events in our versatile venues"
        backgroundImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012"
      />

      {/* Event Spaces */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Event Spaces"
            subtitle="Discover our versatile venues designed to accommodate gatherings of all sizes"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {eventSpaces.map((space, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:shadow-xl">
                <div className="h-60 overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-2">{space.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{space.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{space.size}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{space.description}</p>
                  <Button className="btn-primary w-full">Book This Venue</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-muted px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Event Types"
            subtitle="We cater to a diverse range of events with customized services and packages"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-20 h-20 bg-ivory/50 flex items-center justify-center rounded-full mx-auto mb-6">
                <Users size={36} className="text-maroon" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Weddings & Social Events</h3>
              <p className="text-gray-600">
                From intimate ceremonies to grand receptions, our dedicated event team ensures your special day is memorable and stress-free.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-20 h-20 bg-ivory/50 flex items-center justify-center rounded-full mx-auto mb-6">
                <Calendar size={36} className="text-maroon" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Corporate Meetings</h3>
              <p className="text-gray-600">
                Modern facilities for productive business meetings, conferences, and seminars with state-of-the-art technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="w-20 h-20 bg-ivory/50 flex items-center justify-center rounded-full mx-auto mb-6">
                <Clock size={36} className="text-maroon" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Package Events</h3>
              <p className="text-gray-600">
                All-inclusive packages for birthdays, anniversaries, and other celebrations with customized catering and decoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Planning */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Event Planning"
            subtitle="Our experienced team will assist you at every step of planning your event"
            centered={true}
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 font-serif text-xl font-semibold text-maroon">01. Consultation</div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">Meet with our event specialists to discuss your vision, requirements, and budget. We'll guide you through venue options and available services.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 font-serif text-xl font-semibold text-maroon">02. Customization</div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">We create a tailored proposal including catering menus, decor options, and additional services based on your preferences.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 font-serif text-xl font-semibold text-maroon">03. Coordination</div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">Our team manages all logistics, vendor coordination, and timeline planning to ensure a seamless event experience.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 font-serif text-xl font-semibold text-maroon">04. Execution</div>
                <div className="md:w-2/3">
                  <p className="text-gray-600">On the day of your event, our dedicated staff will handle all details so you can focus on enjoying your special occasion.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="btn-primary">Contact Our Event Team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-charcoal text-white px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Client Testimonials"
            subtitle="What our clients say about their event experience"
            centered={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-charcoal/50 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974" 
                    alt="Client" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gold">Priya Sharma</h4>
                  <p className="text-sm text-gray-400">Corporate Event</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The team at RD Hotels made our annual conference a tremendous success. The attention to detail and professional service exceeded our expectations."
              </p>
            </div>

            <div className="bg-charcoal/50 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" 
                    alt="Client" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gold">Rahul Kapoor</h4>
                  <p className="text-sm text-gray-400">Wedding Celebration</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Our wedding day was absolutely perfect thanks to the incredible staff and beautiful venues at RD Hotels. Every detail was handled with care."
              </p>
            </div>

            <div className="bg-charcoal/50 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974" 
                    alt="Client" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gold">Anita Desai</h4>
                  <p className="text-sm text-gray-400">Birthday Party</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The birthday party we hosted was flawless from start to finish. The customized catering and attentive service made it a memorable celebration."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
