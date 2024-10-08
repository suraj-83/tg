import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBusDetails } from "../../redux/slices/dashboardSlice";
import AdminSidebar from "../AdminSidebar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const VolvoBusBookingDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([
    {
      id: 1,
      fullName: "John Doe",
      phoneNumber: "1234567890",
      email: "jdoe@me.com",
      busNumber: "1234",  
      busType: "Volvo",
      seatNumber: "A1",
      pickupDate: "2023-06-01",
      pickupTime: "10:00 AM",
      pickupLocation: "123 Main St",
      destination: "456 Oak Ave",
      numberOfPassengers: 2,
      status: "Confirmed",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      phoneNumber: "9876543210",
      email: "jsmith@me.com",
      busNumber: "5678",
      busType: "Volvo",
      seatNumber: "B2",
      pickupDate: "2023-06-02",
      pickupTime: "11:00 AM",
      pickupLocation: "789 Elm St",
      destination: "321 Pine Ave",
      numberOfPassengers: 1,
      status: "Confirmed",
    },
  ]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await dispatch(fetchBusDetails({ page: currentPage, limit: rowsPerPage }));
        if (response.payload) {
          setData(response.payload.data);
          setTotalPages(response.payload.pagination.total_pages);
        }
      } catch (error) {
        console.error("Failed to fetch bus details:", error);
      }
    };
    fetchData();
  }, [dispatch, currentPage, rowsPerPage]);

  const filteredBookings = data.filter((booking) =>
    booking.fullName.toLowerCase().includes(search.toLowerCase())
  );

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleRowsPerPageChange(e) {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold uppercase pl-20">
            Volvo Bus Booking Details
          </h1>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="max-h-[75vh] overflow-x-auto">
          <table className="w-full text-sm bg-white shadow-md rounded-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border min-w-[100px]">Booking</th>
                <th className="py-2 px-4 border min-w-[100px]">Full Name</th>
                <th className="py-2 px-4 border min-w-[100px]">Date of Birth</th>
                <th className="py-2 px-4 border min-w-[100px]">Gender</th>
                <th className="py-2 px-4 border min-w-[100px]">Contact No</th>
                <th className="py-2 px-4 border min-w-[100px]">Email</th>
                <th className="py-2 px-4 border min-w-[100px]">Pickup Location</th>
                <th className="py-2 px-4 border min-w-[100px]">Destination</th>
                <th className="py-2 px-4 border min-w-[100px]">Travel Date</th>
                <th className="py-2 px-4 border min-w-[100px]">Seat Type</th>
                <th className="py-2 px-4 border min-w-[100px]">Bus No</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border min-w-[100px]">{index + 1}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.fullName}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.dob}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.gender}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.contactNo}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.email}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.pickupLocation}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.destination}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.travelDate}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.seatType}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.busNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
      </main>
    </div>
  );
};

export default VolvoBusBookingDetails;
