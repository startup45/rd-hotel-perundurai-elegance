
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Dining = () => {
  return (
    <Layout>
      <HeroSection
        title="Fine Dining Experience"
        subtitle="Indulge in exquisite culinary delights at our restaurants and bar"
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
      />

      {/* Suvai Restaurant */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Suvai Multicuisine Restaurant"
                subtitle="A culinary journey through global flavors"
              />
              <p className="text-gray-600 mb-6">
                Experience the art of dining at Suvai, our signature restaurant serving an eclectic mix of Indian, Asian, and Continental cuisines. Our expert chefs craft each dish with precision and passion, using locally sourced ingredients and traditional techniques to create memorable culinary experiences.
              </p>
              <p className="text-gray-600 mb-8">
                The elegant ambiance complemented by attentive service makes Suvai the perfect venue for everything from business lunches to romantic dinners.
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-serif text-lg font-semibold mb-2">Restaurant Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Breakfast</span>
                    <span>7:00 AM - 10:30 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lunch</span>
                    <span>12:30 PM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dinner</span>
                    <span>7:00 PM - 11:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
                  alt="Suvai Restaurant"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
                  alt="Suvai Food"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2074"
                  alt="Suvai Cuisine"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=2070"
                  alt="Suvai Interior"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionTitle
              title="Culinary Highlights"
              subtitle="Signature dishes that define the Suvai experience"
              centered={true}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <div className="card-luxury">
                <img
                  src="https://images.unsplash.com/photo-1631292784640-2b24d6c7c655?q=80&w=2072"
                  alt="Traditional Tamil Cuisine"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Traditional Tamil Cuisine</h3>
                  <p className="text-gray-600">
                    Authentic local delicacies prepared with traditional recipes and regional spices.
                  </p>
                </div>
              </div>

              <div className="card-luxury">
                <img
                  src="https://images.unsplash.com/photo-1511910849309-0dffb8785146?q=80&w=2071"
                  alt="International Favorites"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">International Favorites</h3>
                  <p className="text-gray-600">
                    Global cuisines crafted with precision to satisfy diverse palates and preferences.
                  </p>
                </div>
              </div>

              <div className="card-luxury">
                <img
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964"
                  alt="Decadent Desserts"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Decadent Desserts</h3>
                  <p className="text-gray-600">
                    Sweet creations that provide the perfect finale to your dining experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chill & Chip Bar */}
      <section className="py-20 bg-charcoal text-white px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle
                title="Chill & Chip Bar"
                subtitle="Unwind in style with premium beverages and light bites"
                light={true}
              />
              <p className="text-white/80 mb-6">
                Our trendy Chill & Chip Bar offers a relaxed atmosphere to unwind after a long day. Enjoy handcrafted cocktails, premium spirits, and a curated selection of domestic and international wines and beers. Pair your drinks with our delectable bar snacks and appetizers for a complete experience.
              </p>
              <p className="text-white/80 mb-8">
                The stylish décor and ambient lighting create the perfect setting for casual meetups, business networking, or simply enjoying a quiet evening.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="font-serif text-lg font-semibold mb-2">Bar Hours</h4>
                <p className="mb-2">Daily: 5:00 PM - 12:00 AM</p>
                <p className="text-sm text-white/60">Happy Hour: 5:00 PM - 7:00 PM (30% off select drinks)</p>
              </div>
              <Button className="mt-8 bg-gold text-charcoal hover:bg-gold/90 px-6 py-3 rounded-md transition-all font-medium flex items-center gap-2">
                <Download size={16} />
                Download Menu
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069"
                alt="Chill & Chip Bar"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining & Special Occasions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Private Dining & Events"
            subtitle="Create memorable moments with exclusive dining experiences"
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="card-luxury p-8">
              <h3 className="font-serif text-2xl font-semibold mb-4">Private Dining</h3>
              <p className="text-gray-600 mb-4">
                For those special occasions that demand privacy and personalized service, our private dining room offers an exclusive setting for intimate gatherings. Our chef can create custom menus to suit your preferences and dietary requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Capacity: Up to 16 guests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Customized menus available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Dedicated service staff</span>
                </li>
              </ul>
              <Button className="btn-primary">Inquire Now</Button>
            </div>

            <div className="card-luxury p-8">
              <h3 className="font-serif text-2xl font-semibold mb-4">Catering Services</h3>
              <p className="text-gray-600 mb-4">
                Bring the exquisite taste of Suvai to your events with our professional catering services. Whether it's a corporate function, wedding celebration, or family gathering, our team can deliver a memorable culinary experience at your chosen venue.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Customized menu planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>On-site service available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Special dietary accommodations</span>
                </li>
              </ul>
              <Button className="btn-primary">Request Quote</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dining;
