
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const events = [
    {
      id: 1,
      name: 'Movie: The Rise of Gemini',
      description: 'A thrilling movie about the rise of artificial intelligence.',
      location: 'Cinema Hall 1',
      date: '2025-07-01T19:00:00Z',
      eventType: 'MOVIE',
      imageUrl: 'https://via.placeholder.com/300x450',
    },
    {
      id: 2,
      name: 'Concert: The AI Revolution',
      description: 'Experience the future of music with AI-powered performances.',
      location: 'Open Air Theatre',
      date: '2025-07-15T20:00:00Z',
      eventType: 'CONCERT',
      imageUrl: 'https://via.placeholder.com/300x450',
    },
    {
      id: 3,
      name: 'Sport: The Code Clash',
      description: 'Watch the ultimate battle of coding prowess in this exciting sport event.',
      location: 'The Arena',
      date: '2025-08-01T15:00:00Z',
      eventType: 'SPORT',
      imageUrl: 'https://via.placeholder.com/300x450',
    },
  ];

  const event = events.find(e => e.id === parseInt(id));

  if (event) {
    return NextResponse.json(event);
  } else {
    return new NextResponse('Event not found', { status: 404 });
  }
}
