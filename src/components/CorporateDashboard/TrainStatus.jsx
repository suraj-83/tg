import React, { useEffect, useState } from "react";
import CorporateSidebar from "./CorporateSidebar";
import { useDispatch } from "react-redux";
import { getTrainTravelDetails } from "../../redux/slices/travelSlice";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const TrainBookingDetails = () => {
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
      trainNo: "12345",
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
      trainNo: "23456",
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
      trainNo: "34567",
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
      trainNo: "45678",
      timePreference: "08:00 AM",
    },
    {
      id: 5,
      fullName: "Charlie Brown",
      dob: "2000-03-15",
      gender: "Male",
      contactNo: "6666666666",
      email: "charlie@example.com",
      travelFrom: "Bangalore",
      travelTo: "Delhi",
      classOfTravel: "AC",
      travelDate: "2023-05-01",
      trainNo: "56789",
      timePreference: "10:00 PM",
    },
    {
      id: 6,
      fullName: "David Patel",
      dob: "1999-01-01",
      gender: "Male",
      contactNo: "7777777777",
      email: "david@example.com",
      travelFrom: "Chennai",
      travelTo: "Mumbai",
      classOfTravel: "Non-AC",
      travelDate: "2023-06-01",
      trainNo: "67890",
      timePreference: "06:00 AM",
    },
    {
      id: 7,
      fullName: "Emma Anderson",
      dob: "1995-07-15",
      gender: "Female",
      contactNo: "8888888888",
      email: "emma@example.com",
      travelFrom: "Bangalore",
      travelTo: "Pune",
      classOfTravel: "AC",
      travelDate: "2023-07-01",
      trainNo: "78901",
      timePreference: "04:00 PM",
    },
    {
      id: 8,
      fullName: "Frank Li",
      dob: "1999-08-15",
      gender: "Male",
      contactNo: "9999999999",
      email: "frank@example.com",
      travelFrom: "Delhi",
      travelTo: "Kolkata",
      classOfTravel: "Non-AC",
      travelDate: "2023-08-01",
      trainNo: "89012",
      timePreference: "12:00 AM",
    },
    {
      id: 9,
      fullName: "Grace Lee",
      dob: "2000-09-15",
      gender: "Female",
      contactNo: "0000000000",
      email: "grace@example.com",
      travelFrom: "Mumbai",
      travelTo: "Hyderabad",
      classOfTravel: "AC",
      travelDate: "2023-09-01",
      trainNo: "90123",
      timePreference: "08:00 PM",
    },
    {
      id: 10,
      fullName: "Henry Kim",
      dob: "1995-10-15",
      gender: "Male",
      contactNo: "1111111111",
      email: "henry@example.com",
      travelFrom: "Chennai",
      travelTo: "Pune",
      classOfTravel: "Non-AC",
      travelDate: "2023-10-01",
      trainNo: "01234",
      timePreference: "02:00 AM",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getTrainTravelDetails());
      if (response?.payload?.data) {
        setTravelDetails(response.payload.data);
      }
    };
    fetchData();
  }, [dispatch]);

  const totalPages = Math.ceil(travelDetails.length / rowsPerPage);

  const handleCancel = (bookingId) => {
    setTravelDetails((prevDetails) =>
      prevDetails.filter((booking) => booking.id !== bookingId)
    );
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page on rows per page change
  };

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

  const startIdx = (currentPage - 1) * rowsPerPage;
  const paginatedDetails = travelDetails.slice(startIdx, startIdx + rowsPerPage);

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
                    <td className="py-2 px-4 border-b">{booking.fullName}</td>
                    <td className="py-2 px-4 border-b">{booking.dob}</td>
                    <td className="py-2 px-4 border-b">{booking.gender}</td>
                    <td className="py-2 px-4 border-b">{booking.contactNo}</td>
                    <td className="py-2 px-4 border-b">{booking.email}</td>
                    <td className="py-2 px-4 border-b">{booking.travelFrom}</td>
                    <td className="py-2 px-4 border-b">{booking.travelTo}</td>
                    <td className="py-2 px-4 border-b">{booking.classOfTravel}</td>
                    <td className="py-2 px-4 border-b">{booking.travelDate}</td>
                    <td className="py-2 px-4 border-b">{booking.trainNo}</td>
                    <td className="py-2 px-4 border-b">{booking.timePreference}</td>
                    <td className="py-2 px-4 border-b">
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
