// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="z-100 bg-blue-900 h-20 p-5 px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-white">Event</div>
      <ul className=" flex space-x-6 text-md font-medium text-white">
        <li>
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/tickets" className="hover:text-blue-500 transition-colors">
            Tickets
          </Link>
        </li>
        <li>
          <Link href="/plan" className="hover:text-blue-500 transition-colors">
            Events
          </Link>
        </li>
        <li>
          <Link href="/reach" className="hover:text-blue-500 transition-colors">
            Reach
          </Link>
        </li>
      </ul>
    </nav>
  );
}
