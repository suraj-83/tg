import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVolvoBusTravelDetails } from "../../redux/slices/travelSlice";
import Img from "../../assets/volvo-bus.webp";
import CorporateSidebar from "./CorporateSidebar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const VolvoBusBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await dispatch(getVolvoBusTravelDetails());
  //       console.log("Full response:", response); // Log the full response
  //       const data = response?.payload?.data || [];
  //       console.log("Travel data:", data); // Log the actual data
        
  //       if (Array.isArray(data)) {
  //         setTravelDetails(data);
  //         setTotalPages(Math.ceil(data.length / rowsPerPage));
  //       } else {
  //         console.warn("Data is not an array:", data); // Add warning if data is not an array
  //         setTravelDetails([]); // Set to empty array if response is unexpected
  //       }
  //     } catch (error) {
  //       console.error("Error fetching travel details", error);
  //       setTravelDetails([]);
  //     }
  //   };
  //   fetchData();
  // }, [dispatch, rowsPerPage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getVolvoBusTravelDetails());
        console.log("Full response:", response); // Check the full response
  
        // Extracting data and pagination info correctly
        const data = response?.payload?.data?.data || []; // Adjust to get the data array
        const pagination = response?.payload?.data?.pagination || {}; // Get pagination details
        console.log("Travel data:", data);
  
        if (Array.isArray(data)) {
          setTravelDetails(data);
          setTotalPages(pagination.total_pages || 1); // Use pagination info for total pages
        } else {
          console.warn("Data is not an array:", data);
          setTravelDetails([]);
        }
      } catch (error) {
        console.error("Error fetching travel details", error);
        setTravelDetails([]);
      }
    };
    fetchData();
  }, [dispatch, rowsPerPage]);
  

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

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Check if travelDetails is an array before slicing
  const paginatedDetails = Array.isArray(travelDetails)
    ? travelDetails.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    : [];

  const filteredDetails = paginatedDetails.filter(
    (booking) =>
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <CorporateSidebar />
      <main
        className="bg-gray-100 w-screen min-h-screen bg-fixed overflow-auto bg-cover"
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
          {filteredDetails.length > 0 ? (
            <table className="text-center text-sm bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Booking</th>
                  <th className="py-2 px-4 border">Full_Name</th>
                  <th className="py-2 px-4 border">Date_of_Birth</th>
                  <th className="py-2 px-4 border">Gender</th>
                  <th className="py-2 px-4 border">Contact_No</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Pickup_Location</th>
                  <th className="py-2 px-4 border">Destination</th>
                  <th className="py-2 px-4 border">Travel_Date</th>
                  <th className="py-2 px-4 border">Seat_Type</th>
                  <th className="py-2 px-4 border">Bus_No</th>
                  <th className="py-2 px-4 border">Status</th>
                  <th className="py-2 px-4 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDetails.map((booking, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border">{index + 1}</td>
                    <td className="py-2 px-4 border">{booking.fullName}</td>
                    <td className="py-2 px-4 border">{booking.dob}</td>
                    <td className="py-2 px-4 border">{booking.gender}</td>
                    <td className="py-2 px-4 border">{booking.contactNo}</td>
                    <td className="py-2 px-4 border">{booking.email}</td>
                    <td className="py-2 px-4 border">{booking.travelFrom}</td>
                    <td className="py-2 px-4 border">{booking.travelTo}</td>
                    <td className="py-2 px-4 border">{booking.travelDate}</td>
                    <td className="py-2 px-4 border">{booking.classOfTravel}</td>
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
          ) : (
            <p className="text-center">No booking details found.</p>
          )}
        </div>
        {/* Pagination controls */}
        <div className="absolute right-4 bottom-0 bg-gray-100 flex w-full items-center bg-inherit justify-end text-[#4B4747] py-5">
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

export default VolvoBusBookingDetails;