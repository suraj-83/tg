import React from "react";
// import { logoutCorporate } from "../../redux/slices/dashboardSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CorporateHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    const response = await dispatch(logoutCorporate());
    console.log("Logout")

    console.log(response)
    if (response?.payload?.success) {
        navigate("/")
    }
  };
  return (
    <header className="bg-gradient-to-r from-black to-gray-950 text-white p-4 flex justify-between sticky top-0 items-center">
    
        <h1 className="text-xl font-semibold">Corporate Dashboard</h1>
        <div>
                <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </div>
        {/* You can add more header content like user info, logout button, etc. */}
      
    </header>
  );
};

export default CorporateHeader;
