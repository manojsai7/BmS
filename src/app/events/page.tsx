
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Event {
  id: number;
  name: string;
  location: string;
  date: string;
  eventType: string;
  imageUrl: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<Event[]>('/api/events');
        setEvents(response.data);
      } catch (err) {
        setError('Failed to fetch events.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="border rounded-lg overflow-hidden">
            <img src={event.imageUrl} alt={event.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{event.name}</h2>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <div key={event.id} className="border rounded-lg overflow-hidden">
            <img src={event.imageUrl} alt={event.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{event.name}</h2>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
