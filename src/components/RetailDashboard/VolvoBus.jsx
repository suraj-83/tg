import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Img from "../../assets/volvo-bus.webp";
import UserSidebar from "./UserSidebar";
import { getVolvoBusTravelDetails, deleteBusTravel } from "../../redux/slices/travelSlice";
import Pagination from './Pagination'; // Import the Pagination component

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
        const data = response?.payload?.data?.data || [];

        // Calculate total pages based on the length of the data and rows per page
        const totalRecords = data.length; 
        setTotalPages(Math.ceil(totalRecords / rowsPerPage)); // Calculate total pages

        if (Array.isArray(data)) {
          setTravelDetails(data);
        } else {
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
      const bookingId = travelDetails[index].id;
      const response = await dispatch(deleteBusTravel(bookingId));
      if (response?.payload?.success) {
        setTravelDetails((prevDetails) => prevDetails.filter((_, i) => i !== index));
        toast.success("Bus travel canceled successfully!");
      } else {
        toast.error("Failed to cancel bus travel. Please try again.");
      }
    } catch (error) {
      console.error("Failed to cancel bus travel:", error);
      toast.error("Error occurred while canceling travel.");
    }
  };

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        className="bg-gray-100 w-screen min-h-screen relative bg-fixed bg-cover overflow-auto"
        style={{ backgroundImage: `url('${Img}')` }}
      >
        <h1 className="text-2xl w-full bg-white text-center pb-8 uppercase pt-4 font-bold ">
          Volvo Bus Booking Details
        </h1>
        {travelDetails && travelDetails.length === 0 ? (
          <div>No bookings available.</div>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full text-sm text-center bg-white">
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
                    <td className="py-1 px-2 border whitespace-nowrap">{index + 1}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.fullName}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.dob}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.gender}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.contactNo}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.email}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">
                      {booking.pickupLocation}
                    </td>
                    <td className="py-1 px-2 border whitespace-nowrap">
                      {booking.destination}
                    </td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.travelDate}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.seatType}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.busNo}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">{booking.status}</td>
                    <td className="py-1 px-2 border whitespace-nowrap">
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

export default VolvoBusBookingDetails;
