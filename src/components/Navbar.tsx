
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Dining", path: "/dining" },
    { name: "Events", path: "/events" },
    { name: "Amenities", path: "/amenities" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "bg-white py-3 shadow-md" : "bg-ivory py-5"
      } w-full fixed top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl md:text-3xl font-bold text-maroon">
            RD Hotels
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-link font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Phone and Book Now Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-maroon" />
            <span className="text-sm font-medium">+91 1234567890</span>
          </div>
          <Button className="bg-maroon hover:bg-maroon/90 text-white px-6 py-2">Book Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-charcoal hover:text-maroon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal hover:text-maroon"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xl font-medium nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-6">
            <Phone size={18} className="text-maroon" />
            <span className="text-sm font-medium">+91 1234567890</span>
          </div>
          <Button className="bg-maroon hover:bg-maroon/90 text-white px-6 py-2 mt-4">Book Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
