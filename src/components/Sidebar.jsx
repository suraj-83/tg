import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/TGESLogo.png";
import { MdAnalytics, MdLogout, MdMiscellaneousServices, MdSpaceDashboard } from "react-icons/md";
import { FaUsers, FaUser, FaChevronLeft, FaBuilding, FaAngleRight, FaBus, FaHandHoldingMedical, FaUserCircle } from "react-icons/fa";
import { FaShop, FaEarthAsia, FaTrainSubway, FaCarRear, FaPassport, FaHotel, FaUserShield } from "react-icons/fa6";
import { IoMenu, IoAirplane } from "react-icons/io5";

function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-10 w-72  text-white font-semibold bg-[#1f1f2e] p-4 space-y-6 transition-all duration-300 ${
        isSidebarCollapsed ? "-ml-72" : ""
      }`}
    >
      <div className="flex items-center space-x-2 p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="TGES" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold">TGES TRAVEL</span>
        </div>
        <span
          className={`absolute h-16 w-16 z-20 rounded-full bg-[#1f1f2e] flex items-center justify-center cursor-pointer ${
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
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
            prefetch={false}
          >
            <MdSpaceDashboard size={25} />
            <span>Dashboard</span>
          </Link>
          <div className="group">
            <Link
              href="#"
              className="flex items-center justify-between space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              prefetch={false}
            >
              <div className="flex items-center space-x-2">
                <FaUsers size={25} />
                <span>Users</span>
              </div>
              <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </Link>
            <div className="ml-4 space-y-2 hidden group-hover:block">
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaUser size={22} />
                <span>Retail</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaBuilding size={22} />
                <span>Corporate</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaShop size={22} />
                <span>Vendor</span>
              </Link>
            </div>
          </div>
          <div className="group">
            <Link
              href="#"
              className="flex items-center justify-between space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              prefetch={false}
            >
              <div className="flex items-center space-x-2">
                <FaEarthAsia size={22} />
                <span>Travel</span>
              </div>
              <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </Link>
            <div className="ml-4 space-y-2 hidden group-hover:block">
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaTrainSubway size={22} />
                <span>Train</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <IoAirplane size={22} />
                <span>Flight</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaBus size={22} />
                <span>Bus</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaCarRear size={22} />
                <span>Cab</span>
              </Link>
            </div>
          </div>
          <div className="group">
            <Link
              href="#"
              className="flex items-center justify-between space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              prefetch={false}
            >
              <div className="flex items-center space-x-2">
                <MdMiscellaneousServices size={22} />
                <span>Services</span>
              </div>
              <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </Link>
            <div className="ml-4 space-y-2 hidden group-hover:block">
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaHotel size={22} />
                <span>Hotel</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaPassport size={22} />
                <span>Passport</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaHandHoldingMedical size={22} />
                <span>Travel Insurance</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
                prefetch={false}
              >
                <FaUserShield size={22} />
                <span>Health Insurance</span>
              </Link>
            </div>
          </div>
          <Link
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
            prefetch={false}
          >
            <MdAnalytics size={22} />
            <span>Analytics</span>
          </Link>
        </nav>
      </div>
      <div className="space-y-2">
        <Link
          href="#"
          className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
          prefetch={false}
        >
          <FaUserCircle size={22} />
          <span>Profile</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
          prefetch={false}
        >
          <MdLogout size={22} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default Dashboard;