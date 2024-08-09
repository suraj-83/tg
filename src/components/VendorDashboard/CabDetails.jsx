import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import VendorHeader from "./VendorHeader";
import VendorSidebar from "./VendorSidebar";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; // Import pagination icons

const mockCabs = [
  { id: 1, model: "Toyota Innova", registrationNumber: "AB1234" },
  { id: 2, model: "Honda City", registrationNumber: "XY5678" },
  { id: 3, model: "Maruti Suzuki Swift", registrationNumber: "PQ9012" },
  { id: 4, model: "Hyundai Creta", registrationNumber: "BC3456" },
  { id: 5, model: "Ford Ecosport", registrationNumber: "MN7890" },
  { id: 6, model: "Volkswagen Polo", registrationNumber: "GH1234" },
  { id: 7, model: "Nissan Altima", registrationNumber: "JK5678" },
  { id: 8, model: "BMW X5", registrationNumber: "OP9012" },
  { id: 9, model: "Mercedes-Benz C-Class", registrationNumber: "KL3456" },
  { id: 10, model: "Audi A4", registrationNumber: "IJ7890" },
];

const mockCabDetails = {
  id: 1,
  model: "Toyota Innova",
  registrationNumber: "AB1234",
  status: "Active",
  capacity: 7,
  currentLocation: "Street 1, City A",
  lastKnownLocation: "Street 2, City B",
  driverName: "John Doe",
  driverContact: "+1234567890",
  currentTrip: "Trip to Airport",
  ratings: 4.5,
  feedback: "Good service provided.",
};

const mockMaintenanceSchedule = {
  nextDate: "2024-08-01",
  history: ["2024-06-01 - Engine check", "2024-04-15 - Oil change"],
};

const mockBookingHistory = [
  {
    date: "2024-06-25",
    pickupLocation: "Hotel X",
    dropLocation: "Airport",
    customerName: "Jane Smith",
  },
  {
    date: "2024-06-20",
    pickupLocation: "Office Y",
    dropLocation: "Client Z",
    customerName: "Tom Jones",
  },
  
];

const VendorCabManagement = () => {
  const dispatch = useDispatch();
  const [cabs, setCabs] = useState([]);
  const [selectedCab, setSelectedCab] = useState(null);
  const [cabDetails, setCabDetails] = useState({});
  const [maintenanceSchedule, setMaintenanceSchedule] = useState({});
  const [bookingHistory, setBookingHistory] = useState([]);
  
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cabs.length / rowsPerPage);

  useEffect(() => {
    // Simulating fetching cabs data
    setTimeout(() => {
      setCabs(mockCabs);
    }, 1000); // Simulate delay for async behavior
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      // Simulating fetching cab details, maintenance schedule, and booking history based on selected cab
      if (selectedCab) {
        setTimeout(() => {
          setCabDetails(mockCabDetails);
          setMaintenanceSchedule(mockMaintenanceSchedule);
          setBookingHistory(mockBookingHistory);
        }, 500); // Simulate delay for async behavior
      }
    };
    fetchDetails();
  }, [selectedCab]);

  const handleCabSelect = (cab) => {
    setSelectedCab(cab);
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
          <h1 className="text-2xl font-bold pl-20 uppercase">Vendor Cab Management</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Cab List</h2>
            <ul className="divide-y divide-gray-300">
              {cabs
                .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                .map((cab) => (
                <li
                  key={cab.id}
                  className={`p-2 mb-2 cursor-pointer ${selectedCab?.id === cab.id ? 'bg-gray-200' : ''}`}
                  onClick={() => handleCabSelect(cab)}
                >
                  {cab.model} - {cab.registrationNumber}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-3/4 p-4">
            {selectedCab && (
              <>
                <h2 className="text-xl font-bold mb-4 ">Cab Details</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody>
                      <tr>
                        <td className="font-semibold w-1/3">Model:</td>
                        <td>{cabDetails.model}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Registration Number:</td>
                        <td>{cabDetails.registrationNumber}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Status:</td>
                        <td>{cabDetails.status}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Capacity:</td>
                        <td>{cabDetails.capacity}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Current Location:</td>
                        <td>{cabDetails.currentLocation || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Last Known Location:</td>
                        <td>{cabDetails.lastKnownLocation || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Assigned Driver:</td>
                        <td>{cabDetails.driverName}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Driver Contact:</td>
                        <td>{cabDetails.driverContact}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Current Trip:</td>
                        <td>{cabDetails.currentTrip || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Next Maintenance Date:</td>
                        <td>{maintenanceSchedule.nextDate || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Recent Maintenance History:</td>
                        <td>
                          <ul className="list-disc pl-4">
                            {maintenanceSchedule.history &&
                              maintenanceSchedule.history.map((entry, index) => (
                                <li key={index}>{entry}</li>
                              ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Booking History:</td>
                        <td>
                          <ul className="list-disc pl-4">
                            {bookingHistory.map((booking, index) => (
                              <li key={index}>
                                {booking.date} - {booking.pickupLocation} to {booking.dropLocation} (Customer: {booking.customerName})
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Ratings:</td>
                        <td>{cabDetails.ratings || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold">Feedback:</td>
                        <td>{cabDetails.feedback || 'N/A'}</td>
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

export default VendorCabManagement;
