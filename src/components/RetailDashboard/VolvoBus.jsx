import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Img from "../../assets/volvo-bus.webp";
import UserSidebar from "./UserSidebar";
import { getVolvoBusTravelDetails, deleteBusTravel,updateBusTravel } from "../../redux/slices/travelSlice";

const VolvoBusBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  
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
  

  const handleCancel = async (index) => {
    try {
      const response = await dispatch(deleteBusTravel(travelDetails[index].id));
      if (response.payload.success) {
        setTravelDetails(
          travelDetails.map((booking, i) =>
            i === index ? { ...booking, status: "Cancelled" } : booking
          )
        );
      }
    } catch (error) {
      console.error("Failed to cancel bus travel:", error);
    }
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
        <UserSidebar />
        <main
          className="bg-gray-100 w-screen min-h-screen bg-fixed bg-cover overflow-auto"
          style={{ backgroundImage: `url('${Img}')` }}
        >
          <h1 className="text-2xl w-full bg-white text-center pb-8 uppercase pt-4 font-bold ">
            Volvo Bus Booking Details
          </h1>
          {travelDetails && travelDetails.length === 0 ? (
            <div>No bookings available.</div>
          ) : (
            <div className="overflow-auto">
              <table className="min-w-full text-sm bg-white">
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
                  {travelDetails.map((booking, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border whitespace-nowrap">{index + 1}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.fullName}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.dob}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.gender}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.contactNo}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.email}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">
                        {booking.pickupLocation}
                      </td>
                      <td className="py-2 px-4 border whitespace-nowrap">
                        {booking.destination}
                      </td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.travelDate}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.seatType}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.busNo}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">{booking.status}</td>
                      <td className="py-2 px-4 border whitespace-nowrap">
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
            </div>
          )}
        </main>
      </div>
    );
};

export default VolvoBusBookingDetails;
