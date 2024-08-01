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

  return (
    <div className="flex">
      <CorporateSidebar />
      <main className="w-full p-6 overflow-auto">
        <h1 className="pb-9 font-bold text-center uppercase text-2xl underline">
          Employee Details
        </h1>
        <div className="min-h-[90vh] overflow-auto">
          <table className="w-full text-sm text-center table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">EmpId</th>
                <th className="border px-16 py-2">Name</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-16 py-2">DOB</th>
                <th className="border px-4 py-2">ZipCode</th>
                <th className="border px-4 py-2">Country</th>
                <th className="border px-4 py-2">City</th>
                <th className="border px-4 py-2">State</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">CountryCode</th>
                <th className="border px-4 py-2">Phone No.</th>
                <th className="border px-4 py-2">Branch</th>
                <th className="border px-4 py-2">Department</th>
                <th className="border px-4 py-2">Position</th>
                <th className="border px-4 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.empId}>
                  <td className="border px-4 py-2">{employee.empId}</td>
                  <td className="border px-4 py-2">{employee.name}</td>
                  <td className="border px-4 py-2">{employee.gender}</td>
                  <td className="border px-4 py-2">{employee.dob}</td>
                  <td className="border px-4 py-2">{employee.zipCode}</td>
                  <td className="border px-4 py-2">{employee.country}</td>
                  <td className="border px-4 py-2">{employee.city}</td>
                  <td className="border px-4 py-2">{employee.state}</td>
                  <td className="border px-4 py-2">{employee.email}</td>
                  <td className="border px-4 py-2">{employee.countryCode}</td>
                  <td className="border px-4 py-2">{employee.phoneNo}</td>
                  <td className="border px-4 py-2">{employee.branch}</td>
                  <td className="border px-4 py-2">{employee.department}</td>
                  <td className="border px-4 py-2">{employee.position}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => handleRemove(employee.empId)}
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDetails;
