import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTrainDetails } from "../../redux/slices/dashboardSlice";
import AdminSidebar from "../AdminSidebar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const TrainBookingDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await dispatch(fetchTrainDetails({ page: currentPage, limit: rowsPerPage, search }));
        if (response.payload) {
          setData(response.payload.data);
          setTotalPages(response.payload.pagination.total_pages);
        }
      } catch (error) {
        console.error("Failed to fetch train details:", error);
      }
    };
    fetchData();
  }, [dispatch, currentPage, rowsPerPage, search]);

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
      <AdminSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold uppercase pl-20">
            Train Booking Details
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
                <th className="py-2 px-4 border min-w-[150px]">Full Name</th>
                <th className="py-2 px-4 border min-w-[150px]">Date of Birth</th>
                <th className="py-2 px-4 border min-w-[150px]">Gender</th>
                <th className="py-2 px-4 border min-w-[150px]">Contact No</th>
                <th className="py-2 px-4 border min-w-[150px]">Email</th>
                <th className="py-2 px-4 border min-w-[150px]">From</th>
                <th className="py-2 px-4 border min-w-[150px]">To</th>
                <th className="py-2 px-4 border min-w-[150px]">Class</th>
                <th className="py-2 px-4 border min-w-[150px]">Date</th>
                <th className="py-2 px-4 border min-w-[150px]">Train No</th>
                <th className="py-2 px-4 border min-w-[150px]">Time</th>
                <th className="py-2 px-4 border min-w-[150px]">PNR Number</th>
                <th className="py-2 px-4 border min-w-[150px]">Booking Status</th>
                <th className="py-2 px-4 border min-w-[150px]">Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{booking.fullName}</td>
                  <td className="py-2 px-4 border">{booking.dob}</td>
                  <td className="py-2 px-4 border">{booking.gender}</td>
                  <td className="py-2 px-4 border">{booking.contactNo}</td>
                  <td className="py-2 px-4 border">{booking.email}</td>
                  <td className="py-2 px-4 border">{booking.travelFrom}</td>
                  <td className="py-2 px-4 border">{booking.travelTo}</td>
                  <td className="py-2 px-4 border">{booking.classOfTravel}</td>
                  <td className="py-2 px-4 border">{booking.travelDate}</td>
                  <td className="py-2 px-4 border">{booking.trainNo}</td>
                  <td className="py-2 px-4 border">{booking.timePreference}</td>
                  <td className="py-2 px-4 border">{booking.pnrNumber}</td>
                  <td className="py-2 px-4 border">{booking.bookingStatus}</td>
                  <td className="py-2 px-4 border">{booking.price}</td>
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
