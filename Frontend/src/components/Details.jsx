import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CulturalDetails = () => {
  const location = useLocation();
  const event = location.state;
  const navigate = useNavigate();

  return (
    <div className="bg-linear-to-r from-purple-100 via-blue-100 to-pink-100">
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            {event.title}
          </h1>
          <p className="mt-2 text-lg md:text-xl font-bold">{event.location}</p>
          <p className="mt-2 text-lg md:text-xl font-semibold">{event.date2}</p>
        </div>
      </section>
      {/* about event */}
      <section className="flex justify-center">
        <div className="px-8 py-4 max-w-[1050px]">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-violet-900">
            About The Event
          </h2>
          <p className="text-violet-800 bg-[#ffffff4f] rounded-lg shadow-lg p-4 mt-2">
            {event.description}
          </p>
        </div>
      </section>
      {/* schedule and speakers */}
      <section className="flex justify-center">
        <div className="mt-6 px-8 py-4 flex flex-wrap justify-center lg:justify-between gap-4 max-w-[1050px] w-full">
          <div className="w-full max-w-[400px] flex flex-col ">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-violet-900">
              Schedule
            </h2>
            <p className="font-semibold text-gray-500">{event.date2}</p>
            <motion.div
              initial={{ opacity: 0, y: 60, x: -60 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="pl-8 border-l-2 border-gray-500 bg-white rounded-lg shadow-lg grow"
            >
              {event.schedule.map((item, index) => {
                const [time, title] = item.split("–");

                return (
                  <div
                    key={index}
                    className="flex flex-col p-2 relative before:content-[''] before:absolute before:-left-10 before:top-1/3 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-purple-500 before:rounded-full before:shadow-[0_0_8px_3px_rgba(168,85,247,0.6)]"
                  >
                    <span className="text-gray-500">{time.trim()}</span>
                    <span className="font-semibold">{title.trim()}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
          <div className="w-full max-w-[500px]">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-violet-900">
              Speakers
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 60, x: 60 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-2 max-w-[500px] p-4"
            >
              {event.speakers?.map((speaker) => (
                <div
                  key={speaker._id}
                  className="flex items-center p-3 mb-4 bg-white rounded-xl"
                >
                  {/* Speaker photo */}
                  <div className="flex items-center w-20 h-20 rounded-full overflow-hidden cursor-pointer shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={speaker.photo}
                      alt={speaker.name}
                    />
                  </div>

                  {/* Speaker info */}
                  <div className="flex flex-col pl-4">
                    <span className="font-bold md:text-lg">{speaker.name}</span>
                    <span className="text-purple-600 font-semibold">
                      Role: {speaker.role}
                    </span>
                    <span className="text-gray-500">{speaker.bio}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* map and location */}
      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full h-[350px] md:h-[450px] overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.1016389283036!2d76.77563887548958!3d28.325525675833763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d41000fe8670d%3A0x7b0a08f0043a22af!2sGraphura%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763132796048!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
      {/* booking */}
      <section className="px-8 py-4 mt-10 pb-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-[1050px] w-full bg-white shadow-lg flex flex-col items-center p-4 rounded-lg"
        >
          <h2 className="text-xl font-bold md:text-2xl text-violet-900">Book Your Ticket</h2>
          <span className="text-center text-violet-800 font-semibold">
            Book your tickets now and be part of an unforgettable experience!
          </span>
          <button onClick={()=>navigate('/booking')} className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 duration-300 transition-all text-white font-semibold py-2 px-4 my-4 rounded-lg cursor-pointer shadow-lg">
            Book Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default CulturalDetails;