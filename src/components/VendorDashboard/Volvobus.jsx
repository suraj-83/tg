import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import VendorSidebar from "./VendorSidebar";

const VendorBusManagement = () => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [busDetails, setBusDetails] = useState({});
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const mockBuses = [
    { id: 1, busNo: "123", model: "Volvo 7900", status: "Available", location: "City A", capacity: 50 },
    { id: 2, busNo: "456", model: "Volvo 9700", status: "In Maintenance", location: "City B", capacity: 45 },
    { id: 3, busNo: "789", model: "Volvo 9900", status: "On Trip", location: "City C", capacity: 60 },
    // Add more mock data as needed
  ];

  const mockBusDetails = {
    busNo: "123",
    model: "Volvo 7900",
    status: "Available",
    location: "City A",
    capacity: 50,
    driver: {
      name: "John Doe",
      contact: "1234567890",
      currentTrip: "City A to City B",
    },
    maintenanceSchedule: {
      nextDate: "2024-08-01",
      history: ["2024-06-01", "2024-04-01"],
    },
    bookingHistory: [
      { trip: "City A to City B", date: "2024-07-10", customer: "Jane Smith" },
    ],
    ratings: { average: 4.5, feedback: ["Great service!", "Comfortable ride"] },
  };

  useEffect(() => {
    // Simulating fetching buses data
    setTimeout(() => {
      setBuses(mockBuses);
    }, 1000); // Simulate delay for async behavior
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      // Simulating fetching bus details based on selected bus
      if (selectedBus) {
        setTimeout(() => {
          setBusDetails(mockBusDetails);
        }, 500); // Simulate delay for async behavior
      }
    };
    fetchDetails();
  }, [selectedBus]);

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to the first page when rows per page changes
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(buses.length / rowsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(buses.length / rowsPerPage);

  const currentBuses = buses.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="flex">
      <VendorSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="p-4">
          <h1 className="text-2xl pl-20 font-bold uppercase">Vendor Bus Management</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Bus List</h2>
            <ul className="divide-y divide-gray-300">
              {currentBuses.map((bus) => (
                <li
                  key={bus.id}
                  className={`p-2 mb-2 cursor-pointer ${selectedBus?.id === bus.id ? 'bg-gray-200' : ''}`}
                  onClick={() => handleBusSelect(bus)}
                >
                  {bus.busNo} - {bus.model} ({bus.status})
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-3/4 p-4">
            {selectedBus && (
              <>
                <h2 className="text-xl font-bold mb-4">Bus Details</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody>
                      <tr>
                        <td className="font-semibold w-1/3">Bus No:</td>
                        <td>{busDetails.busNo}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Model:</td>
                        <td>{busDetails.model}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Status:</td>
                        <td>{busDetails.status}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Location:</td>
                        <td>{busDetails.location}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Capacity:</td>
                        <td>{busDetails.capacity}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Driver:</td>
                        <td>
                          {busDetails.driver?.name} - Contact: {busDetails.driver?.contact}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Current Trip:</td>
                        <td>{busDetails.driver?.currentTrip}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Maintenance Schedule:</td>
                        <td>
                          Next Date: {busDetails.maintenanceSchedule?.nextDate} <br />
                          History: {busDetails.maintenanceSchedule?.history.join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Booking History:</td>
                        <td>
                          <ul className="list-disc pl-4">
                            {busDetails.bookingHistory &&
                              busDetails.bookingHistory.map((booking, index) => (
                                <li key={index}>{booking.trip} on {booking.date} (Customer: {booking.customer})</li>
                              ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Ratings:</td>
                        <td>
                          Average: {busDetails.ratings?.average} <br />
                          Feedback: {busDetails.ratings?.feedback.join(", ")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
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
        {/* Pagination Controls */}
      </main>
    </div>
  );
};

export default VendorBusManagement;
