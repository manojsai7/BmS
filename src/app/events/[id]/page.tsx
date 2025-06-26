
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Event {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
  eventType: string;
  imageUrl: string;
}

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const response = await axios.get<Event>(`/api/events/${id}`);
          setEvent(response.data);
        } catch (err) {
          setError('Failed to fetch event details.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchEvent();
    }
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={event.imageUrl} alt={event.name} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-2">{event.name}</h1>
          <p className="text-gray-600 text-lg mb-2">{event.location}</p>
          <p className="text-gray-600 text-lg mb-4">{new Date(event.date).toLocaleString()}</p>
          <p className="text-gray-800 mb-4">{event.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
