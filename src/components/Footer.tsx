
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6 text-gold">RD Hotels</h3>
            <p className="mb-4 text-gray-300">
              Where comfort meets class in Perundurai. Experience luxury and exceptional service in the heart of Tamil Nadu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 relative inline-block after:content-[''] after:block after:h-0.5 after:w-full after:bg-gold after:mt-1">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-gold transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-gray-300 hover:text-gold transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-gold transition-colors">
                  Events & Conference
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 relative inline-block after:content-[''] after:block after:h-0.5 after:w-full after:bg-gold after:mt-1">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Hotel Street, Perundurai, Erode, Tamil Nadu 638052, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <span className="text-gray-300">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <span className="text-gray-300">info@rdhotels.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-xl mb-6 relative inline-block after:content-[''] after:block after:h-0.5 after:w-full after:bg-gold after:mt-1">
              Hotel Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Check-in: 12:00 PM</p>
                  <p className="text-gray-300">Check-out: 11:00 AM</p>
                  <p className="text-gray-300 mt-2">24/7 Front Desk</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RD Hotels. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
