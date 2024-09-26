import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar";
import { getTrainTravelDetails , deleteTrainTravel } from "../../redux/slices/travelSlice";
import { useDispatch } from "react-redux";

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
        <UserSidebar />
        <main
          className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover overflow-auto"
 
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="container mx-auto bg-gray-100 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-center uppercase underline">
              Train Booking Details
            </h1>
            <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Full_Name</th>
                  <th className="py-2 px-4 border">Date_of_Birth</th>
                  <th className="py-2 px-4 border">Gender</th>
                  <th className="py-2 px-4 border">Contact_No</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">From</th>
                  <th className="py-2 px-14 border">To</th>
                  <th className="py-2 px-14 border">Class</th>
                  <th className="py-2 px-14 border">Date</th>
                  <th className="py-2 px-4 border">Train_No</th>
                  <th className="py-2 px-4 border">Adults</th>
                  <th className="py-2 px-4 border">Children</th>
                  <th className="py-2 px-4 border">Time</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {travelDetails.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.fullName}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.dob}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.gender}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.contactNo}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.email}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.travelFrom}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.travelTo}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.classOfTravel}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.travelDate}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.trainNo}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.adults}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.children}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.timePreference}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">
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
          </div>
        </main>
      </div>
      );
};

export default TrainBookingDetails;
