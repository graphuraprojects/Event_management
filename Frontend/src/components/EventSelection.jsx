import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Cultural",
    image:
      "https://imgs.search.brave.com/wtPXpqDOFJjXVhQQ0EzGf3H2OQjWPmj_jUu9fjiRGhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU4/ZmE5ZTc4NTljYzY4/NzczNWUzZDM1NS8y/ODllNjYxMy1jNTgz/LTQ4YmEtOWU2OS1h/OGZlYWM2NmI0OTkv/cG9zdHdlZGRpbmdl/dmVudHMuanBn",
    link: "/cultural",
  },
  {
    name: "Corporate",
    image:
      "https://i.pinimg.com/736x/ed/3a/0c/ed3a0c8154b0e87fd73b9c14ae21dc8c.jpg",
    link: "/tech-corporate",
  },
  {
    name: "Wedding",
    image: "/images/19.png",
    link: "/weddings",
  },
];

const EventSelection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 overflow-hidden ">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-900 drop-shadow-lg mb-4">
          Events
        </h1>
        <p className="max-w-2xl mx-auto text-center text-lg md:text-xl text-indigo-800 leading-relaxed">
          Explore a variety of events — from energetic cultural fests and professional corporate gatherings
          to grand wedding celebrations. Choose your category and dive into the experience!
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-10">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: "spring",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={cat.link}>
              <div
                className="w-72 h-48 md:w-80 md:h-56 rounded-3xl shadow-xl bg-cover bg-center cursor-pointer overflow-hidden group relative"
                style={{ backgroundImage: `url(${cat.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/60 transition-all duration-500"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.2,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white tracking-wide group-hover:scale-110 transition-transform duration-300"
                  >
                    {cat.name}
                  </motion.h2>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Link
          to="/events"
          className="inline-block mt-20 bg-gradient-to-r from-blue-500 to-purple-600 
          hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 
          rounded-2xl font-black text-xl shadow-2xl transform hover:scale-105 
          transition-all duration-300"
        >
          View all events →
        </Link>
      </motion.div> */}
    </div>
  );
};

export default EventSelection;
