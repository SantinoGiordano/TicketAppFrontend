// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Event</div>
      <ul className="flex space-x-6 text-sm font-medium text-gray-700">
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
