import React from "react";

const VendorHeader = () => {
  return (
    <header className="bg-gradient-to-r from-black to-gray-950 text-white p-4 flex justify-between sticky top-0 items-center">
      <h1 className="text-xl font-semibold">Vendor Dashboard</h1>
      {/* You can add more header content like user info, logout button, etc. */}
      <div>
        <button className="bg-red-600 px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
};

export default VendorHeader;
