import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../pages/Footer1";

const TechCorporate = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const res = await fetch("/api/eventdata");
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    loadEvents();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const culturalEvents = events.filter((event) =>
    event.category.some((val) => val.toLowerCase() === "tech")
  );

  const filteredEvents =
    selectedCategory === "All"
      ? culturalEvents
      : culturalEvents.filter((event) =>
          event.category.some(
            (val) => val.toLowerCase() === selectedCategory.toLowerCase()
          )
        );

  return (
    <>
    <Navbar />
    <div className="bg-linear-to-r from-purple-100 via-blue-100 to-pink-100">
       <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <img
          src="./images/tech-bg.jpg"
          alt="tech background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold drop-shadow-lg">
            Corporate/Tech Events
          </h1>
        </div>
      </section>

      <section className="category-filter">
        <div className="w-full border-b border-gray-300 py-3">
          <nav className="categories overflow-x-auto scrollbar-hide py-2">
            <ul className="flex items-center min-w-max gap-2 md:gap-4 lg:gap-6 px-4 sm:justify-center">
              {[
                "All",
                "Security conferences",
                "Hackathons",
                "Coding Bootcamps",
                "Corporate Tech Workshops",
              ].map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer font-semibold py-2 px-5 rounded-3xl border border-gray-300 transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-linear-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-white text-[#57699b]"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <section className="event-cards pb-10 flex justify-center">
        <div className="px-8 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1100px]">
          {filteredEvents.map((event) => (
            <div
              key={event._id}
              className="group mt-3 pb-2 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-2 cursor-pointer max-w-[320px] flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="px-5 py-2 flex flex-col flex-grow">
                <h2 className="font-bold text-xl text-[#333] group-hover:bg-linear-to-r from-blue-500 to-purple-600 group-hover:bg-clip-text group-hover:text-transparent">
                  {event.title}
                </h2>

                <p className="text-gray-500 py-1">
                  <i className="fa-regular fa-calendar pr-2"></i> {event.date2}
                </p>

                <p className="text-gray-500 py-1 mb-2">
                  <i className="fa-solid fa-location-dot pr-2"></i>{" "}
                  {event.location}
                </p>

                <button
                  onClick={() => {
                    navigate(`/cultural/${event._id}`, { state: event });
                  }}
                  className="mt-auto py-2 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full rounded-xl cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default TechCorporate;
