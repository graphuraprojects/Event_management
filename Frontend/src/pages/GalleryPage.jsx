import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer1";

const categories = [
  "All",
  "Corporate",
  "Cultural",
  "Tech",
  "Private",
  "Exhibitions",
];

export const galleryData = {
  Corporate: [
    "https://i.pinimg.com/originals/43/49/32/43493264861c0153a4708c902701d862.jpg",
    "https://i.pinimg.com/1200x/42/99/7b/42997b14bb37768759f0517ee55516d5.jpg",
    "https://i.pinimg.com/736x/b0/1b/78/b01b78c13b98829ac594631cafadb347.jpg",
    "https://i.pinimg.com/1200x/17/16/b2/1716b2bedc138d74da57c65d1d89d669.jpg",
    "https://img.freepik.com/free-photo/woman-holding-wedding-speech_23-2151932847.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/people-sitting-tables-room-with-stage-chandelier_1034058-111451.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/noble-night-elegant-gala-dedicated-giving-back-making-difference_1289069-2669.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",

  ],
  Cultural: [
    "https://i.pinimg.com/1200x/40/b1/2c/40b12ca0b2c70446eb396291c6bc7fa4.jpg",
    "https://i.pinimg.com/736x/a5/72/84/a57284aec621effeacd39c44b4c2f68f.jpg",
    "https://i.pinimg.com/736x/29/26/6b/29266bb17284110ab6d901a651e86c12.jpg",
    "https://i.pinimg.com/1200x/49/62/d1/4962d15328ee2c9aafdfeb46f2d5955a.jpg",
    "https://img.freepik.com/premium-photo/group-people-are-playing-drums-band-is-playing-front-large-audience_1190007-6020.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/group-women-red-white-dresses-are-dancing-front-building-with-lights-top_887930-1947.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/indian-traditional-culture-beautiful-woman-dancer-exponent-indian-classical-dance-bharatanatyam-tamil-nadu-state_571754-6556.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/painting-couple-dancing-love-romantic_1257811-5424.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80"
  ],
  Private: [
    "https://i.pinimg.com/1200x/47/6d/db/476ddbbaf91065f93ad0f6888e50e9dc.jpg",
    "https://i.pinimg.com/1200x/f3/b9/95/f3b9956993004acc5d71165a981f3c7c.jpg",
    "https://i.pinimg.com/736x/84/ba/f2/84baf2d4eca25e2c97fc73ede24ce633.jpg",
    "https://i.pinimg.com/736x/63/95/e7/6395e7e18b74ec0d4e157c29f29ab684.jpg",
    "https://img.freepik.com/premium-photo/tea-light-candles-table-restaurant_1048944-25243024.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles_8353-10052.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/free-photo/shine-wedding-altar-newlyweds-stands-backyard-decorated-with-balloons_8353-8415.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/wedding-planner-coordinating-details-with-couple-vendors4_995578-44652.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80"
  ],
  Exhibitions: [
    "https://i.pinimg.com/1200x/a0/b0/e0/a0b0e00cd60555eef55e2226d439fc5f.jpg",
    "https://i.pinimg.com/736x/2e/4b/57/2e4b57018b167b0c93979f07e62e40e9.jpg",
    "https://i.pinimg.com/1200x/00/df/64/00df6491887c8c6b7755a509e946e0eb.jpg",
    "https://i.pinimg.com/736x/1d/14/9b/1d149b3c95ca8e5d08bee589791f4d31.jpg",
    "https://img.freepik.com/premium-photo/global-trade-fair-with-diverse-companies-showcasing-products-bustling-exhibition-hall_1327465-16266.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/abstract-blur-defocused-car-motor-exhibition-show-event_1339-10740.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/vibrant-energetic-trade-show-with-booths-showcasing-innovative-products-services_986810-1273.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/17-january-2023-dubai-uae-interior-future-museum-dubai-with-crowds-visitors-tourists_984126-213.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80"
  ],
  Tech: [
    "https://i.pinimg.com/736x/31/34/f8/3134f87137a3423fbbcc50c016cad3da.jpg",
    "https://i.pinimg.com/1200x/a9/18/26/a918264a2d71359ce0f245c68db96fca.jpg",
    "https://i.pinimg.com/1200x/30/6f/8b/306f8b42011441fecf8428ac8c2960ac.jpg",
    "https://i.pinimg.com/1200x/52/d6/db/52d6db62a1d1a9b2a4e04bd4904326c9.jpg",
    "https://img.freepik.com/premium-photo/white-poster-stand-featuring-new-product_961875-182588.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/dynamic-panel-discussion-highprofile-customer-experience-cx-summit_981640-75377.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/networking-event-with-tech-professionals_53876-1097138.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80",
    "https://img.freepik.com/premium-photo/capturing-spirit-christmas-joy-festivity-togetherness_1276913-79374.jpg?ga=GA1.1.662471184.1748323354&semt=ais_incoming&w=740&q=80"
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesToShow =
    selectedCategory === "All" ? Object.keys(galleryData) : [selectedCategory];

  return (
    <>
    <Navbar />
    <section className="pt-25 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 min-h-screen ">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900">
            Events Gallery
          </h2>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-indigo-800">
            Our event gallery showcases unforgettable corporate, cultural, private, and exhibition moments. Explore stunning visuals, vibrant themes, and professionally captured highlights that reflect creativity, elegance, and flawless execution.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-xl font-semibold transition-all duration-300 cursor-pointer 
                ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-105"
                    : "bg-white/70 text-indigo-900 hover:shadow-lg"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Images Section */}
        {categoriesToShow.map((category) => (
          <div key={category} className="mb-20">
            <h3 className="text-4xl font-bold text-indigo-900 mb-6 text-center">
              {category} Events
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {galleryData[category].slice(0, 4).map((img, index) => (
                <NavLink
                  to={`/gallery/${category}`}
                  state={{ backgroundImage: img }} // Pass clicked image
                  key={index}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${category} ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                </NavLink>
              ))}
            </div>

            {/* Show More Button */}
            <div className="text-center mt-6">
              <NavLink to={`/gallery/${category}`}>
                <button className="px-8 py-3 rounded-full text-white font-semibold text-lg mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg duration-300 hover:scale-105 transition-all cursor-pointer">
                  Show More
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Gallery;