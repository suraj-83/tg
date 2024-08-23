import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/slices/authSlice"
import { MdAnalytics, MdLogout, MdSpaceDashboard, MdMiscellaneousServices } from "react-icons/md"
import { FaChevronLeft, FaHotel, FaAngleRight,FaUserCircle } from "react-icons/fa"
import { FaTrainSubway, FaBus,FaCarRear,FaEarthAsia } from "react-icons/fa6"
import { IoMenu, IoAirplane } from "react-icons/io5"

function RetailDashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()

    const response = await dispatch(logout());
    console.log("Logout")

    console.log(response)
    if (response?.payload?.success) {
      navigate("/")
    }
  }

  return (
    <aside
      className={`relative top-0 left-0 bottom-0 h-screen min-w-[20%] text-white bg-gradient-to-r from-black from-20% to-slate-900 font-semibold p-4 space-y-6 transition-all duration-300 ${
        isSidebarCollapsed ? "-ml-[20%]" : ""
      }`}
    >
      <div className="flex items-center space-x-2 p-4">
        <div className="flex items-center space-x-2">
          <Link to="/">
            {/* <img src={logo} alt="TGES" className="w-16 object-contain" /> */}
          <span className="text-xl font-bold">TGES RETAIL</span>
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
            to="/retaildashboard"
            className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
          >
            <MdSpaceDashboard size={25} />
            <span>Dashboard</span>
          </Link><div className="group">
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
                to="/retaildashboard/train-status"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaTrainSubway size={22} />
                <span>Train</span>
              </Link>
              <Link
                to="/retaildashboard/flightbooking-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <IoAirplane size={22} />
                <span>Flight</span>
              </Link>
              <Link
                to="/retaildashboard/volvobus-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaBus size={22} />
                <span>Bus</span>
              </Link>
              <Link
                to="/retaildashboard/cab-details"
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
              to="/retaildashboard/hotelstatus"
              className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
            >
              <FaHotel size={22} />
              <span>Hotel Status</span>
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
          to="/retail/logout"
          className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
          onClick={handleLogout}
        >
          <MdLogout size={22} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default RetailDashboard
