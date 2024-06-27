import React from 'react';

const AdminHeader = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between sticky top-0 items-center">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div>
                <button className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </div>
        </header>
    );
};

export default AdminHeader;
