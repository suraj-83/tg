import React from "react";
import { FaHome, FaUser, FaSignInAlt, FaRegBuilding, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-8">
        
        {/* Company Section */}
        <div>
          <h2 className="font-bold text-white mb-4">Company</h2>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Travel Notification</a></li>
            <li><a href="#" className="hover:underline">Bank details</a></li>
            <li><a href="#" className="hover:underline">Gst details</a></li>
            <li><a href="#" className="hover:underline">FAQ'S</a></li>
            <li><a href="contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Policy and Terms Section */}
        <div>
          <h2 className="font-bold text-white mb-4">Policy and terms & con.</h2>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Legal Agreement</a></li>
          </ul>
        </div>
        
        {/* Quick Links for Registration Section */}
        <div>
          <h2 className="font-bold text-white mb-4">Quick Links for Registration</h2>
          <ul>
            <li><a href="vendor" className="hover:underline">Become a vendor</a></li>
            <li><a href="corporate" className="hover:underline">Corporate Registration</a></li>
            <li><a href="retail" className="hover:underline">Retail Registration</a></li>
            <li><a href="/main-login" className="hover:underline">Login</a></li>
            <li><a href="forgot-password" className="hover:underline">Forgot Password</a></li>
            <li><a href="#" className="hover:underline">Need Help</a></li>
          </ul>
        </div>
        
        {/* Product & Services Section */}
        <div>
          <h2 className="font-bold text-white mb-4">Product & Services</h2>
          <ul>
            <li><a href="/flightbookings" className="hover:underline">Flight Booking</a></li>
            <li><a href="trainbookings" className="hover:underline">Train Ticket Booking</a></li>
            <li><a href="cabbookings" className="hover:underline">Cab Services Booking</a></li>
            <li><a href="volvobusbookings" className="hover:underline">Volvo Bus Booking</a></li>
            <li><a href="hotelbookings" className="hover:underline">Hotel Booking</a></li>
            {/* <li><a href="#" className="hover:underline">Visa Services</a></li> */}
            <li><a href="passport" className="hover:underline">Passport</a></li>            
            <li><a href="healthlifeinsurance" className="hover:underline">Health Insurance</a></li>
            <li><a href="travelinsurance" className="hover:underline">Travel Insurance</a></li>
            {/* <li><a href="#" className="hover:underline">Foreign Exchange</a></li> */}
          </ul>
        </div>
        
        {/* Get in Touch Section */}
        <div>
          <h2 className="font-bold text-white mb-4">Get in touch</h2>
          <p>Speak with a vacation expert.<br />Toll free number</p>
          <h3 className="text-white text-2xl my-4">8744002341</h3>
          <a href="contact-us" className="bg-white text-gray-900 px-4 py-2 mt-2">Contact Us</a>
        </div>
      </div>
      
      {/* Social and Footer Bottom */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 mt-10">
        <p className="text-gray-500">&copy; 2022 TGES, Inc.</p>
        <p className="text-gray-500">GREATER NOIDA GSTIN: 09AENPC6969F1Z2<br />SOUTH WEST DELHI: 07AENPC6969F1Z6</p>
        <div className="flex space-x-4">
            <a href="https://www.facebook.com/tgestravel/" >
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://www.twitter.com/tgestravel" >
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/tgestravel" >
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/in/tges-travel-b454a0319/" >
              <FaLinkedin className="text-2xl hover:text-blue-600" />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
