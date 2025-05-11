
import React from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";

const About = () => {
  const testimonials = [
    {
      name: "Anand Raman",
      position: "Business Traveler",
      quote:
        "RD Hotels offers exceptional service and comfort. My stay was perfect for my business needs with excellent amenities and attentive staff.",
      image: "https://randomuser.me/api/portraits/men/82.jpg",
    },
    {
      name: "Priya Sharma",
      position: "Family Vacation",
      quote:
        "Our family had an amazing experience at RD Hotels. The staff was incredibly helpful and the rooms were spacious and luxurious.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Vikram Mehta",
      position: "Corporate Event Planner",
      quote:
        "We hosted our annual conference at RD Hotels and everything was perfect. The venue, catering, and service exceeded our expectations.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

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
              About RD Hotels
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              A legacy of luxury and hospitality in Perundurai
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="RD Hotels was established in Perundurai with a vision to provide
                unparalleled luxury and comfort to travelers. What began as a
                small family-run establishment has grown into one of the most
                prestigious hotels in the region."
              />
              <p className="text-lg mb-6">
                Founded by the Radhakrishnan family in 1995, RD Hotels has
                maintained its commitment to excellence and traditional Indian
                hospitality while embracing modern amenities and services.
              </p>
              <p className="text-lg">
                Today, RD Hotels stands as a symbol of luxury, comfort, and
                exceptional service in Perundurai, Tamil Nadu, welcoming guests
                from across India and around the world.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
                alt="Hotel Lobby"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-serif text-white text-xl">
                  "Excellence in every detail"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Our Values"
              subtitle="At RD Hotels, our core values guide every aspect of our service and operations."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-luxury p-8 text-center">
                <div className="bg-ivory inline-flex rounded-full p-4 mb-4">
                  <div className="text-3xl text-maroon">01</div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Excellence
                </h3>
                <p>
                  We strive for excellence in every aspect of our service,
                  ensuring the highest standards of quality.
                </p>
              </div>

              <div className="card-luxury p-8 text-center">
                <div className="bg-ivory inline-flex rounded-full p-4 mb-4">
                  <div className="text-3xl text-maroon">02</div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Hospitality
                </h3>
                <p>
                  We embrace the traditional values of Indian hospitality,
                  treating each guest as family.
                </p>
              </div>

              <div className="card-luxury p-8 text-center">
                <div className="bg-ivory inline-flex rounded-full p-4 mb-4">
                  <div className="text-3xl text-maroon">03</div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Integrity
                </h3>
                <p>
                  We operate with honesty and transparency in all our
                  interactions with guests and partners.
                </p>
              </div>

              <div className="card-luxury p-8 text-center">
                <div className="bg-ivory inline-flex rounded-full p-4 mb-4">
                  <div className="text-3xl text-maroon">04</div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Innovation
                </h3>
                <p>
                  We continuously evolve and innovate to enhance our guests'
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Guest Experiences"
              subtitle="Hear what our guests have to say about their stay at RD Hotels."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  position={testimonial.position}
                  quote={testimonial.quote}
                  image={testimonial.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Our Leadership"
              subtitle="Meet the dedicated team behind RD Hotels' success."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-luxury text-center overflow-hidden">
                <div className="relative">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="CEO"
                    className="w-full h-64 object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold">
                    Rajesh Radhakrishnan
                  </h3>
                  <p className="text-maroon mb-3">CEO & Founder</p>
                  <p className="text-gray-600">
                    With over 30 years in the hospitality industry, Rajesh leads
                    with passion and vision.
                  </p>
                </div>
              </div>

              <div className="card-luxury text-center overflow-hidden">
                <div className="relative">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Operations Director"
                    className="w-full h-64 object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold">
                    Deepa Krishnan
                  </h3>
                  <p className="text-maroon mb-3">Operations Director</p>
                  <p className="text-gray-600">
                    Deepa ensures seamless operations and exceptional service
                    standards across all departments.
                  </p>
                </div>
              </div>

              <div className="card-luxury text-center overflow-hidden">
                <div className="relative">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Executive Chef"
                    className="w-full h-64 object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold">
                    Suresh Menon
                  </h3>
                  <p className="text-maroon mb-3">Executive Chef</p>
                  <p className="text-gray-600">
                    Chef Suresh brings culinary excellence with his innovative
                    approach to traditional and international cuisines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-maroon text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Experience RD Hotels Hospitality
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your stay today and discover why we are the preferred choice
              for discerning travelers in Perundurai.
            </p>
            <Button className="bg-white text-maroon hover:bg-gold hover:text-white">
              Book Your Stay Now
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
