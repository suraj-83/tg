import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import {
  MdAnalytics,
  MdLogout,
  MdSpaceDashboard,
  MdEventAvailable,
} from "react-icons/md";
import {
  FaChevronLeft,
  FaHotel,
  FaAngleRight,
  FaUserCircle,
} from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { TbSettingsPlus } from "react-icons/tb";

function VendorDashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [services, setServices] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get services from localStorage and parse them
  useEffect(() => {
    const servicesFromStorage = localStorage.getItem("services");
    console.log("Raw services from localStorage:", servicesFromStorage);

    if (servicesFromStorage) {
      try {
        const parsedServices = JSON.parse(servicesFromStorage);
        console.log("Parsed services:", parsedServices);
        setServices(parsedServices); // Assuming parsedServices is an array
      } catch (error) {
        console.error("Error parsing services:", error);
        setServices([]);
      }
    } else {
      console.log("No services found in localStorage, setting empty array.");
      setServices([]);
    }
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await dispatch(logout());
    console.log("Logout", response);
    if (response?.payload?.success) {
      navigate("/");
    }
  };

  return (
    <aside
      className={`relative top-0 min-h-screen min-w-[20%] z-50 text-white bg-gradient-to-r from-black from-20% to-slate-900 font-semibold space-y-6 transition-all duration-300 ${
        isSidebarCollapsed ? "-ml-[20%]" : ""
      }`}
    >
      <div className="sticky top-0 p-4">
        <div className="flex items-center space-x-2 p-4">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <span className="text-xl font-bold">Vendor Dashboard</span>
            </Link>
          </div>
          <span
            className={`absolute h-16 w-16 z-20 top-2 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer ${
              isSidebarCollapsed ? "-right-20" : "-right-8"
            }`}
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? <IoMenu size={30} /> : <FaChevronLeft />}
          </span>
        </div>
        <div className="space-y-4">
          <nav className="space-y-2">
            <Link
              to="/vendordashboard"
              className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
            >
              <MdSpaceDashboard size={25} />
              <span>Dashboard</span>
            </Link>
            <div className="group">
              <Link
                to="#"
                className="flex items-center justify-between space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <div className="flex items-center space-x-2">
                  <TbSettingsPlus size={22} />
                  <span>Management</span>
                </div>
                <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
              </Link>
              <div className="ml-4 space-y-2 hidden group-hover:block">
                {/* Conditionally render only Cab Vendor routes */}
                {services.includes("Cab") && (
                  <>
                    <Link
                      to="/vendordashboard/vendor-addcabrate"
                      className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                    >
                      <FaCar size={22} />
                      <span>Add Cab Rate</span>
                    </Link>
                    <Link
                      to="/vendordashboard/vendor-cabratecard"
                      className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                    >
                      <FaCar size={22} />
                      <span>Cab Rate Card</span>
                    </Link>
                  </>
                )}

                {/* Conditionally render only Hotel Vendor routes */}
                {services.includes("Hotel") && (
                  <>
                    <Link
                      to="/vendordashboard/vendor-addhotelratecard"
                      className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                    >
                      <FaHotel size={22} />
                      <span>Add Hotel Rate Card</span>
                    </Link>
                    <Link
                      to="/vendordashboard/vendor-hotelratecard"
                      className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                    >
                      <FaHotel size={22} />
                      <span>Hotel Rate Card</span>
                    </Link>
                  </>
                )}

                {/* Conditionally render only Event Vendor routes */}
                {services.includes("Event") && (
                  <>
                    <Link
                      to="/vendordashboard/vendor-eventratecardform"
                      className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                    >
                      <MdEventAvailable size={22} />
                      <span>Add Event Rate Card</span>
                    </Link>
                    <Link
                      to="/vendordashboard/vendor-eventratecard"
                      className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                    >
                      <MdEventAvailable size={22} />
                      <span>Event Rate Card</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <Link
              to="#"
              className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
            >
              <MdAnalytics size={22} />
              <span>Analytics</span>
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <Link
            to="/vendordashboard/vendor-profile"
            className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
          >
            <FaUserCircle size={22} />
            <span>Profile</span>
          </Link>
          <Link
            to="/vendor/logout"
            className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
            onClick={handleLogout}
          >
            <MdLogout size={22} />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default VendorDashboard;
