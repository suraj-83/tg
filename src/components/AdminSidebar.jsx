import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <aside className="bg-gray-700 text-white w-64 space-y-6 py-7 px-2">
            <nav>
                <Link to="/admin" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Dashboard</Link>
                <Link to="/admin/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Users</Link>
                <Link to="/admin/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-600">Settings</Link>
                {/* Add more links as needed */}
            </nav>
        </aside>
    );
};

export default AdminSidebar;
