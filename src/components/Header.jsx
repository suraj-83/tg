import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-5">
                    <Link to="/">
                        <img src="https://www.tgestravel.com/assets/images/logo/tges-logo.png" alt="TGES" className="w-24" />
                    </Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                        <li className="relative">
                            <button type="button" className="text-gray-600 w-28 hover:text-gray-900" onClick={toggleDropdown}>
                                Travel Mode <span className="right-0 text-gray-400">▾</span>
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute w-full bg-white text-gray-600 border mt-2 right-0">
                                    <li><Link to="/flightbookings" className="block px-5 py-2 hover:bg-gray-200">Flight</Link></li>
                                    <li><Link to="/trainbookings" className="block px-5 py-2 hover:bg-gray-200">Train</Link></li>
                                    <li><Link to="/cabbookings" className="block px-5 py-2 hover:bg-gray-200">Cab</Link></li>
                                    <li><Link to="/volvobusbookings" className="block px-5 py-2 hover:bg-gray-200">Volvo Bus</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="#" className="text-gray-600 hover:text-gray-900">Destinations</Link></li>
                        <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
