import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { retailLogin } from '../redux/slices/authSlice';


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialFormData = {
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isValid, setIsValid] = useState(true);

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setFormData(prevState => ({
            ...prevState,
            password: newPassword
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await dispatch(retailLogin(formData));

        if (response?.payload?.data?.success) {
            navigate("/")
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className='h-screen w-full flex items-center justify-center bg-slate-950'>
    <form onSubmit={handleSubmit} className="bg-blue-200 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]">
    <h1 className="mb-3 font-bold  text-center uppercase text-2xl underline">Retail Login</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        id="email"
                        placeholder='email'
                        value={formData.email}
                        onChange={(e) => setFormData(prevState => ({ ...prevState, email: e.target.value }))}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={handlePasswordChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                {!isValid && <p className="text-red-500 mt-1">Invalid email or password</p>}
                <div className="mb-4 flex justify-between items-center">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                    <Link to="/signup" className="text-blue-500 hover:underline">Don't have an account? Sign up</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
