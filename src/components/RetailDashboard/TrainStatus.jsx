import React, { useEffect, useState } from "react";
import UserSidebar from "./UserSidebar";
import { getTrainTravelDetails, deleteTrainTravel } from "../../redux/slices/travelSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';  // Importing toast
import 'react-toastify/dist/ReactToastify.css';  // Importing toast styles
import Pagination from './Pagination'; // Import the Pagination component

const TrainBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getTrainTravelDetails());
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
      // Show loading while the promise is being processed
      toast.promise(
        dispatch(deleteTrainTravel(bookingId)).unwrap(),  // `unwrap` will help resolve or reject the action
        {
          loading: 'Deleting train travel...',
          success: 'Train travel canceled successfully!',
          error: 'Failed to cancel train travel. Please try again.'
        }
      ).then(() => {
        // Remove the row immediately after successful deletion
        setTravelDetails((prevDetails) => prevDetails.filter((detail) => detail.id !== bookingId));
      });
    } catch (error) {
      console.error("Failed to cancel train travel:", error);
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
    <div className="flex">
      <UserSidebar />
      <main className="bg-gray-100 w-screen min-h-screen relative bg-fixed bg-cover overflow-auto"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <>
        <h1 className="text-2xl w-full bg-gray-100 text-center pb-8 uppercase pt-4 font-bold ">
        Train Booking Details
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-100 text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Booking</th>
                  <th className="py-2 px-4 border">Full_Name</th>
                  <th className="py-2 px-4 border">Date_of_Birth</th>
                  <th className="py-2 px-4 border">Age</th>
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
                {paginatedDetails.map((booking, index) => (
                  <tr key={index}>
                    
                    <td className="py-1 px-2 border text-center whitespace-nowrap">{index + 1}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.fullName}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.dob}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.age}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.gender}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.contactNo}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.email}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.travelFrom}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.travelTo}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.classOfTravel}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.travelDate}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.trainNo}</td>
                    <td className="py-2 px-4 text-center border whitespace-nowrap">{booking.adult}</td>
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
        </>
      </main>
    </div>
  );
};

export default TrainBookingDetails;
