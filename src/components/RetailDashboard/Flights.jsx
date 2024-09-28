import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserSidebar from "./UserSidebar.jsx";
import { getAirTravelDetails, deleteAirTravel } from "../../redux/slices/travelSlice.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from './Pagination';

const FlightBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getAirTravelDetails());
      const fetchedData = response?.payload?.data?.data;

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
      // Show loading and promise response
      toast.promise(
        dispatch(deleteAirTravel(bookingId)).unwrap(),
        {
          loading: 'Deleting air travel...',
          success: 'Air travel canceled successfully!',
          error: 'Failed to cancel air travel. Please try again.'
        }
      ).then(() => {
        // Remove the row after successful deletion
        setTravelDetails((prevDetails) =>
          prevDetails.filter((detail) => detail.id !== bookingId)
        );
      });
    } catch (error) {
      console.error("Failed to cancel air travel:", error);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); 
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const paginatedDetails = Array.isArray(travelDetails)
    ? travelDetails.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    : [];

  return (
    <div className="flex flex-1">
      <UserSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto relative">
        <h1 className="pb-8 font-bold text-center text-blue-700 bg-white w-full pt-5 uppercase text-2xl underline">
          Flight Booking Details
        </h1>
        <div className="overflow-x-auto">
          {travelDetails.length > 0 ? (
            <table className="min-w-full text-sm bg-white">
              <thead>
                <tr>
                <th className="py-2 px-10 border border-gray-200">Full_Name</th>
                  <th className="py-2 px-10 border border-gray-200">DOB</th>
                  <th className="py-2 px-10 border border-gray-200">Age</th>
                  <th className="py-2 px-10 border border-gray-200">Gender</th>
                  <th className="py-2 px-10 border border-gray-200">Contact_No</th>
                  <th className="py-2 px-10 border border-gray-200">Email</th>
                  <th className="py-2 px-10 border border-gray-200">Travel_From</th>
                  <th className="py-2 px-10 border border-gray-200">Travel_To</th>
                  <th className="py-2 px-10 border border-gray-200">Class</th>
                  <th className="py-2 px-10 border border-gray-200">Travel_Date</th>
                  <th className="py-2 px-10 border border-gray-200">Flight_No</th>
                  <th className="py-2 px-10 border border-gray-200">Adult</th>
                  <th className="py-2 px-10 border border-gray-200">Children</th>
                  <th className="py-2 px-10 border border-gray-200">Time_Preference</th>
                  <th className="py-2 px-10 border border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedDetails.map((detail) => (
                  <tr key={detail.id}>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.fullName}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.dob}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.age}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.gender}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.contactNo}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.email}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.travelFrom}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.travelTo}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.classOfTravel}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.travelDate}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.flightNo}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.adult}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.children}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">{detail.timePreference}</td>
                    <td className="py-2 px-4 text-center border border-gray-200 whitespace-nowrap">
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                        onClick={() => handleCancel(detail.id)}  
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="py-10 text-center bg-white text-red-500">No flight booking details available.</p>
          )}
        </div>
        
        {/* Pagination controls */}
        <div className="absolute bottom-0 bg-gray-100 flex w-full items-center bg-inherit justify-end text-[#4B4747] py-5">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
      </main>
    </div>
  );
};

export default FlightBookingDetails;