import React from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
  // Gallery images with categories
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      alt: "Luxury Hotel Room",
      category: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      alt: "Hotel Suite",
      category: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      alt: "Standard Room",
      category: "rooms",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      alt: "Restaurant Interior",
      category: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
      alt: "Food Dish",
      category: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1530465548486-d0b195884dca",
      alt: "Cuisine Plate",
      category: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      alt: "Event Space",
      category: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      alt: "Wedding Venue",
      category: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1583653520148-8bef738edbe2",
      alt: "Conference Room",
      category: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      alt: "Hotel Lobby",
      category: "property",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      alt: "Spa Facilities",
      category: "amenities",
    },
    {
      src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
      alt: "Swimming Pool",
      category: "amenities",
    },
  ];

  const categories = ["rooms", "dining", "events", "property", "amenities"];

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
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Explore the elegance and luxury of RD Hotels
            </p>
          </div>
        </section>

        {/* Main Gallery Section */}
        <section className="py-16 container mx-auto px-4">
          <SectionTitle title="Browse Our Gallery">Get a glimpse of the luxury and comfort that awaits you at RD Hotels.
            Browse through our collection of images showcasing our rooms,
            facilities, dining options, and more.</SectionTitle>

          <GalleryGrid images={galleryImages} categories={categories} />
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
