import React, { useState } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Layout>
      <div className="bg-ivory">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[50vh] flex items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa')",
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Reach out to us for bookings, inquiries, or special requests
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle title="Get in Touch">We're here to assist you with any inquiries about our
                accommodations, services, or special events. Feel free to contact
                us using any of the methods below.</SectionTitle>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-maroon rounded-full p-3 text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2">
                      Address
                    </h3>
                    <p>
                      RD Hotels, <br />
                      123 Main Road, <br />
                      Perundurai, <br />
                      Tamil Nadu 638052, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-maroon rounded-full p-3 text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2">
                      Phone
                    </h3>
                    <p>+91 1234567890</p>
                    <p>+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-maroon rounded-full p-3 text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2">
                      Email
                    </h3>
                    <p>info@rdhotels.com</p>
                    <p>reservations@rdhotels.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-maroon rounded-full p-3 text-white">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2">
                      WhatsApp
                    </h3>
                    <p>+91 9876543210</p>
                    <Button
                      className="mt-2 flex items-center gap-2"
                      onClick={() =>
                        window.open(
                          "https://wa.me/919876543210?text=I'm%20interested%20in%20booking%20a%20room%20at%20RD%20Hotels",
                          "_blank"
                        )
                      }
                    >
                      <MessageSquare size={18} /> Chat with Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-serif text-2xl font-bold mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="Our Location">RD Hotels is conveniently located in the heart of Perundurai, with
            easy access to local attractions and transport facilities.</SectionTitle>
            <div className="h-[450px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.11354181236!2d77.5018358217968!3d11.272862156825982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f405b82d717%3A0xb4d21517d4206210!2sPerundurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1651890142586!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RD Hotels Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Quick Booking Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle title="Quick Booking">Reserve your stay quickly by providing your details below.</SectionTitle>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium mb-1"
                    >
                      Number of Guests
                    </label>
                    <Input
                      id="guests"
                      type="number"
                      placeholder="2"
                      className="w-full"
                      min="1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Check-in Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label
                      htmlFor="nights"
                      className="block text-sm font-medium mb-1"
                    >
                      Number of Nights
                    </label>
                    <Input
                      id="nights"
                      type="number"
                      placeholder="1"
                      className="w-full"
                      min="1"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="roomType"
                    className="block text-sm font-medium mb-1"
                  >
                    Room Type Preference
                  </label>
                  <select
                    id="roomType"
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
                  >
                    <option value="">Select Room Type</option>
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Executive Suite</option>
                    <option value="family">Family Room</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-maroon hover:bg-maroon/90 text-white"
                  >
                    Request Booking
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
