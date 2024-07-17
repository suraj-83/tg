import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { employeeLogin } from '../redux/slices/authSlice';

function EmployeeLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialFormData = {
        empId: '',
        companyId: '',
        password: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await dispatch(employeeLogin(formData));

        if (response?.payload?.data?.success) {
            navigate("/")
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className='h-screen w-full flex items-center justify-center bg-slate-950'>
            <form onSubmit={handleSubmit} className="bg-blue-200 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]">
                <h1 className="mb-3 font-bold text-center uppercase text-2xl underline">Employee Login</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        id="empId"
                        placeholder='Employee ID'
                        value={formData.empId}
                        onChange={(e) => setFormData(prevState => ({ ...prevState, empId: e.target.value }))}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="companyId"
                        placeholder='Company ID'
                        value={formData.companyId}
                        onChange={(e) => setFormData(prevState => ({ ...prevState, companyId: e.target.value }))}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={(e) => setFormData(prevState => ({ ...prevState, password: e.target.value }))}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                {!isValid && <p className="text-red-500 mt-1">Invalid Employee ID, Company ID, or Password</p>}
                <div className="mb-4 flex justify-between items-center">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                    <div className="flex items-center">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline mr-2">Forgot Password?</Link>
                        <Link to="/employee" className="text-blue-500 hover:underline">Don't have an account? Sign up</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EmployeeLogin;
