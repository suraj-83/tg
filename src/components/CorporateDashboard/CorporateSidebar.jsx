import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/slices/authSlice"
import { MdAnalytics, MdLogout, MdSpaceDashboard, MdMiscellaneousServices } from "react-icons/md"
import { FaChevronLeft, FaHotel, FaAngleRight, FaUsersCog,FaUserCircle } from "react-icons/fa"
import { FaTrainSubway,FaBullseye,FaUserPlus, FaBus, FaCarRear, FaEarthAsia } from "react-icons/fa6"
import { IoMenu, IoAirplane } from "react-icons/io5"
import { LuGitBranchPlus } from "react-icons/lu";
import { ImUserPlus } from "react-icons/im";



function CorporateDashboard() {
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
      className={`relative top-0  min-h-screen min-w-[20%] z-50 text-white bg-gradient-to-r from-black from-20% to-slate-900 font-semibold space-y-6 transition-all duration-300 ${
        isSidebarCollapsed ? "-ml-[20%]" : ""
      }`}
    >
      <div className="sticky top-0 p-4">
      <div className="flex items-center space-x-2 p-4">
        <div className="flex items-center space-x-2">
          <Link to="/">
            {/* <img src={logo} alt="Corporate Logo" className="w-16 object-contain" /> */}
          <span className="text-xl font-bold">Corporate Dashboard</span>
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
            to="/corporatedashboard"
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
                <FaEarthAsia size={22} />
                <span>Travel</span>
              </div>
              <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </Link>
            <div className="ml-4 space-y-2 hidden group-hover:block">
              <Link
                to="/corporatedashboard/train-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaTrainSubway size={22} />
                <span>Train</span>
              </Link>
              <Link
                to="/corporatedashboard/flight-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <IoAirplane size={22} />
                <span>Flight</span>
              </Link>
              <Link
                to="/corporatedashboard/volvobusdetails"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaBus size={22} />
                <span>Bus</span>
              </Link>
              <Link
                to="/corporatedashboard/corporate-cab-details"
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
                <FaUsersCog size={25} />
                <span>Management</span>
              </div>
              <FaAngleRight className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            </Link>
            <div className="ml-4 space-y-2 hidden group-hover:block">
              <Link
                to="/corporatedashboard/add-branch"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <LuGitBranchPlus size={22} />
                <span>Add Branch</span>
              </Link>
              <Link
                to="/corporatedashboard/employee"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <ImUserPlus size={22} />
                <span>Add User</span>
              </Link>
              <Link
                to="/corporatedashboard/branch-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaBullseye size={22} />
                <span>Branch Details</span>
              </Link>
              <Link
                to="/corporatedashboard/employee-details"
                className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
              >
                <FaUserPlus size={22} />
                <span>Employee Details</span>
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
                to="/corporatedashboard/hoteldetails"
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
          to="/corporate-profile"
          className="flex items-center space-x-2 p-2 hover:bg-[#2b2b3e] rounded"
        >
          <FaUserCircle size={22} />
          <span>Profile</span>
        </Link>
        <Link
          to="/corporate/logout"
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

export default CorporateDashboard
