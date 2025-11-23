import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import hero1 from "/images/14.webp";
import hero2 from "/images/19.png";
import hero3 from "/images/20.jpg";
import hero4 from "/images/32.webp";

const Hero = () => {
  return (
    <section className="relative rounded-lg min-h-screen w-full bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 flex  justify-center items-center overflow-hidden px-2 md:px-8 lg:px-16">
      <motion.div
          className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-purple-700/40 blur-[180px] rounded-full z-0"
          animate={{ x: [0, 50, -30], y: [0, -40, 20] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[0%] right-[0%] w-[600px] h-[600px] bg-pink-500/40 blur-[200px] rounded-full z-0"
          animate={{ x: [0, -40, 20], y: [0, 30, -20] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
      <div className="w-[90%] md:w-[85%] lg:w-[100%]  rounded-3xl m-18 mt-30 p-8 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-10 transition-all duration-700 z-10">
        

        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Effortlessly <br />{" "}
            <span className="text-indigo-900">plan your events</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Make event planning easy with our comprehensive platform. From idea
            to reality, we guarantee the precision and dedication needed to make
            your event a success.
          </p>

          <div className="flex gap-4 mt-6">
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white  px-6 py-3 rounded-full font-semibold shadow-xl border border-white/40"
              >
                Plan an Event
              </motion.button>
            </Link>

            {/* <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-xl bg-white/20 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg border border-white/30"
            >
              Explore Events
            </motion.button> */}
          
          </div>
        </motion.div>

        {/* Right Image Grid Section */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-4 max-lg:hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Image 1 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.4 }}
            className="col-span-1 overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={hero1}
              alt="Event Music"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
            className="col-span-1 overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={hero2}
              alt="Luxury Venue"
              className="w-full h-full object-cover "
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.4 }}
            className="col-span-1 overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}

              src={hero3}
              alt="Wedding"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
            className="col-span-1 overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={hero4}
              alt="Party"
              className="w-full h-full object-cover "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
