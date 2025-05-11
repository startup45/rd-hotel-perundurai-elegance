
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  // Contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "RD Hotels",
        "123 Hotel Street, Perundurai,",
        "Erode, Tamil Nadu 638052,",
        "India",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 1234567890", "+91 9876543210"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@rdhotels.com", "reservations@rdhotels.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Reception", "Check-in: 12:00 PM", "Check-out: 11:00 AM"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries and reservations"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
      />

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Get In Touch"
            subtitle="We're here to answer your questions and assist with your booking needs"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ivory mb-6">
                  <info.icon size={32} className="text-maroon" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form and we'll get back to you as soon as possible"
              />
              <ContactForm />
            </div>

            <div>
              <SectionTitle
                title="Find Us"
                subtitle="Visit our property at the heart of Perundurai"
              />
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62616.34291279!2d77.5429517!3d11.2760789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f52905a5155%3A0xc9eec2ef29310a86!2sPerundurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1653995678910!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RD Hotels Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common inquiries about our hotel and services"
            centered={true}
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-xl font-semibold mb-2">
                What are your check-in and check-out times?
              </h3>
              <p className="text-gray-600">
                Our standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged subject to availability.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-xl font-semibold mb-2">
                How do I make a reservation?
              </h3>
              <p className="text-gray-600">
                You can make a reservation through our website, by calling our reservations desk at +91 1234567890, or by sending an email to reservations@rdhotels.com.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-xl font-semibold mb-2">
                Is airport transportation available?
              </h3>
              <p className="text-gray-600">
                Yes, we offer airport pickup and drop-off services for an additional fee. Please contact us in advance to arrange transportation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-xl font-semibold mb-2">
                Do you have parking facilities?
              </h3>
              <p className="text-gray-600">
                Yes, we offer complimentary parking for all hotel guests. Valet parking service is also available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-charcoal text-white px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Stay Updated"
            subtitle="Subscribe to our newsletter for special offers and updates"
            centered={true}
            light={true}
          />

          <div className="max-w-lg mx-auto mt-12">
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-charcoal"
              />
              <button
                type="submit"
                className="bg-gold text-charcoal px-6 py-3 rounded-md font-medium hover:bg-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4 text-center">
              By subscribing, you agree to receive marketing communications from us in accordance with our privacy policy.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
