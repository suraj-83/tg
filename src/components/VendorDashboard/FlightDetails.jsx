import React, { useEffect, useState } from "react";
import VendorSidebar from "./VendorSidebar";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; // Import pagination icons

const VendorFlightManagement = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [flightDetails, setFlightDetails] = useState({});
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(flights.length / rowsPerPage);

  const mockFlights = [
    { id: 1, flightNo: "AA100", departure: "NYC", arrival: "LA", date: "2024-08-01", status: "On Time" },
    { id: 2, flightNo: "UA200", departure: "SF", arrival: "CHI", date: "2024-08-02", status: "Delayed" },
    { id: 3, flightNo: "DL300", departure: "MIA", arrival: "HOU", date: "2024-08-03", status: "Cancelled" },
  ];

  const mockFlightDetails = {
    flightNo: "AA100",
    departure: "NYC",
    arrival: "LA",
    date: "2024-08-01",
    status: "On Time",
    passengers: [
      { name: "John Doe", age: 30, seat: "12A" },
      { name: "Jane Smith", age: 25, seat: "12B" },
    ],
    flightDuration: "6 hours",
    gate: "B12",
    terminal: "T3",
    baggageClaim: "Carousel 5",
  };

  useEffect(() => {
    // Simulating fetching flights data
    setTimeout(() => {
      setFlights(mockFlights);
    }, 1000); // Simulate delay for async behavior
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      // Simulating fetching flight details based on selected flight
      if (selectedFlight) {
        setTimeout(() => {
          setFlightDetails(mockFlightDetails);
        }, 500); // Simulate delay for async behavior
      }
    };
    fetchDetails();
  }, [selectedFlight]);

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex">
      <VendorSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="p-4">
          <h1 className="text-2xl pl-20 font-bold uppercase">Vendor Flight Management</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Flight List</h2>
            <ul className="divide-y divide-gray-300">
              {flights
                .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                .map((flight) => (
                <li
                  key={flight.id}
                  className={`p-2 mb-2 cursor-pointer ${selectedFlight?.id === flight.id ? 'bg-gray-200' : ''}`}
                  onClick={() => handleFlightSelect(flight)}
                >
                  {flight.flightNo} - {flight.departure} to {flight.arrival} ({flight.date})
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-3/4 p-4">
            {selectedFlight && (
              <>
                <h2 className="text-xl font-bold mb-4">Flight Details</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody>
                      <tr>
                        <td className="font-semibold w-1/3">Flight No:</td>
                        <td>{flightDetails.flightNo}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Departure:</td>
                        <td>{flightDetails.departure}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Arrival:</td>
                        <td>{flightDetails.arrival}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Date:</td>
                        <td>{flightDetails.date}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Status:</td>
                        <td>{flightDetails.status}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Flight Duration:</td>
                        <td>{flightDetails.flightDuration}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Gate:</td>
                        <td>{flightDetails.gate}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Terminal:</td>
                        <td>{flightDetails.terminal}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Baggage Claim:</td>
                        <td>{flightDetails.baggageClaim}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Passengers:</td>
                        <td>
                          <ul className="list-disc pl-4">
                            {flightDetails.passengers &&
                              flightDetails.passengers.map((passenger, index) => (
                                <li key={index}>{passenger.name} - Seat: {passenger.seat} (Age: {passenger.age})</li>
                              ))}
                          </ul>
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
      </main>
    </div>
  );
};

export default VendorFlightManagement;
