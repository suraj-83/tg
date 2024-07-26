import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHotelBookings } from '../../redux/slices/dashboardSlice';
import AdminSidebar from '../AdminSidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const HotelBookingDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [travelDetails, setTravelDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        let response = await dispatch(fetchHotelBookings());
        if (response.payload) {
          setData(response.payload);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch hotel bookings:", error);
        setLoading(false);
      }
    };
    fetchBookings();
  }, [dispatch]);

  useEffect(() => {
    const filteredBookings = data.filter((booking) =>
      booking.name.toLowerCase().includes(search.toLowerCase())
    );
    setTravelDetails(filteredBookings);
    setCurrentPage(1);
  }, [search, data]);

  const totalPages = Math.ceil(travelDetails.length / rowsPerPage);
  const LastItemIndex = currentPage * rowsPerPage;
  const FirstItemIndex = LastItemIndex - rowsPerPage;
  const currentBookings = travelDetails.slice(FirstItemIndex, LastItemIndex);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold uppercase pl-20">
            Hotel Booking Details
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
                <th className="py-2 px-4 border min-w-[100px]">Name</th>
                <th className="py-2 px-4 border min-w-[100px]">Nationality</th>
                <th className="py-2 px-4 border min-w-[100px]">Contact No 1</th>
                <th className="py-2 px-4 border min-w-[100px]">Contact No 2</th>
                <th className="py-2 px-4 border min-w-[100px]">Email</th>
                <th className="py-2 px-4 border min-w-[100px]">Country</th>
                <th className="py-2 px-4 border min-w-[100px]">State</th>
                <th className="py-2 px-4 border min-w-[100px]">City</th>
                <th className="py-2 px-4 border min-w-[100px]">Room Category</th>
                <th className="py-2 px-4 border min-w-[100px]">Meal Plan</th>
                <th className="py-2 px-4 border min-w-[100px]">Hotel Category</th>
                <th className="py-2 px-4 border min-w-[100px]">Price Range</th>
                <th className="py-2 px-4 border min-w-[100px]">Check In Date</th>
                <th className="py-2 px-4 border min-w-[100px]">Check Out Date</th>
                <th className="py-2 px-4 border min-w-[100px]">Number of Nights</th>
                <th className="py-2 px-4 border min-w-[100px]">Number of Rooms</th>
                <th className="py-2 px-4 border min-w-[100px]">Adults</th>
                <th className="py-2 px-4 border min-w-[100px]">Children</th>
                <th className="py-2 px-4 border min-w-[100px]">Infants</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border min-w-[100px]">{booking.name}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.nationality}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.contactNo1}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.contactNo2}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.email}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.country}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.state}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.city}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.roomCategory}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.mealPlan}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.hotelCategory}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.priceRange}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.checkInDate}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.checkOutDate}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.numberOfNights}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.numberOfRooms}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.adults}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.children}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{booking.infants}</td>
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

export default HotelBookingDetails;
