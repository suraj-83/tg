import React from 'react';
import Logo from '../assets/TGESLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAdmin } from '../redux/slices/dashboardSlice';

const AdminHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();

        const response = await dispatch(logoutAdmin());
        console.log("Logout")

        console.log(response)
        if (response?.payload?.success) {
            navigate("/")
        }
    };

    return (
        <header className="bg-gradient-to-r from-black to-gray-950 text-white p-4 flex justify-between sticky top-0 items-center">
            <Link to="/admin">
                        <img src={Logo} alt="TGES" className="w-16" />
                    </Link>

            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div>
                <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </div>
        </header>
    );
};

export default AdminHeader;
