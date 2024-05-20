import React, { useState } from 'react';

const TravelMode = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">Travel Booking</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Flight Booking</a>
            <a href="#" className="text-white hover:text-gray-300">Train Ticket Booking</a>
            <a href="#" className="text-white hover:text-gray-300">Cab Services</a>
            <div className="relative">
              <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
                Volvo Bus Services
                <svg className="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</a>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Flight Booking</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Train Ticket Booking</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Cab Services</a>
          <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">Volvo Bus Services</a>
        </div>
      )}
    </nav>
  );
};

export default TravelMode;