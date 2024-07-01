import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from '../redux/slices/authSlice'

function ForgotPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(forgotPassword({ email }));
    if (response?.payload?.data?.success) {
      setMessage("Password reset link sent to your email.");
    } else {
      setMessage("Error sending password reset link.");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-950">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]"
      >
        <h1 className="mb-3 font-bold  text-center uppercase text-2xl underline">
          Forgot Password
        </h1>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {message && <p className="text-center">{message}</p>}
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
