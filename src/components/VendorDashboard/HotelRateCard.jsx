import React, { useState } from 'react';
import FileUpload from './FileUpload';
import VendorSidebar from './VendorSidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const hotelData = [
    {
      id: 1,
      userId: 101,
      filePath: "/uploads/hotel1.pdf",
      fileExists: true,
      type: "Rate Card",
      submissionDate: "2024-08-01",
      companyName: "Hotel Deluxe",
      hotelName: "Deluxe Hotel",
      hotelAddress: "123 Street, City Center",
      hotelState: "Delhi",
      hotelCity: "New Delhi",
      hotelPincode: "110001",
      phoneNo: "1234567890",
      emailId: "contact@deluxehotel.com",
      gstNo: "29ABCDE1234F1Z5",
      rateValidFrom: "2024-09-01",
      rateValidTill: "2025-08-31",
      room: [
        {
          id: 1,
          hotelId: 1,
          weekendType: "Long Weekend",
          roomType: "Deluxe",
          occupancyType: "Double",
          roomOnlyRate: 5000,
          cpaiRate: 5500,
          mapiRate: 6000,
          epRate: 4500,
          createdAt: "2024-07-01",
          updatedAt: "2024-08-01",
        },
        {
          id: 2,
          hotelId: 1,
          weekendType: "Normal",
          roomType: "Standard",
          occupancyType: "Single",
          roomOnlyRate: 3000,
          cpaiRate: 3500,
          mapiRate: 4000,
          epRate: 2500,
          createdAt: "2024-07-01",
          updatedAt: "2024-08-01",
        },
      ],
      createdAt: "2024-07-01",
      updatedAt: "2024-08-01",
    },
    {
      id: 2,
      userId: 102,
      filePath: "/uploads/hotel2.pdf",
      fileExists: true,
      type: "Rate Card",
      submissionDate: "2024-08-02",
      companyName: "Elite Stay",
      hotelName: "Elite Residency",
      hotelAddress: "456 Avenue, Downtown",
      hotelState: "Maharashtra",
      hotelCity: "Mumbai",
      hotelPincode: "400001",
      phoneNo: "9876543210",
      emailId: "info@eliteresidency.com",
      gstNo: "27ABCDE1234F1Z5",
      rateValidFrom: "2024-10-01",
      rateValidTill: "2025-09-30",
      room: [
        {
          id: 3,
          hotelId: 2,
          weekendType: "Long Weekend",
          roomType: "Suite",
          occupancyType: "Double",
          roomOnlyRate: 8000,
          cpaiRate: 8500,
          mapiRate: 9000,
          epRate: 7500,
          createdAt: "2024-07-15",
          updatedAt: "2024-08-02",
        },
        {
          id: 4,
          hotelId: 2,
          weekendType: "Normal",
          roomType: "Standard",
          occupancyType: "Single",
          roomOnlyRate: 3500,
          cpaiRate: 4000,
          mapiRate: 4500,
          epRate: 3000,
          createdAt: "2024-07-15",
          updatedAt: "2024-08-02",
        },
      ],
      createdAt: "2024-07-15",
      updatedAt: "2024-08-02",
    },
    {
      id: 3,
      userId: 103,
      filePath: "/uploads/hotel3.pdf",
      fileExists: true,
      type: "Rate Card",
      submissionDate: "2024-08-03",
      companyName: "Grand Hotels",
      hotelName: "Grand Palace",
      hotelAddress: "789 Road, Seaside",
      hotelState: "Tamil Nadu",
      hotelCity: "Chennai",
      hotelPincode: "600001",
      phoneNo: "1122334455",
      emailId: "contact@grandpalace.com",
      gstNo: "33ABCDE1234F1Z5",
      rateValidFrom: "2024-11-01",
      rateValidTill: "2025-10-31",
      room: [
        {
          id: 5,
          hotelId: 3,
          weekendType: "Long Weekend",
          roomType: "Executive",
          occupancyType: "Double",
          roomOnlyRate: 7000,
          cpaiRate: 7500,
          mapiRate: 8000,
          epRate: 6500,
          createdAt: "2024-07-20",
          updatedAt: "2024-08-03",
        },
        {
          id: 6,
          hotelId: 3,
          weekendType: "Normal",
          roomType: "Deluxe",
          occupancyType: "Single",
          roomOnlyRate: 4500,
          cpaiRate: 5000,
          mapiRate: 5500,
          epRate: 4000,
          createdAt: "2024-07-20",
          updatedAt: "2024-08-03",
        },
      ],
      createdAt: "2024-07-20",
      updatedAt: "2024-08-03",
    },
    {
      id: 4,
      userId: 104,
      filePath: "/uploads/hotel4.pdf",
      fileExists: true,
      type: "Rate Card",
      submissionDate: "2024-08-04",
      companyName: "Comfort Inn",
      hotelName: "Comfort Suites",
      hotelAddress: "321 Boulevard, Uptown",
      hotelState: "Karnataka",
      hotelCity: "Bangalore",
      hotelPincode: "560001",
      phoneNo: "9988776655",
      emailId: "support@comfortsuites.com",
      gstNo: "29ABCDE1234F1Z5",
      rateValidFrom: "2024-09-15",
      rateValidTill: "2025-09-14",
      room: [
        {
          id: 7,
          hotelId: 4,
          weekendType: "Long Weekend",
          roomType: "Suite",
          occupancyType: "Double",
          roomOnlyRate: 6000,
          cpaiRate: 6500,
          mapiRate: 7000,
          epRate: 5500,
          createdAt: "2024-07-25",
          updatedAt: "2024-08-04",
        },
        {
          id: 8,
          hotelId: 4,
          weekendType: "Normal",
          roomType: "Standard",
          occupancyType: "Single",
          roomOnlyRate: 3500,
          cpaiRate: 4000,
          mapiRate: 4500,
          epRate: 3000,
          createdAt: "2024-07-25",
          updatedAt: "2024-08-04",
        },
      ],
      createdAt: "2024-07-25",
      updatedAt: "2024-08-04",
    },
    {
      id: 5,
      userId: 105,
      filePath: "/uploads/hotel5.pdf",
      fileExists: true,
      type: "Rate Card",
      submissionDate: "2024-08-05",
      companyName: "Luxury Stays",
      hotelName: "Luxury Villas",
      hotelAddress: "654 Lane, Beachside",
      hotelState: "Goa",
      hotelCity: "Panaji",
      hotelPincode: "403001",
      phoneNo: "7766554433",
      emailId: "reservations@luxuryvillas.com",
      gstNo: "30ABCDE1234F1Z5",
      rateValidFrom: "2024-12-01",
      rateValidTill: "2025-11-30",
      room: [
        {
          id: 9,
          hotelId: 5,
          weekendType: "Long Weekend",
          roomType: "Villa",
          occupancyType: "Double",
          roomOnlyRate: 10000,
          cpaiRate: 10500,
          mapiRate: 11000,
          epRate: 9500,
          createdAt: "2024-07-30",
          updatedAt: "2024-08-05",
        },
        {
          id: 10,
          hotelId: 5,
          weekendType: "Normal",
          roomType: "Cottage",
          occupancyType: "Single",
          roomOnlyRate: 7000,
          cpaiRate: 7500,
          mapiRate: 8000,
          epRate: 6500,
          createdAt: "2024-07-30",
          updatedAt: "2024-08-05",
        },
      ],
      createdAt: "2024-07-30",
      updatedAt: "2024-08-05",
    },
    {
      id: 6,
      userId: 106,
      filePath: "/uploads/hotel6.pdf",
      fileExists: true,
      type: "Rate Card",
      submissionDate: "2024-08-06",
      companyName: "Paradise Inn",
      hotelName: "Paradise Resort",
      hotelAddress: "987 Park, Mountain View",
      hotelState: "Uttarakhand",
      hotelCity: "Dehradun",
      hotelPincode: "248001",
      phoneNo: "5544332211",
      emailId: "enquiries@paradiseresort.com",
      gstNo: "05ABCDE1234F1Z5",
      rateValidFrom: "2024-09-01",
      rateValidTill: "2025-08-31",
      room: [
        {
          id: 11,
          hotelId: 6,
          weekendType: "Long Weekend",
          roomType: "Deluxe",
          occupancyType: "Double",
          roomOnlyRate: 5500,
          cpaiRate: 6000,
          mapiRate: 6500,
          epRate: 5000,
          createdAt: "2024-07-31",
          updatedAt: "2024-08-06",
        },
        {
          id: 12,
          hotelId: 6,
          weekendType: "Normal",
          roomType: "Standard",
          occupancyType: "Single",
          roomOnlyRate: 3500,
          cpaiRate: 4000,
          mapiRate: 4500,
          epRate: 3000,
          createdAt: "2024-07-31",
          updatedAt: "2024-08-06",
        },
      ],
      createdAt: "2024-07-31",
      updatedAt: "2024-08-06",
    },
  ];
  

const HotelRateCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
            {paginatedData.map((hotel) => (
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
            ))}
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
