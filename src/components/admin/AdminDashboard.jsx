import React from 'react';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';
import AdminMain from '../AdminMain';
import Dashboard from './Dashboard';


const AdminDashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            <AdminHeader />
            <div className="flex flex-1">
                <AdminSidebar />
                <main className="flex-1 p-6 bg-gray-100">
                    <AdminMain />
                    <Dashboard />
                    
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
