import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const EventsLineChart = () => {
  const [data, setData] = useState([]);

  // Convert number -> month name
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const fetchData = async () => {
    const res = await axios.get("/api/events/all");
    const events = res.data.events;

    // Count events per month
    const monthlyCount = Array(12).fill(0);

    events.forEach(event => {
      if (event.date) {
        const month = new Date(event.date).getMonth();
        monthlyCount[month] += 1;
      }
    });

    // Prepare graph data
    const graphData = monthlyCount.map((count, i) => ({
      month: monthNames[i],
      count,
      percentage: count > 0 ? ((count / events.length) * 100).toFixed(1) : 0,
    }));

    setData(graphData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Events Overview</h2>
        <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg">
          Monthly
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ stroke: "#6366f1", strokeWidth: 2, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventsLineChart;
