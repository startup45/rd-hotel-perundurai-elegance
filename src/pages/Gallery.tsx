
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
  // Gallery images data with categories
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      alt: "Deluxe Room",
      category: "Rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974",
      alt: "Executive Suite",
      category: "Rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      alt: "Family Suite",
      category: "Rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
      alt: "Hotel Lobby",
      category: "Hotel",
    },
    {
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049",
      alt: "Hotel Exterior",
      category: "Hotel",
    },
    {
      src: "https://images.unsplash.com/photo-1576095631533-286352870542?q=80&w=1887",
      alt: "Swimming Pool",
      category: "Amenities",
    },
    {
      src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070",
      alt: "Hotel Gym",
      category: "Amenities",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
      alt: "Restaurant",
      category: "Dining",
    },
    {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070",
      alt: "Hotel Bar",
      category: "Dining",
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
      alt: "Grand Ballroom",
      category: "Events",
    },
    {
      src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2125",
      alt: "Conference Room",
      category: "Events",
    },
    {
      src: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1974",
      alt: "Wedding Setup",
      category: "Events",
    },
    {
      src: "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?q=80&w=1972",
      alt: "Breakfast Spread",
      category: "Dining",
    },
    {
      src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071",
      alt: "Hotel Corridor",
      category: "Hotel",
    },
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070",
      alt: "Business Center",
      category: "Amenities",
    },
  ];

  // Define gallery categories
  const categories = ["Rooms", "Dining", "Amenities", "Events", "Hotel"];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Photo Gallery"
        subtitle="Experience the beauty and elegance of RD Hotels through our visual showcase"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
      />

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Image Gallery"
            subtitle="Browse through our collection of images showcasing our beautiful property and facilities"
            centered={true}
          />

          <div className="mt-12">
            <GalleryGrid images={galleryImages} categories={categories} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
