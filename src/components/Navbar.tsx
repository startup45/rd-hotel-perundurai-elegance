
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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

  // Handle book now button click
  const handleBookNow = () => {
    navigate("/rooms");
    if (isOpen) setIsOpen(false);
  };

  return (
    <header
      className={`${
        isScrolled ? "navbar-sticky py-3" : "bg-transparent py-5"
      } w-full z-50 transition-all duration-300 fixed top-0 left-0 right-0`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className="font-serif text-2xl md:text-3xl font-bold text-maroon">
            RD Hotels
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 justify-center flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="nav-link font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Phone and Book Now Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-maroon" />
            <span className="text-sm font-medium">+91 1234567890</span>
          </div>
          <Button className="btn-primary" onClick={handleBookNow}>Book Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-charcoal hover:text-maroon z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
          <Button className="btn-primary mt-6" onClick={handleBookNow}>Book Now</Button>
        </div>
      </div>

      {/* Book Now Floating Button (Mobile) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-30">
        <Button className="btn-primary shadow-lg rounded-full px-6 py-5" onClick={handleBookNow}>
          Book Now
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
