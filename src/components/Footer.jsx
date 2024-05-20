import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Travel Agency</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover new destinations and unique experiences with us.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-gray-200">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-200">Destinations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-200">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-200">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-400 hover:text-gray-200"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-200"><i className="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-200"><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p>123 Main Street, City, Country</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500">
                    <p>&copy; 2024 Travel Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
