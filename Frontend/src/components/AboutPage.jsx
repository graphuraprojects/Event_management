import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import conferenceImg from "/images/Aboutus.webp";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isMobile;
  };

  const AboutPage = () => {
  const isMobile = useIsMobile();
  return (
    <div className="relative bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 min-h-screen rounded-lg m-2 flex flex-col justify-center items-center py-16  md:px-12 transition-all duration-700 overflow-hidden">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6 text-center"
      >
        What We Do
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="max-w-3xl text-center text-lg text-indigo-800 mb-16"
      >
        We create memorable event experiences through smart planning, creative ideas, and smooth execution. From cultural festivals to corporate events, weddings, and tech conferences, we bring your vision to life with precision. Our team blends innovation and expertise to deliver events that inspire and leave a lasting impact.
      </motion.p>

      {/* Image + Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          {/* Decorative Circles */}
          <div className="absolute -left-6 -top-6 w-48 h-48 bg-indigo-200 rounded-full opacity-60 z-0 blur-xl"></div>
          <div className="absolute -right-6 -bottom-6 w-60 h-40 bg-purple-200 rounded-full opacity-50 z-0 blur-xl"></div>

          {/* Main Image */}
          <img
            src={conferenceImg}
            alt="Conference event"
            className="rounded-2xl shadow-xl w-full max-w-md z-10 transition-transform duration-700 hover:scale-105"
          />

          {/* Floating Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute left-4 bottom-6 bg-white rounded-xl shadow-lg px-5 py-3 z-20 hidden sm:block"
          >
            <div className="font-semibold text-sm text-gray-700 mb-1">Theme</div>
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-green-600 rounded"></div>
              <div className="w-5 h-5 bg-purple-800 rounded"></div>
              <div className="w-5 h-5 bg-white border border-gray-400"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute right-4 top-6 bg-white rounded-xl shadow-lg px-5 py-3 z-20 hidden sm:block"
          >
            <div className="font-semibold text-sm text-gray-700 mb-1">Website</div>
            <p className="text-xs text-gray-500">Event Info, Product Info</p>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 text-left space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
            We help event planners and marketers bring their events to life
          </h2>

          <p className="text-md text-indigo-800 leading-relaxed">
            Whether it’s a business summit, a cultural celebration, or a grand wedding, we provide complete event planning solutions tailored to your goals. From venue selection and creative themes to vendor coordination and technical production, our team handles every detail with care and professionalism.
          </p>
          

          <p className="text-md text-indigo-800 leading-relaxed">
           We combine design, technology, and event strategy to create impactful experiences that connect people and deliver your message. Our team works closely with clients to understand their needs and execute events that feel seamless, memorable, and truly extraordinary.
          </p>

          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              Plan an Event →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
