import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import UserSidebar from "./CorporateSidebar";
import { getCabTravelDetails } from "../../redux/slices/travelSlice";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CabBookingDetails = () => {
  const dispatch = useDispatch();
  const [travelDetails, setTravelDetails] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getCabTravelDetails());
      setTravelDetails(response.payload.data);
    };
    fetchData();
  }, [dispatch]);

  const cancelBooking = async (id) => {
    // TODO: Implement cancel booking logic
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

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

  const paginatedDetails = travelDetails.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const totalPages = Math.ceil(travelDetails.length / rowsPerPage);

  return (
    <div className="flex">
      <UserSidebar />
      <main className="min-h-screen bg-gray-100 w-full overflow-auto">
        <div className="flex bg-white justify-center p-5">
          <h1 className="w-full text-2xl font-bold uppercase text-center">
            Corporate Cab Booking Details
          </h1>
        </div>
        <div className="overflow-auto">
          <table className="text-sm text-center bg-white w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-200">Country</th>
                <th className="py-2 px-4 border border-gray-200">Nationality</th>
                <th className="py-2 px-4 border border-gray-200">Tour_Plan</th>
                <th className="py-2 px-16 border border-gray-200">Name</th>
                <th className="py-2 px-4 border border-gray-200">Contact_No</th>
                <th className="py-2 px-4 border border-gray-200">
                  Alternate_No
                </th>
                <th className="py-2 px-4 border border-gray-200">Email</th>
                <th className="py-2 px-4 border border-gray-200">
                  Cab_Required_At
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Cab_Required_For
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Local_Travel_Kms_Limit
                </th>
                <th className="py-2 px-16 border border-gray-200">
                  Pickup_Date_&_Time
                </th>
                <th className="py-2 px-16 border border-gray-200">
                  Pickup_Address
                </th>
                <th className="py-2 px-16 border border-gray-200">
                  Pickup_Landmark
                </th>
                <th className="py-2 px-16 border border-gray-200">
                  Drop_Date_&_Time
                </th>
                <th className="py-2 px-16 border border-gray-200">Drop_Address</th>
                <th className="py-2 px-16 border border-gray-200">Drop_Landmark</th>
                <th className="py-2 px-16 border border-gray-200">Cab_Duration</th>
                <th className="py-2 px-4 border border-gray-200">
                  No_of_Cabs_Required
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  Type_of_Cab_Required
                </th>
                <th className="py-2 px-4 border border-gray-200">
                  No_of_Persons_Travelling
                </th>
                <th className="py-2 px-4 border border-gray-200">No_of_Infants</th>
                <th className="py-2 px-4 border border-gray-200">
                  No_of_Children
                </th>
                <th className="py-2 px-10 border border-gray-200">
                  Other_Requirements
                </th>
                <th className="py-2 border border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.pickupCountry}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.nationality}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.tourPlan}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">{detail.name}</td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.contactNo}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.alternateContactNo}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">{detail.email}</td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.cabRequiredAt}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.cabRequiredFor}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.localTravelKmsLimit}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.pickupDateTime}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.pickupAddress}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.pickupLandmark}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.dropDateTime}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.dropAddress}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.dropLandmark}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.cabDuration}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.noOfCabsRequired}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.typeOfCabRequired}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.noOfPersonsTravelling}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.noOfInfants}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.noOfChildren}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    {detail.otherRequirements}
                  </td>
                  <td className="py-2 px-4 border border-gray-200">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                      onClick={() => cancelBooking(detail.id)}
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
        <div className="absolute right-4 bottom-0 bg-gray-100 flex w-full items-center bg-inherit justify-end text-[#4B4747] py-5">
          <div className="flex items-center gap-4 px-5 select-none">
            <label>
              Rows per page: 
              <select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className="ml-2 border rounded p-1"
              >
                <option value="1">1</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
            </label>
          </div>

          <div className="flex items-center">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaAngleLeft />
            </button>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
              </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`ml-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CabBookingDetails;
