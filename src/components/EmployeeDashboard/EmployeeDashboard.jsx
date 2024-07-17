import React from 'react';

import EmployeeHeader from './EmployeeHeader';
import EmployeeSidebar from './EmployeeSidebar';

const UserDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
    <EmployeeHeader />
    <div className="flex flex-1">
        <EmployeeSidebar />
        <main className="flex-1 p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        </main>
    </div>
</div>
  );
};

export default UserDashboard;
