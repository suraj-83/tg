import React, { useState } from 'react';
import FileUpload from './FileUpload';
import VendorSidebar from './VendorSidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const data = [
  {
    city: "Delhi /NCR",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 1200, eightHours: 1850, extraHour: 200, extraKm: 18, nightCharge: 350, outstationKm: 16, driverAllowance: 350 },
      { vehicle: "Honda City/Ciaz", fourHours: 1850, eightHours: 2650, extraHour: 250, extraKm: 26, nightCharge: 350, outstationKm: 23, driverAllowance: 350 },
      // ... more data
    ],
  },
  {
    city: "Bangalore",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 1500, eightHours: 2500, extraHour: 250, extraKm: 22, nightCharge: 350, outstationKm: 22, driverAllowance: 350 },
      { vehicle: "Toyota Innova Crysta", fourHours: 2500, eightHours: 3800, extraHour: 350, extraKm: 35, nightCharge: 350, outstationKm: 35, driverAllowance: 350 },
      // ... more data
    ],
  },
  {
    city: "Chennai",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 1500, eightHours: 2500, extraHour: 250, extraKm: 22, nightCharge: 350, outstationKm: 22, driverAllowance: 350 },
      { vehicle: "Honda City/Ciaz", fourHours: 2500, eightHours: 3800, extraHour: 350, extraKm: 35, nightCharge: 350, outstationKm: 35, driverAllowance: 350 },
      // ... more data
    ],
  },
  {
    city: "Mumbai",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 1800, eightHours: 2900, extraHour: 300, extraKm: 30, nightCharge: 350, outstationKm: 30, driverAllowance: 350 },
      { vehicle: "Toyota Innova Crysta", fourHours: 3000, eightHours: 4700, extraHour: 400, extraKm: 42, nightCharge: 350, outstationKm: 42, driverAllowance: 350 },
      // ... more data
    ],
  },
  {
    city: "Kolkata",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 2000, eightHours: 3400, extraHour: 350, extraKm: 33, nightCharge: 350, outstationKm: 33, driverAllowance: 350 },
      { vehicle: "Honda City/Ciaz", fourHours: 3500, eightHours: 5200, extraHour: 450, extraKm: 46, nightCharge: 350, outstationKm: 46, driverAllowance: 350 },
      // ... more data
    ],
  },
  {
    city: "Hyderabad",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 2300, eightHours: 4150, extraHour: 400, extraKm: 40, nightCharge: 350, outstationKm: 40, driverAllowance: 350 },
      { vehicle: "Toyota Innova Crysta", fourHours: 4200, eightHours: 6000, extraHour: 500, extraKm: 50, nightCharge: 350, outstationKm: 50, driverAllowance: 350 },
      // ... more data
    ],
  },
  {
    city: "Pune",
    rates: [
      { vehicle: "Eitos / Dzire", fourHours: 2100, eightHours: 3600, extraHour: 300, extraKm: 30, nightCharge: 350, outstationKm: 30, driverAllowance: 350 },
      { vehicle: "Honda City/Ciaz", fourHours: 3400, eightHours: 5000, extraHour: 400, extraKm: 40, nightCharge: 350, outstationKm: 40, driverAllowance: 350 },
      // ... more data
    ],
  },
  // ... more cities
];

const CabRateCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / rowsPerPage);

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
  const paginatedData = data.slice(startIdx, endIdx);

  return (
    <div className="flex">
      <VendorSidebar />
      <main className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-500 w-full overflow-auto">
        <div className="pl-24 max-h-[90vh] overflow-auto">
          <FileUpload />
          <div className="pr-4 max-h-[75vh] border-purple-500 border-b-2 border-t-2 overflow-auto">
          {paginatedData.map((cityData, index) => (
            <div key={index} className="mb-8">
              <table className="min-w-full bg-white border border-gray-200 bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
                <thead>
                  <h2 className="text-xl font-bold p-1 text-center">{cityData.city}</h2>
                  <tr className="text-center text-sm">
                    <th className="py-2 px-4 border min-w-[100px]">Vehicle Type</th>
                    <th className="py-2 px-4 border min-w-[100px]">4 Hrs / 40 Kms</th>
                    <th className="py-2 px-4 border min-w-[100px]">8 Hrs / 80 Kms</th>
                    <th className="py-2 px-4 border min-w-[100px]">Extra Hour</th>
                    <th className="py-2 px-4 border min-w-[100px]">Extra Km</th>
                    <th className="py-2 px-4 border min-w-[100px]">Night Charge</th>
                    <th className="py-2 px-4 border min-w-[100px]">Outstation Km</th>
                    <th className="py-2 px-4 border min-w-[100px]">Driver Allowance</th>
                  </tr>
                </thead>
                <tbody>
                  {cityData.rates.map((rate, idx) => (
                    <tr key={idx} className="text-center text-sm">
                      <td className="py-2 px-4 border min-w-[100px]">{rate.vehicle}</td>
                      <td className="py-2 px-4 border min-w-[100px]">₹ {rate.fourHours}</td>
                      <td className="py-2 px-4 border min-w-[100px]">₹ {rate.eightHours}</td>
                      <td className="py-2 px-4 border min-w-[100px]">₹ {rate.extraHour}</td>
                      <td className="py-2 px-4 border min-w-[100px]">₹ {rate.extraKm}</td>
                      <td className="py-2 px-4 border min-w-[100px]">₹ {rate.nightCharge}</td>
                      <td className="py-2 px-4 border min-w-[100px]">₹ {rate.outstationKm}</td>
                      <td className="py-2 px-4 border min-w-[100px]">₹ {rate.driverAllowance}</td>
                    </tr>
                  ))}
                </tbody>
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

export default CabRateCard;
