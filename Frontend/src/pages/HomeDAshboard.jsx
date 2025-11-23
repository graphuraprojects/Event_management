import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsLineChart from "./EventChart";

const Home1 = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from backend
  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events/all");
      setEvents(res.data.events);
    } catch (error) {
      console.log("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Filter upcoming events
  const upcomingEvents = events.filter((e) => e.status === "Upcoming");

  // Count event categories
  const categoryCount = {
    Corporate: 0,
    Wedding: 0,
    Cultural: 0,
  };

  events.forEach((event) => {
    if (categoryCount[event.type] !== undefined) {
      categoryCount[event.type] += 1;
    }
  });

  const categoryData = [
    { name: "Corporate", value: categoryCount.Corporate, color: "#3B82F6" },
    { name: "Wedding", value: categoryCount.Wedding, color: "#EC4899" },
    { name: "Cultural", value: categoryCount.Cultural, color: "#A855F7" },
  ];

  // Pie chart logic
  const total = categoryData.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  const pieSegments = categoryData.map((item) => {
    const angle = total ? (item.value / total) * 360 : 0;
    const percent = total ? ((item.value / total) * 100).toFixed(1) : 0;

    const segment = {
      ...item,
      percentage: percent,
      startAngle: currentAngle,
      endAngle: currentAngle + angle,
    };
    currentAngle += angle;
    return segment;
  });

  const getPiePath = (startAngle, endAngle, radius = 60) => {
    const start = (startAngle - 90) * (Math.PI / 180);
    const end = (endAngle - 90) * (Math.PI / 180);
    const x1 = 70 + radius * Math.cos(start);
    const y1 = 70 + radius * Math.sin(start);
    const x2 = 70 + radius * Math.cos(end);
    const y2 = 70 + radius * Math.sin(end);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M 70 70 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">

      {/* LEFT: UPCOMING EVENTS */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-[70%]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Events
        </h2>

        <div className="space-y-4">
          {upcomingEvents.length === 0 && (
            <p className="text-gray-500">No upcoming events.</p>
          )}

          {upcomingEvents.map((event) => (
            <div
              key={event._id}
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition"
            >
              <div className="text-3xl font-bold text-blue-600">
                {new Date(event.date).getDate()}
              </div>

              <div className="flex-1">
                <p className="font-medium text-gray-800">{event.name}</p>
                <p className="text-sm text-gray-500">Type: {event.type}</p>
                <p className="text-sm text-gray-500">
                  Attendees: {event.attendees}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: PIE + LINE CHART */}
      <div className="w-full lg:w-[30%] flex flex-col gap-4">

        {/* PIE CHART */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Event Categories Distribution
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="relative max-w-[140px]">
              <svg width="140" height="140" viewBox="0 0 140 140">
                {pieSegments.map((segment, index) => (
                  <g key={index}>
                    <path
                      d={getPiePath(segment.startAngle, segment.endAngle)}
                      fill={segment.color}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                    <title>
                      {segment.name} ({segment.percentage}%)
                    </title>
                  </g>
                ))}
              </svg>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-gray-700">
                    {item.name} ({item.value})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LINE CHART */}
        <div className="bg-white rounded-lg shadow-md p-3 w-full">
          <EventsLineChart />
        </div>
      </div>
    </div>
  );
};

export default Home1;
