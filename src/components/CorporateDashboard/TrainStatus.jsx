import React, { useEffect, useState } from "react";
import CorporateSidebar from "./CorporateSidebar";
import { useDispatch } from "react-redux";
import { getTrainTravelDetails ,deleteTrainTravel } from "../../redux/slices/travelSlice";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const TrainBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]); // Initialize as an empty array
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getTrainTravelDetails());
      const fetchedData = response?.payload?.data?.data; // Access the 'data' property inside 'payload.data'

      // Ensure that travelDetails is an array
      if (Array.isArray(fetchedData)) {
        setTravelDetails(fetchedData);
        setTotalPages(Math.ceil(fetchedData.length / rowsPerPage));
      } else {
        console.error("Expected an array for travel details, but got:", fetchedData);
      }
    };
    fetchData();
  }, [dispatch, rowsPerPage]);

  const handleCancel = async (bookingId) => {
    try {
      const response = await dispatch(deleteTrainTravel(bookingId));
      if (response.payload.success) {
        setTravelDetails(travelDetails.filter((detail) => detail.id !== bookingId));
      }
    } catch (error) {
      console.error("Failed to cancel train travel:", error);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when rows per page changes
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Safeguard against undefined or non-array travelDetails
  const paginatedDetails = Array.isArray(travelDetails)
    ? travelDetails.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    : [];

  return (
    <div className="flex">
      <CorporateSidebar />
      <main
        className="min-h-screen bg-gray-100 w-screen overflow-auto"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="container mx-auto bg-gray-100 shadow rounded-lg">
          <h1 className="text-2xl font-bold pt-6 mb-6 text-center uppercase underline">
            Train Booking Details
          </h1>
          <div className="overflow-auto">
            <table className="min-w-full bg-gray-100 text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Full_Name</th>
                  <th className="py-2 px-4 border">Date_of_Birth</th>
                  <th className="py-2 px-4 border">Gender</th>
                  <th className="py-2 px-4 border">Contact_No</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">From</th>
                  <th className="py-2 px-4 border">To</th>
                  <th className="py-2 px-4 border">Class</th>
                  <th className="py-2 px-10 border">Date</th>
                  <th className="py-2 px-4 border">Train_No</th>
                  <th className="py-2 px-10 border">Time</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedDetails.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.fullName}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.dob}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.gender}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.contactNo}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.email}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.travelFrom}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.travelTo}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.classOfTravel}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.travelDate}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.trainNo}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">{booking.timePreference}</td>
                    <td className="py-2 px-4 border-b whitespace-nowrap">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleCancel(booking.id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination controls */}
            <div className="absolute right-4 bottom-0 bg-gray-100 w-full flex items-center bg-inherit justify-end text-[#4B4747] py-5">
          <div className="flex items-center gap-4 px-5 select-none">
            <p>Rows per page</p>
            <select
              className="px-2 py-1 rounded-md border border-[#BEBEBE]"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
            <FaAngleLeft
              size={25}
              className={`${
                currentPage === 1
                  ? "text-gray-200 cursor-not-allowed"
                  : "text-gray-400 cursor-pointer"
              }`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            />
            <FaAngleRight
              size={25}
              className={`${
                currentPage === totalPages
                  ? "text-gray-200 cursor-not-allowed"
                  : "text-gray-400 cursor-pointer"
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            />
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default TrainBookingDetails;
