import React, { useState } from 'react';

function LoginForm() {
  const initialFormData = {
    username: '',
    password: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted with data:', formData);
    // Reset form after submission
    setFormData(initialFormData);
  };

  return (
    <div className='h-[90vh] w-full flex items-center justify-center'>
      <form onSubmit={handleSubmit} className="bg-blue-100 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]">
      <h1 className="mb-3 font-bold  text-center uppercase text-2xl underline">
          Login
        </h1>
        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="text-sm font-semibold mb-1">Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="p-2 border rounded focus:outline-none" />
        </div>
        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-semibold mb-1">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="p-2 border rounded focus:outline-none" />
        </div>
        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
