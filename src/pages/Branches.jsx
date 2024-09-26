import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CorporateSidebar from "../components/CorporateDashboard/CorporateSidebar";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { getAllBranches, updateBranchDetails } from "../redux/slices/authSlice";

const BranchDetails = () => {
  const dispatch = useDispatch();
  const [branches, setBranches] = useState([]);
  const [editBranch, setEditBranch] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getAllBranches());
      console.log(response.payload); // Log correct payload
      if (response?.payload) {
        setBranches(response.payload); // Assign correct data
      }
    };
    fetchData();
  }, [dispatch]);

  const handleEdit = (branch) => {
    setEditBranch(branch);
  };

  const handleSave = () => {
    setBranches((prevBranches) =>
      prevBranches.map((b) =>
        b.branchId === editBranch.branchId ? editBranch : b
      )
    );
    setEditBranch(null);
  };

  const handleRemove = (branchId) => {
    setBranches((prevBranches) =>
      prevBranches.filter((branch) => branch.branchId !== branchId)
    );
  };

  const totalPages = Math.ceil(branches.length / rowsPerPage);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when rows per page changes
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBranch({ ...editBranch, [name]: value });
  };

  // Calculate the branches to display on the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentBranches = branches.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex">
      <CorporateSidebar />
      <main className="w-full p-6 bg-gray-900 overflow-auto text-gray-100">
        <h1 className="pb-9 font-bold text-center uppercase text-2xl underline">
          Branch Details
        </h1>
        <div className="max-h-[120vh] overflow-auto">
          {editBranch ? (
            <div>
              <h2 className="text-xl mb-4">Edit Branch</h2>
              <form className="mb-8 grid grid-cols-3 gap-2">
                {/* Form inputs */}
              </form>
            </div>
          ) : (
            branches.length > 0 ? (
              <table className="w-full table-auto text-center text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Branch Name</th>
                    <th className="border px-4 py-2">Address1</th>
                    <th className="border px-4 py-2">Address2</th>
                    <th className="border px-4 py-2">City</th>
                    <th className="border px-4 py-2">State</th>
                    <th className="border px-4 py-2">ZipCode</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Phone</th>
                    <th className="border px-4 py-2">Landline</th>
                    <th className="border px-4 py-2">Edit</th>
                    <th className="border px-4 py-2">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBranches.map((branch) => (
                    <tr key={branch.branchId}>
                      <td className="border px-4 py-2">{branch.name}</td>
                      <td className="border px-4 py-2">{branch.address1}</td>
                      <td className="border px-4 py-2">{branch.address2}</td>
                      <td className="border px-4 py-2">{branch.city}</td>
                      <td className="border px-4 py-2">{branch.state}</td>
                      <td className="border px-4 py-2">{branch.zipCode}</td>
                      <td className="border px-4 py-2">{branch.email}</td>
                      <td className="border px-4 py-2">{branch.contactNo}</td>
                      <td className="border px-4 py-2">{branch.landlineNumber}</td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleEdit(branch)}
                          className="text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleRemove(branch.branchId)}
                          className="text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">No branches available to display.</p>
            )
          )}
          {/* Pagination controls */}
          <div className="absolute right-4 bottom-0 bg-gray-100 w-full flex items-center bg-inherit justify-end text-[#4B4747] py-5">
            <div className="flex items-center gap-4 px-5 select-none">
              <p className='text-white'>Rows per page</p>
              <select
                className="px-2 py-1 rounded-md border border-[#BEBEBE]"
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
              >
                <option value={1}>1</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
              <FaAngleLeft
                size={25}
                className={`${
                  currentPage === 1
                    ? "text-gray-100 cursor-not-allowed"
                    : "text-gray-400 cursor-pointer"
                }`}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              />
              <FaAngleRight
                size={25}
                className={`${
                  currentPage === totalPages
                    ? "text-gray-100 cursor-not-allowed"
                    : "text-gray-400 cursor-pointer"
                }`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              />
              <span className='text-white'>
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default BranchDetails;