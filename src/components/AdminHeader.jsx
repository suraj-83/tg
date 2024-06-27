import React from 'react';
import Logo from '../assets/TGESLogo.png';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <header className="bg-gradient-to-r from-black to-gray-950 text-white p-4 flex justify-between sticky top-0 items-center">
            <Link to="/">
                        <img src={Logo} alt="TGES" className="w-16" />
                    </Link>

            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div>
                <button className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </div>
        </header>
    );
};

export default AdminHeader;
