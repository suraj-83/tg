import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Logo from "../../assets/TGESLogo.png";
import { useDispatch } from "react-redux"
import { logout } from "../../redux/slices/authSlice"

const UserHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();

    const response = await dispatch(logout());
    console.log("Logout")

    console.log(response)
    if (response?.payload?.success) {
        navigate("/")
    }
};
  return (
    <header className="bg-gradient-to-r from-black to-gray-950 text-white p-4 flex justify-between sticky top-0 items-center">
       <Link to="/">
                        <img src={Logo} alt="TGES" className="w-16" />
                    </Link>
    
        <h1 className="text-xl font-semibold">User Dashboard</h1>
        {/* You can add more header content like user info, logout button, etc. */}
        <div>
                <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </div>      
    </header>
  );
};

export default UserHeader;
