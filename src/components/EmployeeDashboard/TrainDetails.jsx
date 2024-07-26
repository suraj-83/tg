import React, { useEffect, useState } from "react";
import EmployeeSidebar from "./EmployeeSidebar";
import { useDispatch } from "react-redux";
import { getTrainTravelDetails } from "../../redux/slices/travelSlice";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const TrainBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([
    {
      fullName: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      contactNo: "1234567890",
      email: "john.doe@example.com",
      travelFrom: "City A",
      travelTo: "City B",
      classOfTravel: "First Class",
      travelDate: "2024-07-01",
      trainNo: "Train 123",
      timePreference: "Any",
      adult: 2,
      children: 1,
    },
    {
      fullName: "Jane Smith",
      dob: "1995-05-15",
      gender: "Female",
      contactNo: "9876543210",
      email: "jane.smith@example.com",
      travelFrom: "City C",
      travelTo: "City D",
      classOfTravel: "Second Class",
      travelDate: "2024-07-02",
      trainNo: "Train 456",
      timePreference: "Evening",
      adult: 1,
      children: 0,
    },
    {
      fullName: "Bob Johnson",
      dob: "1998-12-31",
      gender: "Male",
      contactNo: "5555555555",
      email: "bob.johnson@example.com",
      travelFrom: "City E",
      travelTo: "City F",
      classOfTravel: "Third Class",
      travelDate: "2024-07-03",
      trainNo: "Train 789",
      timePreference: "Morning",
      adult: 3,
      children: 2,
    },
    {
      fullName: "Sarah Davis",
      dob: "2000-06-30",
      gender: "Female",
      contactNo: "9999999999",
      email: "sarah.davis@example.com",
      travelFrom: "City G",
      travelTo: "City H",
      classOfTravel: "Sleeper Class",
      travelDate: "2024-07-04",
      trainNo: "Train 012",
      timePreference: "Any",
      adult: 1,
      children: 0,
    },
    {
      fullName: "Michael Wilson",
      dob: "1992-08-15",
      gender: "Male",
      contactNo: "1111111111",
      email: "michael.wilson@example.com",
      travelFrom: "City I",
      travelTo: "City J",
      classOfTravel: "AC First Class",
      travelDate: "2024-07-05",
      trainNo: "Train 345",
      timePreference: "Evening",
      adult: 2,
      children: 1,
    },
    {
      fullName: "Emily Brown",
      dob: "1997-03-01",
      gender: "Female",
      contactNo: "8888888888",
      email: "emily.brown@example.com",
      travelFrom: "City K",
      travelTo: "City L",
      classOfTravel: "AC Second Class",
      travelDate: "2024-07-06",
      trainNo: "Train 678",
      timePreference: "Morning",
      adult: 1,
      children: 0,
    },
    {
      fullName: "David Miller",
      dob: "2001-11-30",
      gender: "Male",
      contactNo: "2222222222",
      email: "david.miller@example.com",
      travelFrom: "City M",
      travelTo: "City N",
      classOfTravel: "AC Third Class",
      travelDate: "2024-07-07",
      trainNo: "Train 901",
      timePreference: "Any",
      adult: 3,
      children: 2,
    },
    {
      fullName: "Olivia Davis",
      dob: "1996-07-15",
      gender: "Female",
      contactNo: "4444444444",
      email: "olivia.davis@example.com",
      travelFrom: "City O",
      travelTo: "City P",
      classOfTravel: "AC Sleeper Class",
      travelDate: "2024-07-08",
      trainNo: "Train 234",
      timePreference: "Evening",
      adult: 1,
      children: 0,
    },
    {
      fullName: "Daniel Johnson",
      dob: "1999-02-01",
      gender: "Male",
      contactNo: "3333333333",
      email: "daniel.johnson@example.com",
      travelFrom: "City Q",
      travelTo: "City R",
      classOfTravel: "AC First Class",
      travelDate: "2024-07-09",
      trainNo: "Train 567",
      timePreference: "Morning",
      adult: 2,
      children: 1,
    },
  ]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getTrainTravelDetails());
      if (response?.payload?.data) {
        setTravelDetails(response.payload.data);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleCancel = (bookingId) => {
    setTravelDetails((prevDetails) =>
      prevDetails.filter((booking) => booking.id !== bookingId)
    );
  };

  const filteredDetails = travelDetails.filter(
    (booking) =>
      booking.fullName.toLowerCase().includes(search.toLowerCase()) ||
      booking.email.toLowerCase().includes(search.toLowerCase())
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
        className="min-h-screen w-full overflow-auto"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661883997997-99e25dad4ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto bg-gray-100 shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-center uppercase underline">
            Train Booking Details
          </h1>
          <input
            type="text"
            placeholder="Search by name or email"
            className="mb-4 p-2 border rounded w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="max-h-[75vh] overflow-auto">
            <table className="min-w-full text-center bg-gray-100 text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-4 min-w-[100px] border">Full Name</th>
                  <th className="py-2 px-4 min-w-[100px] border">Date of Birth</th>
                  <th className="py-2 px-4 min-w-[100px] border">Gender</th>
                  <th className="py-2 px-4 min-w-[100px] border">Contact No</th>
                  <th className="py-2 px-4 min-w-[100px] border">Email</th>
                  <th className="py-2 px-4 min-w-[100px] border">From</th>
                  <th className="py-2 px-4 min-w-[100px] border">To</th>
                  <th className="py-2 px-4 min-w-[100px] border">Class</th>
                  <th className="py-2 px-4 min-w-[100px] border">Date</th>
                  <th className="py-2 px-4 min-w-[100px] border">Train No</th>
                  <th className="py-2 px-4 min-w-[100px] border">Time</th>
                  <th className="py-2 px-4 min-w-[100px] border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.fullName}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.dob}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.gender}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.contactNo}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.email}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.travelFrom}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.travelTo}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.classOfTravel}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.travelDate}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.trainNo}</td>
                    <td className="py-2 px-4 min-w-[100px] border">{booking.timePreference}</td>
                    <td className="py-2 px-4 min-w-[100px] border">
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
          <div className="absolute right-4 bottom-0 bg-gray-100 w-full flex items-center bg-inherit justify-end text-[#4B4747] py-5">
            <div className="flex items-center bg-gray-100 gap-4 px-5 select-none">
              <p>Rows per page</p>
              <select
                className="px-2 py-1 rounded-md border border-[#BEBEBE]"
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
                disabled={currentPage === 1}
              />
              <FaAngleRight
                size={25}
                className={`${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black cursor-pointer"
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
        </div>
      </main>
    </div>
  );
};

export default TrainBookingDetails;
