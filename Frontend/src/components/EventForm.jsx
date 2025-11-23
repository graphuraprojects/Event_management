import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ date, onEventAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', {
        date: date.toISOString(),
        title,
        description,
      });
      setTitle('');
      setDescription('');
      onEventAdded();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div className="mt-4 p-4 border rounded">
      <h3 className="text-lg mb-2">Add Event for {date.toDateString()}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;