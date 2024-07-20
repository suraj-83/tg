import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../redux/slices/dashboardSlice';

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

        const response = await dispatch(loginAdmin(formData));

        console.log(response)
        if (response?.payload?.success) {
            console.log("inside if ")
            navigate("/")
            navigate("/admin/dashboard");
        } else {
            setIsValid(false);
        }
    };
    
    return (
        <div className='h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-800'>
            <div className="bg-white/50 rounded-lg shadow-lg p-5 z-10 flex items-center justify-center border border-gray-100  flex-col w-full md:w-1/2 lg:w-1/3 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="flex flex-col w-full">
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
                        <div className="flex items-center">
                            <Link to="/forgot-password" className="text-blue-500 hover:underline mr-2">Forgot Password?</Link>
                        <Link to="/admin/signup" className="text-blue-500 hover:underline">Don't have an account? Sign up</Link>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
}

export default AdminLogin;
