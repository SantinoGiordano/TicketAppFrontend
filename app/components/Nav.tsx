// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" w-screen fixed z-100 bg-white h-30 p-5 px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-900">Event</div>
      <ul className=" flex space-x-6 text-md font-medium text-blue-900">
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
