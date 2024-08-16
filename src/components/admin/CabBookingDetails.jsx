import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
// import { fetchCabDetails, rejectCabBooking } from "../../redux/slices/dashboardSlice";

const CabBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);
  const [filter, setFilter] = useState("Upcoming");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchCabDetails(currentPage, rowsPerPage));
        if (response.payload) {
          setTravelDetails(response.payload.data);
          setTotalPages(response.payload.pagination.total_pages);
        }
      } catch (error) {
        console.error("Failed to fetch cab details:", error);
      }
    };
    fetchData();
  }, [dispatch, currentPage, rowsPerPage]);

  useEffect(() => {
    const filteredDetails = travelDetails.filter(detail => detail.status === filter && detail.name.toLowerCase().includes(search.toLowerCase()));
    setTravelDetails(filteredDetails);
    setCurrentPage(1);
  }, [filter, search, travelDetails]);

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

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const rejectBooking = async (id) => {
    await dispatch(rejectCabBooking(id));
    // Refresh the cab details after rejecting a booking
    const response = await dispatch(fetchCabDetails(currentPage, rowsPerPage));
    setTravelDetails(response.payload.data);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex justify-between p-5 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold uppercase pl-20">Cab Booking Details</h1>
          <div className="flex space-x-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name..."
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="Upcoming">Upcoming</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled (by user)</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
        <div className="max-h-[75vh] overflow-x-auto">
          <table className="w-full text-sm bg-white shadow-md rounded-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border min-w-[100px]">Pickup_Country</th>
                <th className="py-2 px-4 border min-w-[100px]">Nationality</th>
                <th className="py-2 px-4 border min-w-[100px]">TourPlan</th>
                <th className="py-2 px-4 border min-w-[100px]">Name</th>
                <th className="py-2 px-4 border min-w-[100px]">ContactNo</th>
                <th className="py-2 px-4 border min-w-[100px]">AlternateNo</th>
                <th className="py-2 px-4 border min-w-[100px]">Email</th>
                <th className="py-2 px-4 border min-w-[100px]">CabRequiredAt</th>
                <th className="py-2 px-4 border min-w-[100px]">CabRequiredFor</th>
                <th className="py-2 px-4 border min-w-[100px]">TravelLimit</th>
                <th className="py-2 px-4 border min-w-[100px]">PickupDate&Time</th>
                <th className="py-2 px-4 border min-w-[100px]">PickupAddress</th>
                <th className="py-2 px-4 border min-w-[100px]">PickupLandmark</th>
                <th className="py-2 px-4 border min-w-[100px]">DropDate&Time</th>
                <th className="py-2 px-4 border min-w-[100px]">DropAddress</th>
                <th className="py-2 px-4 border min-w-[100px]">DropLandmark</th>
                <th className="py-2 px-4 border min-w-[100px]">CabDuration</th>
                <th className="py-2 px-4 border min-w-[100px]">NoofCabsRequired</th>
                <th className="py-2 px-4 border min-w-[100px]">TypeofCabRequired</th>
                <th className="py-2 px-4 border min-w-[100px]">NoofPersonsTravelling</th>
                <th className="py-2 px-4 border min-w-[100px]">NoOfInfants</th>
                <th className="py-2 px-4 border min-w-[100px]">NoOfChildren</th>
                <th className="py-2 px-4 border min-w-[100px]">OtherRequirements</th>
                <th className="py-2 px-4 border min-w-[100px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {travelDetails.map((detail, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border min-w-[100px]">{detail.pickupCountry}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.nationality}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.tourPlan}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.name}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.contactNo}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.alternateContactNo}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.email}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.cabRequiredAt}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.cabRequiredFor}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.localTravelKmsLimit}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.pickupDateTime}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.pickupAddress}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.pickupLandmark}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.dropDateTime}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.dropAddress}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.dropLandmark}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.cabDuration}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.noOfCabsRequired}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.typeOfCabRequired}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.noOfPersonsTravelling}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.noOfInfants}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.noOfChildren}</td>
                  <td className="py-2 px-4 border min-w-[100px]">{detail.otherRequirements}</td>
                  <td className="py-2 px-4 border min-w-[100px]">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded"
                      onClick={() => rejectBooking(detail._id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="absolute right-4 bottom-0 bg-gray-100 w-full flex items-center bg-inherit justify-end text-[#4B4747] py-5">
            <div className="flex items-center gap-4 px-5 select-none">
              <label>
                Rows per page:{" "}
                <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
              </label>
            </div>
            <div>
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                <FaAngleLeft />
              </button>
              <span className="px-2">
                Page {currentPage} of {totalPages}
              </span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CabBookingDetails;
