import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../redux/slices/authSlice'; // Update the path accordingly
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useLocation().state?.email;

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const response = await dispatch(verifyOtp({ email, otp }));

    console.log(response)

    if (response?.payload?.data?.success) {
      navigate("/reset-password", { state: { email } });
    }
  };

  return (
    <div className="verify-otp-container h-screen w-full flex flex-col items-center justify-center bg-gray-800">
        <form className="bg-blue-200 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]">
        <h1 className="text-2xl font-bold mb-4 text-center uppercase">Verify OTP</h1>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="otp-input mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleVerifyOtp}
        className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition `}
      >
        {/* {isLoading ? 'Verifying...' : 'Verify OTP'} */}
        Verify OTP
      </button>
    </form>
    </div>
  );
};

export default VerifyOtp;
