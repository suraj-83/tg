import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/TGESLogo.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [travelMode, setTravelMode] = useState(false)
    const [services, setServices] = useState(false);
    const [insurance, setInsurance] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false)

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    const handleLogout = async (e) => {
        e.preventDefault();

        const response = await dispatch(logout());

        console.log(response)
        if (response?.payload?.success) {
            navigate("/");
        }
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-5">
                    <Link to="/admin">
                        <img src={Logo} alt="TGES" className="w-16" />
                    </Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>

                        <li className="relative" onMouseEnter={() => setTravelMode(true)} onMouseLeave={() => setTimeout(() => setTravelMode(false), 100)}>
                            <button type="button" className="text-gray-600 w-28 hover:text-gray-900">
                                Travel Mode <span className="right-0 text-gray-400">▾</span>
                            </button>
                            {travelMode && (
                                <ul className="absolute w-full bg-white text-gray-600 border pt-2 right-0">
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
                        <li className="relative" onMouseEnter={() => setServices(true)} onMouseLeave={() => setTimeout(() => setServices(false), 100)}>
                            <button type="button" className="text-gray-600 w-28 hover:text-gray-900">
                                Services <span className="right-0 text-gray-400">▾</span>
                            </button>
                            {services && (
                                <ul className="absolute w-full bg-white text-gray-600 border pt-2 right-0">
                                    <li><Link to="/hotelbookings" className="block px-5 py-2 hover:bg-gray-200">Hotel</Link></li>
                                    <li><Link to="/passport" className="block px-5 py-2 hover:bg-gray-200">Passport</Link></li>
                                    <li className="relative" onMouseEnter={() => setInsurance(true)} onMouseLeave={() => setTimeout(() => setInsurance(false), 100)}>
                                        <button type="button" className="flex flex-row items-center justify-center px-5 py-2 hover:bg-gray-200 w-full">
                                            Insurance <span>&#9656;</span>
                                        </button>
                                        {insurance && (
                                            <ul className="w-full absolute left-full -top-0.5 bg-white text-gray-600 border">
                                                <li><Link to="/travelinsurance" className="flex w-full px-5 py-2 hover:bg-gray-200">Travel</Link></li>
                                                <li><Link to="/healthlifeinsurance" className="flex px-5 py-2 hover:bg-gray-200">Health</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>
                        {
                            isLoggedIn ? (
                                <li>
                                    <button type="button" onClick={handleLogout} className="text-white bg-red-600 rounded-md px-4 py-2 hover:bg-red-800">
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <div className='flex items-center'>
                                    <li className="relative" onMouseEnter={() => setLogin(true)} onMouseLeave={() => setTimeout(() => setLogin(false), 100)}>
                                        <button type="button" className="text-gray-600 w-28 hover:text-gray-900">
                                            Login <span className="right-0 text-gray-400">▾</span>
                                        </button>
                                        {login && (
                                            <ul className="absolute w-full bg-white text-gray-600 border pt-2 right-0">
                                                <li><Link to="/retail-login" className="block px-5 py-2 hover:bg-gray-200">Retail</Link></li>
                                                <li><Link to="/corporate-login" className="block px-5 py-2 hover:bg-gray-200">Corporate</Link></li>
                                                <li><Link to="/vendor-login" className="block px-5 py-2 hover:bg-gray-200">Vendor</Link></li>
                                                <li><Link to="/employeelogin" className="block px-5 py-2 hover:bg-gray-200">Employee</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li className="relative" onMouseEnter={() => setRegister(true)} onMouseLeave={() => setTimeout(() => setRegister(false), 100)}>
                                        <button type="button" className="text-gray-600 w-28 hover:text-gray-900">
                                            Register <span className="right-0 text-gray-400">▾</span>
                                        </button>
                                        {register && (
                                            <ul className="absolute w-full bg-white text-gray-600 border pt-2 right-0">
                                                <li><Link to="/retail" className="block px-5 py-2 hover:bg-gray-200">Retail</Link></li>
                                                <li><Link to="/corporate" className="block px-5 py-2 hover:bg-gray-200">Corporate</Link></li>
                                                <li><Link to="/vendor" className="block px-5 py-2 hover:bg-gray-200">Vendor</Link></li>
                                                <li><Link to="/employee" className="block px-5 py-2 hover:bg-gray-200">Employee</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
