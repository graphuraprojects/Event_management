import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from './EventForm';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  useEffect(() => {
    fetchEvents();
  }, [year, month]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`/api/events/${year}/${month + 1}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="p-4"></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayEvents = events.filter(event => new Date(event.date).toDateString() === date.toDateString());
    days.push(
      <div
        key={day}
        className="p-4 border cursor-pointer hover:bg-gray-100"
        onClick={() => setSelectedDate(date)}
      >
        <div className="font-bold">{day}</div>
        {dayEvents.map(event => (
          <div key={event._id} className="text-sm text-blue-600">{event.title}</div>
        ))}
      </div>
    );
  }

  const handleEventAdded = () => {
    setSelectedDate(null);
    fetchEvents();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <button onClick={() => setCurrentDate(new Date(year, month - 1))} className="px-4 py-2 bg-blue-500 text-white rounded">Prev</button>
        <h2 className="text-2xl">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => setCurrentDate(new Date(year, month + 1))} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-4 font-bold text-center">{day}</div>
        ))}
        {days}
      </div>
      {selectedDate && (
        <EventForm date={selectedDate} onEventAdded={handleEventAdded} />
      )}
    </div>
  );
};

export default Calendar;