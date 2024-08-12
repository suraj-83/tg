import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CorporateSidebar from "./CorporateSidebar.jsx";
import { getAirTravelDetails } from "../../redux/slices/travelSlice.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const FlightBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([
    {
      id: 1,
      fullName: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      contactNo: "1234567890",
      email: "john@example.com",
      travelFrom: "Delhi",
      travelTo: "Mumbai",
      classOfTravel: "AC",
      travelDate: "2023-01-01",
      flightNo: "12345",
      timePreference: "10:00 AM",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      dob: "1995-05-15",
      gender: "Female",
      contactNo: "9876543210",
      email: "jane@example.com",
      travelFrom: "Chennai",
      travelTo: "Kolkata",
      classOfTravel: "Non-AC",
      travelDate: "2023-02-01",
      flightNo: "23456",
      timePreference: "12:00 PM",
    },
    {
      id: 3,
      fullName: "Alice Wilson",
      dob: "1980-07-15",
      gender: "Female",
      contactNo: "0987654321",
      email: "alice@example.com",
      travelFrom: "Mumbai",
      travelTo: "Bangalore",
      classOfTravel: "AC",
      travelDate: "2023-03-01",
      flightNo: "34567",
      timePreference: "02:00 PM",
    },
    {
      id: 4,
      fullName: "Bob Johnson",
      dob: "1998-12-31",
      gender: "Male",
      contactNo: "5555555555",  
      email: "bob@example.com",
      travelFrom: "Pune",
      travelTo: "Hyderabad",
      classOfTravel: "Non-AC",
      travelDate: "2023-04-01",
      flightNo: "45678",
      timePreference: "08:00 AM",
    },
  ]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getAirTravelDetails());
      if (response?.payload?.data) {
        setTravelDetails(response.payload.data);
        setTotalPages(Math.ceil(response.payload.data.length / rowsPerPage));
      }
    };
    fetchData();
  }, [rowsPerPage]);

  const handleCancel = (bookingId) => {
    // Simulate canceling a booking
    // setTravelDetails(travelDetails.filter((detail) => detail.id !== bookingId));
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

  const paginatedDetails = travelDetails.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const totalPages = Math.ceil(travelDetails.length / rowsPerPage);


  return (
    <div className="flex">
      <CorporateSidebar />
      <main
        className="min-h-screen bg-gray-100 w-full overflow-auto relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500857527770-d5289b39e342?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <h1 className="pb-4 font-bold text-center bg-white w-full pt-5 text-blue-700 uppercase text-2xl underline">
          Flight Booking Details
        </h1>
        {paginatedDetails.length > 0 && (
          <div className="overflow-auto">
            <table className="min-w-full text-sm text-center bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border border-gray-200">Full_Name</th>
                  <th className="py-2 px-10 border border-gray-200">DOB</th>
                  <th className="py-2 px-4 border border-gray-200">Gender</th>
                  <th className="py-2 px-4 border border-gray-200">Contact_No</th>
                  <th className="py-2 px-4 border border-gray-200">Email</th>
                  <th className="py-2 px-4 border border-gray-200">Travel_From</th>
                  <th className="py-2 px-4 border border-gray-200">Travel_To</th>
                  <th className="py-2 px-4 border border-gray-200">Travel_Class</th>
                  <th className="py-2 px-4 border border-gray-200">Travel_Date</th>
                  <th className="py-2 px-4 border border-gray-200">Flight_No</th>
                  <th className="py-2 px-4 border border-gray-200">Time_Preference</th>
                  <th className="py-2 px-4 border border-gray-200">Adult</th>
                  <th className="py-2 px-4 border border-gray-200">Children</th>
                  <th className="py-2 px-4 border border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedDetails.map((detail) => (
                  <tr key={detail.id}>
                    <td className="py-2 px-2 border border-gray-200">{detail.fullName}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.dob}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.gender}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.contactNo}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.email}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.travelFrom}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.travelTo}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.classOfTravel}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.travelDate}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.flightNo}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.timePreference}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.adult}</td>
                    <td className="py-2 px-2 border border-gray-200">{detail.children}</td>
                    <td className="py-2 px-2 border border-gray-200">
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
          </div>
        )}
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
      </main>
    </div>
  );
};

export default FlightBookingDetails;
