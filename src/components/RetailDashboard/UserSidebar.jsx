import React from "react";

const UserSidebar = () => {
  return (
    <aside className="bg-gray-700 text-white w-64 min-h-screen">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <ul>
          <li className="py-2 hover:bg-gray-700">
            <a href="#" className="block px-4">Dashboard</a>
          </li>
          <li className="py-2 hover:bg-gray-700">
            <a href="#" className="block px-4">Bookings</a>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default UserSidebar;
