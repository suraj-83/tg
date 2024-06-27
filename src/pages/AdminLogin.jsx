import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { adminLogin } from '../redux/slices/authSlice';

function AdminLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await dispatch(adminLogin(formData));

        if (response?.payload?.data?.success) {
            navigate("/admin/dashboard");
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className='h-screen w-full flex items-center justify-center bg-gray-900'>
            <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-lg">
                <h1 className="mb-3 font-bold text-center uppercase text-2xl underline">Admin Login</h1>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                {!isValid && <p className="text-red-500 mt-1">Invalid email or password</p>}
                <div className="mb-4 flex justify-between items-center">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                    <Link to="/admin/signup" className="text-blue-500 hover:underline">Don't have an account? Sign up</Link>
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;
