import React, { useState, useEffect } from "react";
import axios from "axios";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [allEvents, setAllEvents] = useState([]);
  const [eventsData, setEventsData] = useState({});

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const typeColors = {
    Corporate: "bg-blue-500",
    Wedding: "bg-pink-500",
    Cultural: "bg-purple-500",
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/events/all")
      .then(res => {
        if (res.data.success) setAllEvents(res.data.events);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    filterEventsForMonth();
  }, [currentDate, allEvents]);

  const filterEventsForMonth = () => {
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const grouped = {};

    allEvents.forEach(event => {
      const eventDate = new Date(event.date);
      const eventMonth = eventDate.getMonth() + 1;
      const eventYear = eventDate.getFullYear();
      const day = eventDate.getDate();

      if (eventMonth === month && eventYear === year) {
        if (!grouped[day]) grouped[day] = [];
        grouped[day].push({
          name: event.name,
          type: event.type,
          color: typeColors[event.type] || "bg-gray-500",
        });
      }
    });

    setEventsData(grouped);
  };

  const getDaysInMonth = (date) => {
    const days = [];
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const totalDays = lastDay.getDate();
    const startingDay = firstDay.getDay();

    for (let i = 0; i < startingDay; i++) days.push(null);
    for (let d = 1; d <= totalDays; d++) days.push(d);

    return days;
  };

  const days = getDaysInMonth(currentDate);
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const goToPreviousMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const goToNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <button
            onClick={goToPreviousMonth}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            ← Previous
          </button>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
            {monthNames[month]} {year}
          </h2>

          <button
            onClick={goToNextMonth}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            Next →
          </button>
        </div>

        {/* RESPONSIVE CALENDAR GRID */}
        <div className="grid grid-cols-7 text-xs sm:text-sm md:text-base gap-2 sm:gap-4">

          {/* Weekdays Header */}
          {daysOfWeek.map(day => (
            <div key={day} className="text-center font-semibold text-gray-600 py-2 hidden sm:block">
              {day}
            </div>
          ))}

          {/* Mobile Weekday Names inside boxes */}
          {days.map((day, i) => (
            <div
              key={i}
              className={`min-h-24 border border-gray-200 rounded-lg p-2 flex flex-col ${
                day ? "hover:bg-gray-50" : ""
              } transition`}
            >
              {day && (
                <>
                  <div className="text-gray-800 font-semibold">{day}</div>

                  {/* Events inside date cell */}
                  <div className="space-y-1 mt-1">
                    {eventsData[day] &&
                      eventsData[day].map((event, idx) => (
                        <div
                          key={idx}
                          className={`${event.color} text-white text-[10px] sm:text-xs p-1 rounded truncate`}
                        >
                          {event.name}
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* UPCOMING EVENTS */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          Upcoming Events This Month
        </h2>

        <div className="space-y-3">
          {Object.entries(eventsData).length === 0 && (
            <p className="text-gray-500">No events this month.</p>
          )}

          {Object.entries(eventsData).map(([day, events]) =>
            events.map((event, idx) => (
              <div
                key={`${day}-${idx}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${event.color}`} />
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-gray-500">
                      {monthNames[month]} {day}, {year}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs text-white w-fit ${event.color}`}
                >
                  {event.type}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
