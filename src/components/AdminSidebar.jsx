import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);
  const [allBookingsOpen, setAllBookingsOpen] = useState(false);
  const [services, setServices] = useState(false);
  return (
    <aside className="bg-gray-800 text-white min-w-64 space-y-6 py-7 px-2">
      <nav>
        <Link to="/admin" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Dashboard</Link>
        
        <div className="relative">
          <button
            type="button"
            className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600"
            onClick={() => setIsUserDetailsOpen(!isUserDetailsOpen)}
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
                d={isUserDetailsOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </button>

          {isUserDetailsOpen && (
            <div className="mt-2 bg-gray-600 rounded shadow-lg">
              <Link
                to="/admin/corporate-users"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Corporate Users
              </Link>
              <Link
                to="/admin/retail-users"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Retail Users
              </Link>
              <Link
                to="/admin/vendor-details"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Vendor Details
              </Link>
            </div>
          )}
        </div>

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

          {allBookingsOpen && (
            <div className="mt-2 bg-gray-600 rounded shadow-lg">
              <Link
                to="/admin/flightbookingdetails"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Flight Booking Details
              </Link>
              <Link
                to="/admin/trainbookingdetails"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Train Booking Details
              </Link>
              <Link
                to="/admin/cabbookingdetails"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Cab Booking Details
              </Link>
              <Link
                to="/admin/volvobusbookingdetails"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Volvo Bus Booking Details
              </Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            type="button"
            className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600"
            onClick={() => setServices(!services)}
          >
            Services
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
                d={services ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg>
          </button>

          {services && (
            <div className="mt-2 bg-gray-600 rounded shadow-lg">
              <Link
                to="/admin/hotelbookingdetails"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Hotel Booking Details
              </Link>
              <Link
                to="/admin/healthinsurance-details"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Health Insurance Details
              </Link>
              <Link
                to="/admin/travelinsurance-details"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
              >
                Travel Insurance Details
              </Link>
            </div>
          )}
        </div>
        <Link to="/admin/reports" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Reports</Link>
        <Link to="/admin/retail-profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Profile</Link>
        <Link to="/admin/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Settings</Link>
        <Link to="/admin/logout" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Logout</Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

