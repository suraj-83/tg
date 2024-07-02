import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../redux/slices/authSlice"; // Update the path accordingly
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useLocation().state?.email;
  const [password, setPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const response = await dispatch(resetPassword({ email, password }));

    if (response?.payload?.data?.success) {
      navigate("/");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="reset-password-container h-screen w-full flex flex-col items-center justify-center bg-gray-800">
      <form className="bg-blue-200 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]">
        <h1 className="text-2xl font-bold mb-4 text-center uppercase">
          Reset Password
        </h1>
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="password-input mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          className="password-input mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleResetPassword}
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition `}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
