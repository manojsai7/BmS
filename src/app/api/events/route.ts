
import { NextResponse } from 'next/server';

export async function GET() {
  const events = [
    {
      id: 1,
      name: 'Movie: The Rise of Gemini',
      location: 'Cinema Hall 1',
      date: '2025-07-01T19:00:00Z',
      eventType: 'MOVIE',
      imageUrl: 'https://via.placeholder.com/300x450',
    },
    {
      id: 2,
      name: 'Concert: The AI Revolution',
      location: 'Open Air Theatre',
      date: '2025-07-15T20:00:00Z',
      eventType: 'CONCERT',
      imageUrl: 'https://via.placeholder.com/300x450',
    },
  ];
  return NextResponse.json(events);
}
