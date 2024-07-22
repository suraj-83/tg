import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../redux/slices/dashboardSlice";
import logo from "../assets/TGESLogo.png";
import {MdAnalytics,MdLogout,MdMiscellaneousServices,MdSpaceDashboard} from "react-icons/md";
import { FaUsers,FaUser,FaChevronLeft,FaBuilding,FaAngleRight,FaBus, FaHandHoldingMedical,FaUserCircle} from "react-icons/fa";
import {FaShop,FaEarthAsia,FaTrainSubway,FaCarRear,FaPassport,FaHotel, FaUserShield} from "react-icons/fa6";
import { IoMenu, IoAirplane } from "react-icons/io5";

function AdminDashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    const response = await dispatch(logoutAdmin());
    console.log("Logout")

    console.log(response)
    if (response?.payload?.success) {
        navigate("/")
    }
};

  return (
    <aside
      className={`relative top-0 left-0 bottom-0 h-screen min-w-[20%] text-white bg-gradient-to-r from-black from-20% to-slate-900 font-semibold p-4 space-y-6 transition-all duration-300 ${
        isSidebarCollapsed ? "-ml-[20%]" : ""
      }`}
    >
      <div className="flex items-center space-x-2 p-4">
        <div className="flex items-center space-x-2">
          <Link to="/">
          <img src={logo} alt="TGES" className="w-16 object-contain" />
          </Link>
          <span className="text-xl font-bold">TGES TRAVEL</span>
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
            to="/admin"
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
                <FaUsers size={25} />
                <span>Users</span>
              </div>
              <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </Link>
            <div className="ml-4 space-y-2 hidden group-hover:block">
              <Link
                to="/admin/retail-users"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaUser size={22} />
                <span>Retail</span>
              </Link>
              <Link
                to="/admin/corporate-users"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaBuilding size={22} />
                <span>Corporate</span>
              </Link>
              <Link
                to="/admin/vendor-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaShop size={22} />
                <span>Vendor</span>
              </Link>
            </div>
          </div>
          <div className="group">
            <Link
              to="#"
              className="flex items-center justify-between space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
            >
              <div className="flex items-center space-x-2">
                <FaEarthAsia size={22} />
                <span>Travel</span>
              </div>
              <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </Link>
            <div className="ml-4 space-y-2 hidden group-hover:block">
              <Link
                to="/admin/trainbookingdetails"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaTrainSubway size={22} />
                <span>Train</span>
              </Link>
              <Link
                to="/admin/flightbookingdetails"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <IoAirplane size={22} />
                <span>Flight</span>
              </Link>
              <Link
                to="/admin/volvobusbookingdetails"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaBus size={22} />
                <span>Bus</span>
              </Link>
              <Link
                to="/admin/cabbookingdetails"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaCarRear size={22} />
                <span>Cab</span>
              </Link>
            </div>
          </div>
          <div className="group">
            <Link
              to="#"
              className="flex items-center justify-between space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
            >
              <div className="flex items-center space-x-2">
                <MdMiscellaneousServices size={22} />
                <span>Services</span>
              </div>
              <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </Link>
            <div className="ml-4 space-y-2 hidden group-hover:block">
              <Link
                to="/admin/hotelbookingdetails"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaHotel size={22} />
                <span>Hotel</span>
              </Link>
              <Link
                to="/admin/passport-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaPassport size={22} />
                <span>Passport</span>
              </Link>
              <Link
                to="/admin/travelinsurance-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaHandHoldingMedical size={22} />
                <span>Travel Insurance</span>
              </Link>
              <Link
                to="/admin/healthinsurance-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaUserShield size={22} />
                <span>Health Insurance</span>
              </Link>
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
          to="#"
          className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
        >
          <FaUserCircle size={22} />
          <span>Profile</span>
        </Link>
        <Link
          to="/admin/logout"
          className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
        >
          <MdLogout size={22} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default AdminDashboard;
