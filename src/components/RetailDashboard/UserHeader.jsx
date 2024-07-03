import React from "react";

const UserHeader = () => {
  return (
    <header className="bg-gray-800 sticky top-0 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-semibold">User Dashboard</h1>
        {/* You can add more header content like user info, logout button, etc. */}
      </div>
    </header>
  );
};

export default UserHeader;
