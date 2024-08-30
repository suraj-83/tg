import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { contactUs } from "../redux/slices/authSlice"; // Replace with the correct path to your slice

const ContactUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const colors = ["#ff477e", "#ffc759", "#9be7ff", "#c3aed6", "#ff6f91"];

    gsap.to(".retro-background", {
      backgroundImage: `linear-gradient(45deg, ${colors.join(", ")})`,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name) {
      alert("Please enter your name!");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email!");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number!");
      return;
    }

    try {
      await dispatch(contactUs(formData)).unwrap();
      resetForm();
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className="retro-background flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/30 p-8 rounded-lg shadow-lg max-w-md w-full border border-white/10"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-900">
          Contact Us
        </h2>

        <div className="mb-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm backdrop-blur-lg bg-white/30"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            id="phone"
            maxLength={10}
            minLength={10}
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm backdrop-blur-lg bg-white/30"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm backdrop-blur-lg bg-white/30"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm backdrop-blur-lg bg-white/30"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full p-2 border border-pink-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm backdrop-blur-lg bg-white/30"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            SEND ENQUIRY <FaArrowRight className="inline-block ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
