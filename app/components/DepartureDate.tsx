'use client';

import React, { useEffect, useRef, useState } from 'react';

// Allow custom element in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'calendar-date': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'calendar-month': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const DepartureDate = () => {
  const [date, setDate] = useState("Pick a date");
  const calendarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    import('cally').then(() => {
      const calendar = calendarRef.current;

      const handleChange = (e: any) => {
        setDate(e.target.value);
      };

      if (calendar) {
        calendar.addEventListener('change', handleChange);
      }

      return () => {
        if (calendar) {
          calendar.removeEventListener('change', handleChange);
        }
      };
    });
  }, []);

  return (
    <div className="relative">
      <button
        popoverTarget="cally-popover1"
        id="cally1"
        className="px-6 py-2 text-sm font-medium border border-gray-400 rounded-lg bg-white hover:bg-gray-100 transition"
      >
        {date}
      </button>

      <div
        popover="auto"
        id="cally-popover1"
        className="dropdown z-50 mt-2 bg-white p-4 rounded-xl shadow-xl border border-gray-200"
      >
        <calendar-date class="cally" ref={calendarRef}>
          <svg
            aria-label="Previous"
            className="fill-current w-4 h-4"
            slot="previous"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <svg
            aria-label="Next"
            className="fill-current w-4 h-4"
            slot="next"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
      </div>
    </div>
  );
};

export default DepartureDate;
