import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllEmployees, updateEmployee } from '../redux/slices/authSlice';
import CorporateSidebar from '../components/CorporateDashboard/CorporateSidebar';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const EmployeeDetails = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([]); 
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleUpdateEmployee = async (updatedEmployee) => {
    const response = await dispatch(updateEmployee({ employeeId: editingEmployee.employeeId, data: updatedEmployee }));
    if (response?.payload?.success) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.employeeId === editingEmployee.employeeId ? updatedEmployee : employee
        )
      );
      setEditingEmployee(null);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(getAllEmployees());
      // console.log("Response from API : ",response); // For debugging
      // console.log("Length is equal to :",response?.payload?.data?.length);

      if (response?.payload?.data?.length > 0) {
        setEmployees(response.payload.data);  // Correct path to employee data
      } else {
        setEmployees([]); // In case of no employees
      }
    };
    fetchData();
  }, [dispatch]);

  const handleRemove = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.employeeId !== id));
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateEmployee(editingEmployee);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.employeeId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentEmployees = filteredEmployees.slice(startIndex, startIndex + rowsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  useEffect(() => {
    // console.log("Current employees:", currentEmployees);
    console.log("Current Employees Data is fetched successfully.")
  }, [currentEmployees]);

  return (
    <div className="flex">
      <CorporateSidebar />
      <main className="w-full bg-gray-900">
        <div className="max-h-[120vh] overflow-auto">
          <div className="m-6 text-sm justify-between flex gap-4">
            <h1 className="font-bold text-center text-white uppercase text-2xl ml-16 underline">
              Employee Details
            </h1>
            <input
              type="text"
              placeholder="Search Name or Employee ID"
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 mx-auto mr-14 bg-[#20354b] text-white border border-gray-400 rounded-2xl py-2 shadow-lg"
            />
          </div>

          <div className="max-h-[80vh] overflow-auto">
            {currentEmployees.length > 0 ? (
              <div className="overflow-auto grid grid-cols-4 gap-2">
                {currentEmployees.map((employee) => (
                  <div key={employee.employeeId} className="border border-gray-700 text-white mx-auto bg-[#20354b] rounded-xl px-4 py-4 shadow-lg">
                    <h2 className="font-bold text-xl mb-2">{employee.name}</h2>
                    <p><strong>EmpId:</strong> {employee.employeeId}</p>
                    <p><strong>Gender:</strong> {employee.gender}</p>
                    <p><strong>DOB:</strong> {employee.dob}</p>
                    <p><strong>Age:</strong> {employee.age}</p>
                    <p><strong>ZipCode:</strong> {employee.zipCode}</p>
                    <p><strong>Country:</strong> {employee.country}</p>
                    <p><strong>City:</strong> {employee.city}</p>
                    <p><strong>State:</strong> {employee.state}</p>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>CountryCode:</strong> {employee.countryCode}</p>
                    <p><strong>Phone No.:</strong> {employee.contactNo}</p>
                    <p><strong>Branch:</strong> {employee.branchId}</p>
                    <p><strong>Department:</strong> {employee.department}</p>
                    <p><strong>Position:</strong> {employee.position}</p>
                    <button
                      onClick={() => handleEdit(employee)}
                      className='border border-blue-500 hover:border-blue-700 text-white font-bold py-2 px-6 mr-5 rounded mt-4'>
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemove(employee.employeeId)}
                      className='border border-red-500 hover:border-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2'>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white text-center">No employees found</p>
            )}

            {editingEmployee && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-[#20354b] text-white p-6 rounded-lg shadow-lg w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Edit Employee Details</h2>
                  <div className='grid grid-cols-3 gap-2'>
                    <label className="block mb-2">
                      Name
                      <input
                        type="text"
                        name="name"
                        value={editingEmployee.name}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Gender
                      <input
                        type="text"
                        name="gender"
                        value={editingEmployee.gender}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      DOB
                      <input
                        type="date"
                        name="dob"
                        value={editingEmployee.dob}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Zip Code
                      <input
                        type="text"
                        name="zipCode"
                        value={editingEmployee.zipCode}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Country
                      <input
                        type="text"
                        name="country"
                        value={editingEmployee.country}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      City
                      <input
                        type="text"
                        name="city"
                        value={editingEmployee.city}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      State
                      <input
                        type="text"
                        name="state"
                        value={editingEmployee.state}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Email
                      <input
                        type="email"
                        name="email"
                        value={editingEmployee.email}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Phone No.
                      <input
                        type="text"
                        name="phoneNo"
                        value={editingEmployee.contactNo}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Branch
                      <input
                        type="text"
                        name="branchId"
                        value={editingEmployee.branchId}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Department
                      <input
                        type="text"
                        name="department"
                        value={editingEmployee.department}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                    <label className="block mb-2">
                      Position
                      <input
                        type="text"
                        name="position"
                        value={editingEmployee.position}
                        onChange={handleChange}
                        className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                      />
                    </label>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingEmployee(null)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Pagination Control */}
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
                className={`${currentPage === 1
                  ? "text-gray-100 cursor-not-allowed"
                  : "text-gray-400 cursor-pointer"
                  }`}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              />
              <FaAngleRight
                size={25}
                className={`${currentPage === totalPages
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

export default EmployeeDetails;
