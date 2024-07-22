import React from 'react';

import UserHeader from './UserHeader';
import UserSidebar from './UserSidebar';

const UserDashboard = () => {
  return (
    <div className="flex">
        <UserSidebar />
        <main className="flex-1 p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        </main>
    </div>
  );
};

export default UserDashboard;
