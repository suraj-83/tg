import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../assets/TGESLogo.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { FaBars, FaTimes } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [travelMode, setTravelMode] = useState(false);
    const [services, setServices] = useState(false);
    const [insurance, setInsurance] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    const handleLogout = async (e) => {
        e.preventDefault();

        const response = await dispatch(logout());

        if (response?.payload?.success) {
            navigate("/");
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (<nav className="shadow-md">
        <div>
            <div className="flex justify-between mr-4 items-center">
                <Link to="/">
                    <img src="https://www.tgestravel.com/assets/images/logo/tges-logo.png" alt="TGES" className="w-full pl-3 pt-3" />
                </Link>
    
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>                
                <ul className={`fixed inset-0 z-40 bg-white lg:bg-gradient-to-r from-[#EEEFF3] to-white to-[50%] from-[39%] text-sm w-full lg:opacity-95 lg:rounded-r-full lg:items-center transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:static md:flex md:space-x-6 md:translate-x-0`}>
                    {isMobileMenuOpen && (
                        <div className="flex justify-end p-4">
                            <button onClick={closeMobileMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                <FaTimes size={24} />
                            </button>
                        </div>
                    )}
                    <div className='lg:flex lg:ml-[47.8%] items-center'>

                    <li className="border-b md:border-none"><Link to="/" onClick={closeMobileMenu} className="block pl-4 mt-2 pb-2 text-blue-950 hover:text-gray-900"><RiHomeLine size={22} /></Link></li>
                    <li className="border-b md:border-none"><Link to="/about" onClick={closeMobileMenu} className="block py-4  px-2 text-blue-950 hover:bg-blue-900 hover:opacity-95 hover:text-white">About us</Link></li>
                    
                    <li className="relative border-b md:border-none" onMouseEnter={() => setTravelMode(true)} onMouseLeave={() => setTimeout(() => setTravelMode(false), 100)}>
                        <button type="button" className="block w-full py-4 px-2 text-blue-950 hover:bg-blue-900 hover:opacity-95 hover:text-white text-left md:text-center">
                            select Travel Mode <span className="right-0 text-gray-400">▾</span>
                        </button>
                        {travelMode && (
                            <ul className="lg:absolute w-full bg-white text-gray-600 border pt-2 left-0 md:right-0 md:w-auto md:left-auto">
                                <li><Link to="/flightbookings" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Flight</Link></li>
                                <li><Link to="/trainbookings" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Train</Link></li>
                                <li><Link to="/cabbookings" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Cab</Link></li>
                                <li><Link to="/volvobusbookings" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Volvo Bus</Link></li>
                            </ul>
                        )}
                    </li>
                    
                    <li className="relative border-b md:border-none" onMouseEnter={() => setServices(true)} onMouseLeave={() => setTimeout(() => setServices(false), 100)}>
                        <button type="button" className="block w-full py-4 px-2 hover:bg-blue-900 hover:opacity-95 hover:text-white text-blue-950 text-left md:text-center">
                            Travel Services <span className="right-0 text-gray-400">▾</span>
                        </button>
                        {services && (
                            <ul className="w-full lg:absolute bg-white text-gray-600 text-extrabold border pt-2 md:right-0 md:w-auto md:left-auto">
                                <li><Link to="/hotelbookings" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Hotel</Link></li>
                                <li><Link to="/passport" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Passport</Link></li>
                                <li className="relative" onMouseEnter={() => setInsurance(true)} onMouseLeave={() => setTimeout(() => setInsurance(false), 100)}>
                                    <button type="button" className="flex flex-row items-center justify-between px-5 py-2 hover:bg-gray-200 w-full">
                                        Insurance <span>&#9656;</span>
                                    </button>
                                    {insurance && (
                                        <ul className="w-full -top-0.5 bg-white text-gray-600 border">
                                            <li><Link to="/travelinsurance" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Travel</Link></li>
                                            <li><Link to="/healthlifeinsurance" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Health</Link></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
    
                    {isLoggedIn ? (
                        <li className="border-b md:border-none">
                            <button type="button" onClick={(e) => { handleLogout(e); closeMobileMenu(); }} className="block w-full py-4 px-2 text-white bg-red-600 rounded-md hover:bg-red-800 text-left md:text-center">
                                Logout
                            </button>
                        </li>
                    ) : (
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                            <li className="relative border-b md:border-none" onMouseEnter={() => setLogin(true)} onMouseLeave={() => setTimeout(() => setLogin(false), 100)}>
                                <button type="button" className="block w-full py-4 px-2 text-blue-950 hover:bg-blue-900 hover:opacity-95 hover:text-white text-left md:text-center">
                                    Login <span className="right-0 text-gray-400">▾</span>
                                </button>
                                {login && (
                                    <ul className="absolute w-full left-full bg-white text-gray-600 border pt-2 md:right-0 md:w-auto md:left-auto">
                                        <li><Link to="/main-login" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Login</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className="relative" onMouseEnter={() => setRegister(true)} onMouseLeave={() => setTimeout(() => setRegister(false), 100)}>
                                <button type="button" className="block w-full py-4 px-2 text-blue-950 hover:bg-blue-900 hover:opacity-95 hover:text-white text-left md:text-center">
                                    Register With Us<span className="right-0 text-gray-400">▾</span>
                                </button>
                                {register && (
                                    <ul className="absolute w-full left-full bg-white text-gray-600 border pt-2 md:right-0 md:w-auto md:left-auto">
                                        <li><Link to="/retail" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Retail</Link></li>
                                        <li><Link to="/corporate" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Corporate</Link></li>
                                        <li><Link to="/vendor" onClick={closeMobileMenu} className="block px-5 py-2 hover:bg-gray-200">Vendor</Link></li>
                                    </ul>
                                )}
                            </li>
                            
                            <li className="border-b rounded-r-full md:border-none hover:bg-blue-900 hover:opacity-95 hover:text-white"><Link to="/contact" onClick={closeMobileMenu} className="block py-4 px-6 text-blue-950 hover:text-white">Contact Us</Link></li>
                        </div>
                    )}
                    </div>
                </ul>
            </div>
        </div>
    </nav>
    
    );
};

export default Header;
