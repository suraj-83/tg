import React, { useState } from 'react';
import FileUpload from './FileUpload';
import VendorSidebar from './VendorSidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const EventRateCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const eventData = [
    {
      id: 1,
      userId: 201,
      filePath: "/uploads/event1.pdf",
      fileExists: true,
      type: "Event Rate Card",
      submissionDate: "2024-08-01",
      noOfConfHall: 2,
      confHall: [
        {
          id: 1,
          eventid: 1,
          noOfConferenceHall: 2,
          typeOfConferenceHall: "Oval",
          conferenceHallStrength: 200,
          conferenceHallCharges: 10000,
          createdAt: "2024-07-01",
          updatedAt: "2024-08-01",
        },
        {
          id: 2,
          eventid: 1,
          noOfConferenceHall: 1,
          typeOfConferenceHall: "Round",
          conferenceHallStrength: 150,
          conferenceHallCharges: 8000,
          createdAt: "2024-07-01",
          updatedAt: "2024-08-01",
        },
      ],
      highTeaOneTimeCharges: 1500,
      highTeaTwoTimeCharges: 2500,
      highTeaWithCookiesOneTimeCharges: 2000,
      highTeaWithCookiesTwoTimeCharges: 3000,
      cocktailCharges: 5000,
      perDayChargesForProjectors: 2000,
      djCharges: 4000,
      otherActivities: "Photography, Videography",
      complementaryServices: "WiFi, Parking",
      createdAt: "2024-07-01",
      updatedAt: "2024-08-01",
    },
    {
      id: 2,
      userId: 202,
      filePath: "/uploads/event2.pdf",
      fileExists: true,
      type: "Event Rate Card",
      submissionDate: "2024-08-02",
      noOfConfHall: 1,
      confHall: [
        {
          id: 3,
          eventid: 2,
          noOfConferenceHall: 1,
          typeOfConferenceHall: "Oval",
          conferenceHallStrength: 100,
          conferenceHallCharges: 7000,
          createdAt: "2024-07-15",
          updatedAt: "2024-08-02",
        },
      ],
      highTeaOneTimeCharges: 1200,
      highTeaTwoTimeCharges: 2200,
      highTeaWithCookiesOneTimeCharges: 1700,
      highTeaWithCookiesTwoTimeCharges: 2700,
      cocktailCharges: 4500,
      perDayChargesForProjectors: 1800,
      djCharges: 3500,
      otherActivities: "Live Music, Sound System",
      complementaryServices: "Security, Valet Parking",
      createdAt: "2024-07-15",
      updatedAt: "2024-08-02",
    },
  ];
  
  const totalPages = Math.ceil(eventData.length / rowsPerPage);

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
  const paginatedData = eventData.slice(startIdx, endIdx);

  return (
    <div className="flex">
      <VendorSidebar />
      <main className="min-h-screen bg-gradient-to-r from-green-300 to-blue-500 w-full overflow-auto">
        <div className="pl-24 max-h-[90vh] overflow-auto">
          <FileUpload />
          <div className="pr-4 max-h-[75vh] border-blue-500 border-b-2 border-t-2 overflow-auto">
            {paginatedData.map((event) => (
              <div key={event.id} className="mb-8">
                <table className="min-w-full bg-white border border-gray-200 bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
                  <thead>
                    <tr>
                      <th colSpan="7" className="text-xl font-bold p-1 text-center">
                        Event Rate Card {event.id}
                      </th>
                    </tr>
                    <tr className="text-center text-sm">
                      <th className="py-2 px-4 border">Conference Hall Type</th>
                      <th className="py-2 px-4 border">No. of Halls</th>
                      <th className="py-2 px-4 border">Strength</th>
                      <th className="py-2 px-4 border">Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.confHall.map((hall) => (
                      <tr key={hall.id} className="text-center text-sm">
                        <td className="py-2 px-4 border">{hall.typeOfConferenceHall}</td>
                        <td className="py-2 px-4 border">{hall.noOfConferenceHall}</td>
                        <td className="py-2 px-4 border">{hall.conferenceHallStrength}</td>
                        <td className="py-2 px-4 border">₹ {hall.conferenceHallCharges}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                    <td colSpan="7" className="text-center text-sm">
  <table className="min-w-full border-collapse border border-gray-200">
    <thead>
      <tr>
        <th className="border px-4 py-2">Service</th>
        <th className="border px-4 py-2">Charges</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">High Tea (One Time)</td>
        <td className="border px-4 py-2">₹ {event.highTeaOneTimeCharges}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">High Tea (Two Times)</td>
        <td className="border px-4 py-2">₹ {event.highTeaTwoTimeCharges}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">High Tea with Cookies (One Time)</td>
        <td className="border px-4 py-2">₹ {event.highTeaWithCookiesOneTimeCharges}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">High Tea with Cookies (Two Times)</td>
        <td className="border px-4 py-2">₹ {event.highTeaWithCookiesTwoTimeCharges}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Cocktail Charges</td>
        <td className="border px-4 py-2">₹ {event.cocktailCharges}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Per Day Charges for Projectors</td>
        <td className="border px-4 py-2">₹ {event.perDayChargesForProjectors}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">DJ Charges</td>
        <td className="border px-4 py-2">₹ {event.djCharges}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Other Activities</td>
        <td className="border px-4 py-2">{event.otherActivities}</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Complementary Services</td>
        <td className="border px-4 py-2">{event.complementaryServices}</td>
      </tr>
    </tbody>
  </table>
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
                    : "cursor-pointer"
                }`}
                onClick={handlePreviousPage}
              />
              <p>
                {currentPage} of {totalPages}
              </p>
              <FaAngleRight
                size={25}
                className={`${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                onClick={handleNextPage}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventRateCard;