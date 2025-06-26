
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">Gemini Tickets</a>
        </Link>
        <div className="flex items-center">
          <Link href="/events">
            <a className="mr-4">Events</a>
          </Link>
          <SignedIn>
            <Link href="/profile">
              <a className="mr-4">Profile</a>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
