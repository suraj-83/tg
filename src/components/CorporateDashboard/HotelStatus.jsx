import React, { useEffect, useState } from 'react';
import CorporateSidebar from './CorporateSidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const mockHotelBookings = [
  {
    id: 1,
    name: 'John Doe',
    nationality: 'American',
    contactNo1: '1234567890',
    contactNo2: '0987654321',
    email: 'john.doe@example.com',
    country: 'USA',
    state: 'California',
    city: 'Los Angeles',
    roomCategory: 'Deluxe',
    mealPlan: 'Full Board',
    hotelCategory: '5 Star',
    priceRange: '$300 - $400',
    checkInDate: '2024-07-01',
    checkOutDate: '2024-07-05',
    numberOfNights: 4,
    numberOfRooms: 1,
    adults: 2,
    children: 1,
    infants: 0,
  },
  {
    id: 2,
    name: 'Jane Smith',
    nationality: 'British',
    contactNo1: '2345678901',
    contactNo2: '9876543210',
    email: 'jane.smith@example.com',
    country: 'UK',
    state: 'England',
    city: 'London',
    roomCategory: 'Suite',
    mealPlan: 'Half Board',
    hotelCategory: '4 Star',
    priceRange: '$200 - $300',
    checkInDate: '2024-07-10',
    checkOutDate: '2024-07-15',
    numberOfNights: 5,
    numberOfRooms: 2,
    adults: 2,
    children: 0,
    infants: 1,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    nationality: 'Canadian',
    contactNo1: '3456789012',
    contactNo2: '9012345678',
    email: 'mike.johnson@example.com',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    roomCategory: 'Single',
    mealPlan: 'Room Only',
    hotelCategory: '3 Star',
    priceRange: '$150 - $200',
    checkInDate: '2024-06-01',
    checkOutDate: '2024-06-05',
    numberOfNights: 4,
    numberOfRooms: 1,
    adults: 1,
    children: 0,
    infants: 0,
  },
  {
    id: 4,
    name: 'Emma Brown',
    nationality: 'Australian',
    contactNo1: '4567890123',
    contactNo2: '8765432109',
    email: 'emma.brown@example.com',
    country: 'Australia',
    state: 'New South Wales',
    city: 'Sydney',
    roomCategory: 'Standard',
    mealPlan: 'Full Board',
    hotelCategory: '5 Star',
    priceRange: '$500 - $600',
    checkInDate: '2024-07-06',
    checkOutDate: '2024-07-10',
    numberOfNights: 4,
    numberOfRooms: 1,
    adults: 2,
    children: 0,
    infants: 0,
  },
  {
    id: 5,
    name: 'David Kim',
    nationality: 'South Korean',
    contactNo1: '5678901234',
    contactNo2: '5432109876',
    email: 'david.kim@example.com',
    country: 'South Korea',
    state: 'Seoul',
    city: 'Seoul',
    roomCategory: 'Deluxe',
    mealPlan: 'Half Board',
    hotelCategory: '4 Star',
    priceRange: '$300 - $400',
    checkInDate: '2024-07-01',
    checkOutDate: '2024-07-05',
    numberOfNights: 4,
    numberOfRooms: 1,
    adults: 2,
    children: 1,
    infants: 0,
  },
];

const HotelBookingDetails = () => {
  const [travelDetails, setTravelDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (!isCancelled) {
          setTravelDetails(mockHotelBookings);
          setLoading(false);
        }
      } catch (err) {
        if (!isCancelled) {
          setError('Failed to fetch hotel bookings');
          setLoading(false);
        }
      }
    };
    fetchBookings();

    return () => {
      setIsCancelled(true);
    };
  }, [isCancelled]);

  const handleCancel = () => {
    setIsCancelled(true);
    setLoading(false);
  };

  const handleCancelBooking = (id) => {
    setTravelDetails((prevDetails) => prevDetails.filter((booking) => booking.id !== id));
  };

  const filteredDetails = travelDetails.filter(
    (booking) =>
      booking.name.toLowerCase().includes(search.toLowerCase()) ||
      booking.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDetails.length / rowsPerPage);
  const paginatedBookings = filteredDetails.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

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

  if (loading) {
    return (
      <div>
        Loading...
        <button onClick={handleCancel} className="ml-4 bg-red-500 text-white py-1 px-2 rounded">Cancel</button>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex">
      <CorporateSidebar />
      <main 
        className="min-h-screen bg-cover bg-gray-100 w-full overflow-auto bg-center"
        style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      >
        <div className="p-4 bg-white border border-gray-200">
          <input
            type="text"
            placeholder="Search by name or email"
            className="p-2 ml-20 border rounded-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="max-h-[80vh] overflow-auto">
          <table className="text-sm text-center bg-white">
            <thead>
              <tr>
                <th className="py-2 px-10 border">Name</th>
                <th className="py-2 px-4 border">Nationality</th>
                <th className="py-2 px-4 border">Contact_No</th>
                <th className="py-2 px-4 border">Alternative_No</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Country</th>
                <th className="py-2 px-16 border">State</th>
                <th className="py-2 px-4 border">City</th>
                <th className="py-2 px-4 border">Room_Category</th>
                <th className="py-2 px-4 border">Meal_Plan</th>
                <th className="py-2 px-4 border">Hotel_Category</th>
                <th className="py-2 px-4 border">Price_Range</th>
                <th className="py-2 px-4 border">Check_In_Date</th>
                <th className="py-2 px-4 border">Check_Out_Date</th>
                <th className="py-2 px-4 border">Number_of_Nights</th>
                <th className="py-2 px-4 border">Number_of_Rooms</th>
                <th className="py-2 px-4 border">Adults</th>
                <th className="py-2 px-4 border">Children</th>
                <th className="py-2 px-4 border">Infants</th>
                <th className="py-2 px-4 border">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {paginatedBookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="py-2 px-4 border">{booking.name}</td>
                  <td className="py-2 px-4 border">{booking.nationality}</td>
                  <td className="py-2 px-4 border">{booking.contactNo1}</td>
                  <td className="py-2 px-4 border">{booking.contactNo2}</td>
                  <td className="py-2 px-4 border">{booking.email}</td>
                  <td className="py-2 px-4 border">{booking.country}</td>
                  <td className="py-2 px-4 border">{booking.state}</td>
                  <td className="py-2 px-4 border">{booking.city}</td>
                  <td className="py-2 px-4 border">{booking.roomCategory}</td>
                  <td className="py-2 px-4 border">{booking.mealPlan}</td>
                  <td className="py-2 px-4 border">{booking.hotelCategory}</td>
                  <td className="py-2 px-4 border">{booking.priceRange}</td>
                  <td className="py-2 px-4 border">{booking.checkInDate}</td>
                  <td className="py-2 px-4 border">{booking.checkOutDate}</td>
                  <td className="py-2 px-4 border">{booking.numberOfNights}</td>
                  <td className="py-2 px-4 border">{booking.numberOfRooms}</td>
                  <td className="py-2 px-4 border">{booking.adults}</td>
                  <td className="py-2 px-4 border">{booking.children}</td>
                  <td className="py-2 px-4 border">{booking.infants}</td>
                  <td className="py-2 px-4 border">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded-full"
                      onClick={() => handleCancelBooking(booking.id)}
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
              <option value={25}>25</option>
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
      </main>
    </div>
  );
};

export default HotelBookingDetails;
