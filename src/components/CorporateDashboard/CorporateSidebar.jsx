import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CorporateSidebar = () => {
  const [allUserOpen, setAllUserOpen] = useState(false);
  return (
    <aside className="bg-gray-700 text-white min-w-64 space-y-6 py-7 px-2">
      <nav>
        <Link
          to="/corporatedashboard"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600"
        >
          Dashboard
        </Link>
        <div className="relative">
          <button
            type="button"
            className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600"
            onClick={() => setAllUserOpen(!allUserOpen)}
          >
            All User Details
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
                d={allUserOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </button>
        </div>
        {allUserOpen && (
          <div className="mt-2 bg-gray-600 rounded shadow-lg">
            <Link
              to="/corporatedashboard/corporate-cab-details"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
            >
              Corporate Cab Details
            </Link>
            <Link
              to="/corporatedashboard/flight-details"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
            >
              Corporate Flight Details
            </Link>
          </div>
        )}
      </nav>
    </aside>
  );
}

export default CorporateSidebar