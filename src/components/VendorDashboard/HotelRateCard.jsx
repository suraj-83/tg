// HotelRateCard.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelRateCard } from './../../redux/slices/vendorDashboardSlice'; // Path to your thunk
import FileUpload from './FileUpload';
import VendorSidebar from './VendorSidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const HotelRateCard = () => {
  const dispatch = useDispatch();
  const { data: hotelData, loading } = useSelector((state) => state.vendorDashboardSlice?.hotelRateCard || { data: [], loading: false });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchHotelRateCard());
  }, [dispatch]);

  const totalPages = Math.ceil(hotelData.length / rowsPerPage);

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

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page whenever rows per page is changed
  };

  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedData = hotelData.slice(startIdx, endIdx);

  return (
    <div className="flex">
      <VendorSidebar />
      <main className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-500 w-full overflow-auto">
        <div className="pl-24 max-h-[90vh] overflow-auto">
          <FileUpload />
          <div className="pr-4 max-h-[75vh] border-purple-500 border-b-2 border-t-2 overflow-auto">
            {loading ? (
              <p>Loading...</p>
            ) : (
              paginatedData.map((hotel) => (
                <div key={hotel.id} className="mb-8">
                  <table className="min-w-full bg-white border border-gray-200 bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
                    <thead>
                      <tr>
                        <th colSpan="7" className="text-xl font-bold p-1 text-center">
                          {hotel.hotelName}
                        </th>
                      </tr>
                      <tr className="text-center text-sm">
                        <th className="py-2 px-4 border">Room Type</th>
                        <th className="py-2 px-4 border">Occupancy</th>
                        <th className="py-2 px-4 border">Weekend Type</th>
                        <th className="py-2 px-4 border">Room Only Rate</th>
                        <th className="py-2 px-4 border">CPAI Rate</th>
                        <th className="py-2 px-4 border">MAPAI Rate</th>
                        <th className="py-2 px-4 border">EP Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotel.room.map((room) => (
                        <tr key={room.id} className="text-center text-sm">
                          <td className="py-2 px-4 border">{room.roomType}</td>
                          <td className="py-2 px-4 border">{room.occupancyType}</td>
                          <td className="py-2 px-4 border">{room.weekendType}</td>
                          <td className="py-2 px-4 border">₹ {room.roomOnlyRate}</td>
                          <td className="py-2 px-4 border">₹ {room.cpaiRate}</td>
                          <td className="py-2 px-4 border">₹ {room.mapiRate}</td>
                          <td className="py-2 px-4 border">₹ {room.epRate}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="7" className="text-center py-2">
                          <p><strong>Hotel Address:</strong> {hotel.hotelAddress}, {hotel.hotelCity}, {hotel.hotelState}, {hotel.hotelPincode}</p>
                          <p><strong>Phone:</strong> {hotel.phoneNo}, <strong>Email:</strong> {hotel.emailId}</p>
                          <p><strong>GST No:</strong> {hotel.gstNo}</p>
                          <p><strong>Rate Valid From:</strong> {hotel.rateValidFrom} <strong>to</strong> {hotel.rateValidTill}</p>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              ))
            )}
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
                <option value={5}>5</option>
                <option value={10}>10</option>
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

export default HotelRateCard;
