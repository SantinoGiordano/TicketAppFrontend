'use client';

import React, { useEffect, useRef, useState } from 'react';

const DepartureDate = () => {
  const [date, setDate] = useState("Pick a date");
  const calendarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only import Cally in the browser
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
    <>
      <button
        popoverTarget="cally-popover1"
        className="btn btn-outline"
        id="cally1"
      >
        {date}
      </button>

      <div
        popover="auto"
        id="cally-popover1"
        className="dropdown bg-base-100 p-4 rounded-box shadow-lg"
      >
        <calendar-date class="cally" ref={calendarRef}>
          <svg
            aria-label="Previous"
            className="fill-current size-4"
            slot="previous"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg
            aria-label="Next"
            className="fill-current size-4"
            slot="next"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
      </div>
    </>
  );
};

export default DepartureDate;
