import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import {
  RETAIL_TYPE_NAME,
  CORPORATE_TYPE_NAME,
  VENDOR_TYPE_NAME,
} from "../config/config";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [travelMode, setTravelMode] = useState(false);
  const [services, setServices] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [register, setRegister] = useState(false);

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const userType =
    useSelector((state) => state?.auth?.role) || localStorage.getItem("role");

  // Add userType from the Redux store or local storage

  const handleLogout = async (e) => {
    e.preventDefault();

    const response = await dispatch(logout());

    if (response?.payload?.success) {
      navigate("/");
    }
  };
  const getDashboardLink = () => {
    if (!userType) return "/";
    switch (userType) {
      case RETAIL_TYPE_NAME:
        return "/retaildashboard";
      case CORPORATE_TYPE_NAME:
        return "/corporatedashboard";
      case VENDOR_TYPE_NAME:
        return "/vendordashboard";
      default:
        return "/";
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const handleProtectedRoute = (route) => {
    if (!isLoggedIn) {
      navigate("/main-login");
    } else {
      navigate(route);
    }
  };

  return (
    <nav className="shadow-md">
      <div>
        <div className="flex justify-between items-center p-4 md:p-6 lg:p-6">
          <Link to="/">
            <img
              src="https://www.tgestravel.com/assets/images/logo/tges-logo.png"
              alt="TGES"
              className="w-24 md:w-28 lg:w-36"
            />
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul
            className={`fixed inset-0 z-40 bg-white lg:bg-gradient-to-r md:bg-gradient-to-r md:from-[#EAEEF0] md:to-white from-[#EEEFF3] to-white to-[50%] from-[39%] text-sm w-full lg:opacity-95 md:opacity-95 lg:rounded-r-full md:rounded-r-full lg:items-center md:items-center transform ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 md:static md:flex md:space-x-6 md:translate-x-0`}
          >
            {isMobileMenuOpen && (
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMobileMenu}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <FaTimes size={24} />
                </button>
              </div>
            )}

            <div className="lg:flex md:flex lg:ml-auto md:ml-auto items-center">
              <li className="border-b md:border-none">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block pl-4 mt-2 pb-2 text-blue-950 hover:text-gray-900"
                >
                <RiHomeLine size={22} />
                </Link>
            </li>
            <li className="border-b md:border-none">
                <Link
                to="/about"
                onClick={closeMobileMenu}
                className="block py-4 px-2 text-blue-950 hover:bg-blue-900 hover:text-white transition-colors md:whitespace-nowrap"
                >
                About us
                </Link>
            </li>
            <li className="border-b md:border-none md:flex md:items-center md:justify-center md:w-auto md:whitespace-nowrap hover:bg-blue-900 hover:opacity-95 hover:text-white">
                <Link
                to="/contact-us"
                onClick={closeMobileMenu}
                className="block py-4 px-2 text-blue-950 hover:text-white"
                >
                Contact Us
                </Link>
            </li>
            {isLoggedIn && (
                <li className="border-b md:border-none">
                <Link
                    to={getDashboardLink()}
                    onClick={closeMobileMenu}
                    className="block py-4 px-2 text-blue-950 hover:bg-blue-900 hover:text-white transition-colors md:whitespace-nowrap"
                >
                    Dashboard
                  </Link>
                </li>
              )}
              <li
                className="relative border-b md:border-none"
                onMouseEnter={() => setTravelMode(true)}
                onMouseLeave={() => setTimeout(() => setTravelMode(false), 100)}
              >
                <button
                  type="button"
                  className="block w-full py-4 px-2 text-blue-950 hover:bg-blue-900 hover:text-white text-left md:text-center md:whitespace-nowrap transition-colors"
                >
                  Select Travel Mode{" "}
                  <span className="right-0 text-gray-400">▾</span>
                </button>
                {travelMode && (
                  <ul className="lg:absolute md:absolute w-full bg-white text-gray-600 border pt-2 left-0 md:right-0 md:w-auto md:left-auto">
                    <li>
                      <button
                        onClick={() => handleProtectedRoute("/flightbookings")}
                        className="block px-10 py-2 hover:bg-gray-200 w-full text-left"
                      >
                        Flight
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleProtectedRoute("/trainbookings")}
                        className="block px-10 py-2 hover:bg-gray-200 w-full text-left"
                      >
                        Train
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleProtectedRoute("/cabbookings")}
                        className="block px-10 py-2 hover:bg-gray-200 w-full text-left"
                      >
                        Cab
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          handleProtectedRoute("/volvobusbookings")
                        }
                        className="block px-10 py-2 hover:bg-gray-200 w-full text-left"
                      >
                        Volvo Bus
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              {/* Travel Services Dropdown */}
              <li
                className="relative border-b md:border-none"
                onMouseEnter={() => setServices(true)}
                onMouseLeave={() => setTimeout(() => setServices(false), 100)}
              >
                <button
                  type="button"
                  className="block w-full py-4 px-2 hover:bg-blue-900 hover:text-white text-blue-950 text-left md:text-center md:whitespace-nowrap transition-colors"
                >
                  Travel Services{" "}
                  <span className="right-0 text-gray-400">▾</span>
                </button>
                {services && (
                  <ul className="w-full lg:absolute md:absolute bg-white text-gray-600 border pt-2 md:right-0 md:w-auto md:left-auto">
                    <li>
                      <button
                        onClick={() => handleProtectedRoute("/hotelbookings")}
                        className="block px-5 py-2 hover:bg-gray-200 w-full text-left"
                      >
                        Hotel
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleProtectedRoute("/passport")}
                        className="block px-5 py-2 hover:bg-gray-200 w-full text-left"
                      >
                        Passport
                      </button>
                    </li>
                    {/* Insurance Submenu */}
                    <li
                      className="relative"
                      onMouseEnter={() => setInsurance(true)}
                      onMouseLeave={() =>
                        setTimeout(() => setInsurance(false), 100)
                      }
                    >
                      <button
                        type="button"
                        className="flex flex-row items-center px-6 py-2 hover:bg-gray-200 w-full"
                      >
                        Insurance <span>▾</span>
                      </button>
                      {insurance && (
                        <ul className=" lg:absolute md:absolute lg:left-full md:left-full lg:-top-[0.5px] md:-top-[0.8px] bg-white text-gray-600 border">
                          <li>
                            <button
                              onClick={() =>
                                handleProtectedRoute("/travelinsurance")
                              }
                              className="block px-2 py-2 hover:bg-gray-200"
                            >
                              Travel
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() =>
                                handleProtectedRoute("/healthlifeinsurance")
                              }
                              className="block px-2 py-2 hover:bg-gray-200"
                            >
                              Health
                            </button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {isLoggedIn ? (
                <li className="border-b md:border-none">
                  <button
                    type="button"
                    onClick={(e) => {
                      handleLogout(e);
                      closeMobileMenu();
                    }}
                    className="border-b rounded-r-full md:border-none md:flex md:items-center md:justify-center md:w-auto md:whitespace-nowrap hover:opacity-95 hover:text-white block w-full py-4 px-2 text-white bg-red-600 rounded-md hover:bg-red-800 transition-colors text-left md:text-center"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <li className="border-b md:border-none">
                    <Link
                      to="/main-login"
                      onClick={closeMobileMenu}
                      className="block w-full py-4 px-2 text-blue-950 hover:bg-blue-900 hover:text-white text-left md:text-center md:whitespace-nowrap transition-colors"
                    >
                      Login
                    </Link>
                  </li>
                  <li
                    className="relative border-b md:border-none"
                    onMouseEnter={() => setRegister(true)}
                    onMouseLeave={() =>
                      setTimeout(() => setRegister(false), 100)
                    }
                  >
                    <button
                      type="button"
                      className="block w-full py-4 px-2 text-blue-950 hover:bg-blue-900 hover:text-white text-left md:text-center md:whitespace-nowrap transition-colors"
                    >
                      Register With Us
                      <span className="right-0 text-gray-400">▾</span>
                    </button>
                    {register && (
                      <ul className="absolute w-full left-full bg-white text-gray-600 border px-3 pt-2 md:right-0 md:w-auto md:left-auto">
                        <li>
                          <Link
                            to="/retail"
                            onClick={closeMobileMenu}
                            className="block px-5 py-2 hover:bg-gray-200"
                          >
                            Retail
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/vendor"
                            onClick={closeMobileMenu}
                            className="block px-5 py-2 hover:bg-gray-200"
                          >
                            Vendor
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/corporate"
                            onClick={closeMobileMenu}
                            className="block px-5 py-2 hover:bg-gray-200"
                          >
                            Corporate
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
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
