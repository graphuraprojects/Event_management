import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { ChevronLeft } from "lucide-react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import { galleryData } from "./GalleryPage";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer1";

const GalleryDetailsPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const images = galleryData[category] || [];

  // Get the background image from the state
  const backgroundImage = location.state?.backgroundImage || images[0]; // Default to first image

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div
        className="relative w-full h-[65vh] overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 z-40">
          <Link to="/gallery">
            <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 backdrop-blur text-white rounded-xl flex items-center gap-1 cursor-pointer hover:scale-105 transition duration-100">
              <ChevronLeft size={18} /> Back to Gallery
            </button>
          </Link>
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-5xl font-bold text-center">{category} Events</h1>
        </div>
      </div>

      {/* Full Gallery Section */}
      <div className="max-w-7xl mx-auto p-10">
        <LightGallery
          speed={500}
          plugins={[lgZoom, lgThumbnail]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {images.map((img, index) => (
            <a href={img} key={index}>
              <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  alt={`${category} ${index + 1}`}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white text-xl font-semibold">
                  View Image
                </div>
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default GalleryDetailsPage;