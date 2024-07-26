import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVolvoBusTravelDetails } from "../../redux/slices/travelSlice";
import Img from "../../assets/volvo-bus.webp";
import EmployeeSidebar from "./EmployeeSidebar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const VolvoBusBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      let response = await dispatch(getVolvoBusTravelDetails());
      if (response.payload && response.payload.data) {
        setTravelDetails(response.payload.data);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleCancel = (index) => {
    const updatedDetails = travelDetails.map((booking, i) => {
      if (i === index) {
        return { ...booking, status: "Cancelled" };
      }
      return booking;
    });
    setTravelDetails(updatedDetails);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDetails = travelDetails.filter(
    (booking) =>
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDetails.length / rowsPerPage);
  const lastItemIndex = currentPage * rowsPerPage;
  const firstItemIndex = lastItemIndex - rowsPerPage;
  const currentBookings = filteredDetails.slice(firstItemIndex, lastItemIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex">
      <EmployeeSidebar />
      <main
        className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover"
        style={{ backgroundImage: `url('${Img}')` }}
      >
        <h1 className="text-2xl w-full bg-white text-center pb-4 uppercase pt-3 font-bold ">
          Volvo Bus Booking Details
        </h1>
        <div className="p-4 bg-white">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border border-black rounded w-full"
          />
        </div>

        <div className="overflow-auto">
          <table className="min-w-full text-sm bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Booking</th>
                <th className="py-2 px-4 border">Full Name</th>
                <th className="py-2 px-4 border">Date of Birth</th>
                <th className="py-2 px-4 border">Gender</th>
                <th className="py-2 px-4 border">Contact No</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Pickup Location</th>
                <th className="py-2 px-4 border">Destination</th>
                <th className="py-2 px-4 border">Travel Date</th>
                <th className="py-2 px-4 border">Seat Type</th>
                <th className="py-2 px-4 border">Bus No</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((booking, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{booking.fullName}</td>
                  <td className="py-2 px-4 border">{booking.dob}</td>
                  <td className="py-2 px-4 border">{booking.gender}</td>
                  <td className="py-2 px-4 border">{booking.contactNo}</td>
                  <td className="py-2 px-4 border">{booking.email}</td>
                  <td className="py-2 px-4 border">{booking.pickupLocation}</td>
                  <td className="py-2 px-4 border">{booking.destination}</td>
                  <td className="py-2 px-4 border">{booking.travelDate}</td>
                  <td className="py-2 px-4 border">{booking.seatType}</td>
                  <td className="py-2 px-4 border">{booking.busNo}</td>
                  <td className="py-2 px-4 border">{booking.status}</td>
                  <td className="py-2 px-4 border">
                    {booking.status !== "Cancelled" && (
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleCancel(index)}
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        <div className="absolute right-4 bottom-0 bg-gray-100 w-full flex items-center bg-inherit justify-end text-[#4B4747] py-5">
      <div className="flex items-center bg-white gap-4 px-2 select-none">
          <p>Rows per page:</p>
          <select
            className="mx-2 px-2 py-1 border rounded"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <FaAngleLeft
            size={25}
            className={`${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-black cursor-pointer"
            }`}
            onClick={handlePreviousPage}
          />
          <FaAngleRight
            size={25}
            className={`${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-black cursor-pointer"
            }`}
            onClick={handleNextPage}
          />
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        </div>
        </div>
      </main>
    </div>
  );
};

export default VolvoBusBookingDetails;
