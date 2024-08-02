import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CorporateSidebar from '../components/CorporateDashboard/CorporateSidebar';

const EmployeeDetails = () => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState([
    {
      empId: "E001",
      name: "John Doe",
      gender: "male",
      dob: "1990-01-01",
      zipCode: "10001",
      country: "USA",
      city: "New York",
      state: "NY",
      email: "john.doe@example.com",
      countryCode: "1",
      phoneNo: "1234567890",
      branch: "Main",
      department: "IT",
      position: "Developer",
    },
    {
      empId: "E002",
      name: "Jane Smith",
      gender: "female",
      dob: "1985-05-15",
      zipCode: "20001",
      country: "USA",
      city: "Washington",
      state: "DC",
      email: "jane.smith@example.com",
      countryCode: "100001",
      phoneNo: "0987654321",
      branch: "Main",
      department: "HR",
      position: "Manager",
    },
  ]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(fetchEmployees());
      if (response?.payload?.data) setEmployees(response.payload.data);
    };
    fetchData();
  }, [dispatch]);

  const handleRemove = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.empId !== id));
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
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.empId === editingEmployee.empId ? editingEmployee : emp
      )
    );
    setEditingEmployee(null);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.empId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex">
      <CorporateSidebar />
      <main className="w-full p-6 bg-gray-900 overflow-auto">
        <h1 className="pb-9 font-bold text-center text-white uppercase text-2xl underline">
          Employee Details
        </h1>
        <div className="mb-6 text-sm ml-[80%]">
          <input
            type="text"
            placeholder="Search Name or Employee ID"
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 w-full mx-auto bg-[#20354b] border border-gray-400 rounded-2xl py-2 shadow-lg"
          />
        </div>
        <div className="min-h-[60vh] overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEmployees.map((employee) => (
            <div key={employee.empId} className="border p-4 border-gray-700 text-white mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
              <h2 className="font-bold text-xl mb-2">{employee.name}</h2>
              <p><strong>EmpId:</strong> {employee.empId}</p>
              <p><strong>Gender:</strong> {employee.gender}</p>
              <p><strong>DOB:</strong> {employee.dob}</p>
              <p><strong>ZipCode:</strong> {employee.zipCode}</p>
              <p><strong>Country:</strong> {employee.country}</p>
              <p><strong>City:</strong> {employee.city}</p>
              <p><strong>State:</strong> {employee.state}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>CountryCode:</strong> {employee.countryCode}</p>
              <p><strong>Phone No.:</strong> {employee.phoneNo}</p>
              <p><strong>Branch:</strong> {employee.branch}</p>
              <p><strong>Department:</strong> {employee.department}</p>
              <p><strong>Position:</strong> {employee.position}</p>
              <button
                onClick={() => handleEdit(employee)}
                className='border border-blue-500 hover:border-blue-700 text-white font-bold py-2 px-6 mr-5 rounded mt-4'>
                Edit
              </button>
              <button
                onClick={() => handleRemove(employee.empId)}
                className='border border-red-500 hover:border-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2'>
                Remove
              </button>
            </div>
          ))}
        </div>
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
                ZipCode
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
                CountryCode
                <input
                  type="text"
                  name="countryCode"
                  value={editingEmployee.countryCode}
                  onChange={handleChange}
                  className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block mb-2">
                Phone No.
                <input
                  type="text"
                  name="phoneNo"
                  value={editingEmployee.phoneNo}
                  onChange={handleChange}
                  className="block bg-[#20354b] w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block mb-2">
                Branch
                <input
                  type="text"
                  name="branch"
                  value={editingEmployee.branch}
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
              <label className="block mb-4">
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
              <div className="flex justify-between top-2">
                <button
                  type="button"
                  onClick={() => setEditingEmployee(null)}
                  className="border border-gray-500 hover:border-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border border-blue-500 hover:border-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>              
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default EmployeeDetails;
