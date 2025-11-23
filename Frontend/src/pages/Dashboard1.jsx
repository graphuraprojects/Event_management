// Full Dashboard Layout with Light Gradient Theme
// Using React + Tailwind CSS

import React from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Home, CalendarCheck, Settings, List } from "lucide-react";

// Pages
import Events from "./Events";
import Calendar from "./Calendar";
import SettingsPage from "./Settings";
import Home1 from './HomeDAshboard';
import LogoutButton from '../components/LogoutButton';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50">
      {/* Sidebar */}
      <div className="w-20 bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col items-center py-6 space-y-10 shadow-xl rounded-r-3xl">
        <Link to="/dashboard/" className={`p-3 rounded-xl transition-all ${location.pathname.includes("home") ? "bg-blue-500 text-white" : "text-blue-100 hover:bg-blue-500 hover:text-white"}`}>
          <Home size={26} />
        </Link>

        <Link to="/dashboard/events" className={`p-3 rounded-xl transition-all ${location.pathname.includes("events") ? "bg-blue-500 text-white" : "text-blue-100 hover:bg-blue-500 hover:text-white"}`}>
          <List size={26} />
        </Link>

        <Link to="/dashboard/calendar" className={`p-3 rounded-xl transition-all ${location.pathname.includes("calendar") ? "bg-blue-500 text-white" : "text-blue-100 hover:bg-blue-500 hover:text-white"}`}>
          <CalendarCheck size={26} />
        </Link>

        {/* <Link to="/dashboard/settings" className={`p-3 rounded-xl transition-all ${location.pathname.includes("settings") ? "bg-blue-500 text-white" : "text-blue-100 hover:bg-blue-500 hover:text-white"}`}>
          <Settings size={26} />
        </Link> */}

        {/* Back to Website */}
        <a href="/" className="p-3 rounded-xl transition-all text-blue-100 hover:bg-blue-500 hover:text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </a>
      </div> 

      {/* Main Section */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#fbfbff] via-[#f3f7ff] to-[#eef2ff] p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6 bg-white/40 backdrop-blur-lg p-4 rounded-2xl shadow-md">
          <h1 className="text-xl font-semibold text-gray-700">
            Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <img src="https://i.pravatar.cc/40" alt="profile" className="w-10 h-10 rounded-full shadow hidden md:block" />
            <LogoutButton />
          </div>
          
        </header>

        {/* Page Content */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Dashboard1 = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Home1 />} />
        <Route path="events" element={<Events />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </Layout>
  );
};

export default Dashboard1;
