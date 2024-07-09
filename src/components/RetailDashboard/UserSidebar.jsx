import React, { useState } from "react";

import { Link } from "react-router-dom";

export function UserSidebar() {
  const [allBookingsOpen, setAllBookingsOpen] = React.useState(false);
  return (
    <aside className="bg-gray-700 text-white min-w-64 space-y-6 py-7 px-2``">
      <nav>
      <Link to="retaildashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Dashboard</Link>
        
      <div className="relative">
          <button
            type="button"
            className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600"
            onClick={() => setAllBookingsOpen(!allBookingsOpen)}
          >
            All Booking Details
            <svg
              className="inline-block w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={allBookingsOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </button>
      </div>

      {/* Add state variable */}
      {/* This will be toggled on click */}
      {/* Define state variable */}
              

        <div className="relative">

          {allBookingsOpen && (
            <div className="mt-2 bg-gray-600 rounded shadow-lg">

              <Link
                to="/retaildashboard/cab-details"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
              Cab Booking Details
              </Link>
              <Link
                to="/retaildashboard/flightbooking-details"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
              Flight Booking Details
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default UserSidebar;
