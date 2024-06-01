import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/TGESLogo.jpeg';

const Header = () => {
    const [travelMode, setTravelMode] = useState(false)
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false)

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-5">
                    <Link to="/">
                        <img src={Logo} alt="TGES" className="w-16" />
                    </Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>

                        <li className="relative">
                            <button type="button" onClick={() => setTravelMode(!travelMode)} className="text-gray-600 w-28 hover:text-gray-900">
                                Travel Mode <span className="right-0 text-gray-400">▾</span>
                            </button>
                            {travelMode && (
                                <ul className="absolute w-full bg-white text-gray-600 border mt-2 right-0">
                                    <li><Link to="/flightbookings" className="block px-5 py-2 hover:bg-gray-200">Flight</Link></li>
                                    <li><Link to="/trainbookings" className="block px-5 py-2 hover:bg-gray-200">Train</Link></li>
                                    <li><Link to="/cabbookings" className="block px-5 py-2 hover:bg-gray-200">Cab</Link></li>
                                    <li><Link to="/volvobusbookings" className="block px-5 py-2 hover:bg-gray-200">Volvo Bus</Link></li>
                                    <li><Link to="/hotelbookings" className="block px-5 py-2 hover:bg-gray-200">Hotel</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="#" className="text-gray-600 hover:text-gray-900">Destinations</Link></li>
                        <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                        <li className="relative">
                            <button type="button" className="text-gray-600 w-28 hover:text-gray-900" onClick={() => setLogin(!login)}>
                                Login <span className="right-0 text-gray-400">▾</span>
                            </button>
                            {login && (
                                <ul className="absolute w-full bg-white text-gray-600 border mt-2 right-0">
                                    <li><Link to="/retail-login" className="block px-5 py-2 hover:bg-gray-200">Retail</Link></li>
                                    <li><Link to="/corporate-login" className="block px-5 py-2 hover:bg-gray-200">Corporate</Link></li>
                                    <li><Link to="/vendor-login" className="block px-5 py-2 hover:bg-gray-200">Vendor</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className="relative">
                            <button type="button" className="text-gray-600 w-28 hover:text-gray-900" onClick={() => setRegister(!register)}>
                                Register <span className="right-0 text-gray-400">▾</span>
                            </button>
                            {register && (
                                <ul className="absolute w-full bg-white text-gray-600 border mt-2 right-0">
                                    <li><Link to="/retail" className="block px-5 py-2 hover:bg-gray-200">Retail</Link></li>
                                    <li><Link to="/corporate" className="block px-5 py-2 hover:bg-gray-200">Corporate</Link></li>
                                    <li><Link to="/vendor" className="block px-5 py-2 hover:bg-gray-200">Vendor</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
