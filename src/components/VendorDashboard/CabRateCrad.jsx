import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCabRateCard } from './../../redux/slices/vendorDashboardSlice';
import FileUpload from './FileUpload';
import VendorSidebar from './VendorSidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const CabRateCard = () => {
  const dispatch = useDispatch();
  const { cabRateCard, status, error } = useSelector((state) => state.vendorDashboard);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchCabRateCard());
  }, [dispatch]);

  const totalPages = cabRateCard ? Math.ceil(cabRateCard.length / rowsPerPage) : 1;

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
    setCurrentPage(1);
  };

  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedData = cabRateCard ? cabRateCard.slice(startIdx, endIdx) : [];

  return (
    <div className="flex">
      <VendorSidebar />
      <main className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-500 w-full overflow-auto">
        <div className="pl-24 max-h-[90vh] overflow-auto">
          <FileUpload />
          <div className="pr-4 max-h-[75vh] border-purple-500 border-b-2 border-t-2 overflow-auto">
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>{error}</p>}
            {status === 'succeeded' && paginatedData.map((cityData, index) => (
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
