
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { CalendarCheck } from "lucide-react";

const About = () => {
  // Timeline data
  const timeline = [
    {
      year: "2005",
      title: "Foundation",
      description: "RD Hotels was established with a vision to bring world-class hospitality to Perundurai, Tamil Nadu.",
    },
    {
      year: "2008",
      title: "Expansion",
      description: "Added new wings with additional room categories and expanded dining options.",
    },
    {
      year: "2012",
      title: "Renovation",
      description: "Complete renovation of all facilities to enhance guest comfort and experience.",
    },
    {
      year: "2015",
      title: "Award-winning",
      description: "Recognized as one of the top hospitality providers in the region with multiple industry awards.",
    },
    {
      year: "2020",
      title: "Modern Era",
      description: "Integrated advanced technology and sustainable practices across all hotel operations.",
    },
  ];

  // Team members
  const teamMembers = [
    {
      name: "Rajesh Desai",
      position: "General Manager",
      content: "With over 20 years of experience in luxury hospitality, Rajesh leads our team with passion and dedication to excellence.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    },
    {
      name: "Priya Sharma",
      position: "Front Office Manager",
      content: "Priya ensures all guests receive a warm welcome and exceptional service throughout their stay.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1998",
    },
    {
      name: "Arun Kumar",
      position: "Executive Chef",
      content: "Chef Arun brings culinary expertise from around the world to create unforgettable dining experiences.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="About RD Hotels"
        subtitle="Learn about our story, values, and commitment to exceptional hospitality"
        backgroundImage="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071"
      />

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
                alt="RD Hotels Lobby"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="From humble beginnings to a symbol of hospitality excellence"
              />
              <p className="mb-6 text-gray-600">
                RD Hotels was established in 2005 with a vision to create a haven of comfort and luxury in Perundurai, Tamil Nadu. What began as a modest establishment has evolved into a prestigious hospitality destination known for its exceptional service and elegant accommodations.
              </p>
              <p className="mb-6 text-gray-600">
                Over the years, we have continuously evolved to meet the changing needs of our guests while maintaining our core values of excellence, integrity, and warm Indian hospitality. Our founder's vision of creating a space where guests feel truly at home continues to guide every aspect of our operations.
              </p>
              <p className="text-gray-600">
                Today, RD Hotels stands as a testament to our commitment to quality and service, welcoming guests from across India and around the world. Our dedicated team works tirelessly to ensure that every stay is memorable and every guest leaves with fond memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-muted px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Journey"
            subtitle="Key milestones that shaped RD Hotels through the years"
            centered={true}
          />

          <div className="mt-12 relative">
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-maroon/20 transform md:translate-x-[-50%]"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 flex flex-col items-start md:items-end md:pr-12 md:text-right">
                    <div className="bg-maroon text-white px-4 py-1 rounded mb-2 text-xl font-serif">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="absolute left-[-8px] md:left-1/2 transform md:translate-x-[-50%] mt-2 md:mt-0">
                    <div className="w-4 h-4 rounded-full bg-maroon border-4 border-maroon/20"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The dedicated professionals behind our excellence in hospitality"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold">{member.name}</h3>
                  <p className="text-maroon mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-charcoal text-white px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Our Values"
            subtitle="Principles that guide our approach to hospitality"
            centered={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-maroon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarCheck size={40} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-300">We strive for excellence in every detail, ensuring the highest standards in all aspects of our service.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-maroon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarCheck size={40} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-300">We conduct our business with honesty, transparency, and a strong moral compass in all interactions.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-maroon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarCheck size={40} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Hospitality</h3>
              <p className="text-gray-300">We embrace the tradition of warm Indian hospitality, treating all guests as family with genuine care.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-maroon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarCheck size={40} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">We continuously evolve and innovate to enhance guest experience while respecting traditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="What Guests Say"
            subtitle="Experiences shared by guests who have stayed with us"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              name="Arun Patel"
              position="Business Traveler"
              quote="The perfect blend of comfort and convenience. The staff went above and beyond to make my business trip productive and enjoyable."
              rating={5}
            />
            <TestimonialCard
              name="Meera Iyer"
              position="Family Vacation"
              quote="Our family had a wonderful time at RD Hotels. The spacious rooms and excellent amenities made it a perfect getaway."
              rating={5}
            />
            <TestimonialCard
              name="Vikram Singh"
              position="Couple's Retreat"
              quote="The romantic atmosphere and attentive service made our anniversary celebration truly special. We'll definitely be back!"
              rating={4}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
