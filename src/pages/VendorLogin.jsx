import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { vendorLogin } from "../redux/slices/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    const formData = { email, password };

    const response = await dispatch(vendorLogin(formData));

    if (response?.payload?.data?.success) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-950">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]"
      >
        <h1 className="mb-3 font-bold  text-center uppercase text-2xl underline">
          Vender Login
        </h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Check if isValid is defined before rendering the error message */}
        {typeof isValid !== 'undefined' && !isValid && (
          <p className="text-red-500 mt-1">Invalid email or password</p>
        )}
        <div className="mb-4 flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
          <div className="flex items-center">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline mr-2"
            >
              Forgot Password?
            </Link>
            <Link to="/vendor" className="text-blue-500 hover:underline">
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
