import React, { useState } from 'react';
import { Link } from "react-router-dom";

const VendorSidebar = () => {
    
    // Mock data structures
    const [isAllBookingsOpen, setIsAllBookingsOpen] = useState(false);
    const [allBookingsOpen, setAllBookingsOpen] = useState(false);

    return (
        <aside className="bg-gray-700 text-white min-w-64 space-y-6 py-7 px-2">
            <nav>
                <Link to="/vendordashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Dashboard</Link>

                <div className="relative">
                    <button
                        type="button"
                        className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600"
                        onClick={() => setIsAllBookingsOpen(!isAllBookingsOpen)}
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
                                d={isAllBookingsOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                            />
                        </svg>
                    </button>
                </div>

                {isAllBookingsOpen && (
                    <div className="relative">
                        <div className="mt-2 bg-gray-600 rounded shadow-lg">
                            <Link
                                to="#"
                                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
                            >
                                l
                            </Link>
                        </div>
                    </div>
                )}

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

                {allBookingsOpen && (
                    <div className="relative">
                        <div className="mt-2 bg-gray-600 rounded shadow-lg">
                            <Link
                                to="vendor-cab-management"
                                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
                            >
                               Cab Bookings Details
                            </Link>
                            <Link
                                to="vendor-flight-management"
                                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500"
                            >
                               Flight Details
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </aside>
    );
};

export default VendorSidebar;
