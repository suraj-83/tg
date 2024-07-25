import React from 'react';

const AdminMain = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Users</h3>
                    <p className="text-gray-600">Manage users and their information.</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Users</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Settings</h3>
                    <p className="text-gray-600">Configure system settings.</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Settings</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Reports</h3>
                    <p className="text-gray-600">View and generate reports.</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Reports</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                    <p className="text-gray-600">Analyze system data.</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Analytics</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                    <p className="text-gray-600">Manage system notifications.</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Manage Notifications</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Support</h3>
                    <p className="text-gray-600">Get help and support.</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Support</button>
                </div>
            </div>
        </div>
    );
};

export default AdminMain;
