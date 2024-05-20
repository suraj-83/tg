import React from 'react';

import { Footer, Header } from '../components';
const LandingPage = () => {
    // Define an array of image URLs for each feature card
    const cardImages = [
        'https://images.unsplash.com/photo-1629779327978-40f29418033d?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1562073505-bcd1ebd07077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDN8fHxlbnwwfHx8fHw%3D',
        'https://live.staticflickr.com/5289/5333680779_f72bc6b38d_n.jpg',
        'https://images.unsplash.com/photo-1496566084516-c5b96fcbd5c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxCYW5na29rJTIwJTI2JTIwUGF0dGF5YSUyMGJlYWNofGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1525935944571-4e99237764c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1587834423312-db9acd6ad209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxmZXJyYXJpJTIwd29ybGR8ZW58MHwwfDB8fHww',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Costa_Concordia_in_Palma%2C_Majorca%2C_Spain_%28cropped%29.JPG/1920px-Costa_Concordia_in_Palma%2C_Majorca%2C_Spain_%28cropped%29.JPG',
        'https://images.unsplash.com/photo-1558027880-b8b18883bc35?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1708361089093-beef4c4584e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDQ1fHx8ZW58MHx8fHx8',
    ];

    return (
        <div className="bg-gray-100 w-full min-h-screen">
            <Header />            

            {/* Hero Section */}
            <header className="py-20 bg-cover bg-center " style={{ backgroundImage: "url('https://img.goodfon.com/wallpaper/nbig/2/42/vernazza-cinque-terre-liguria.webp')" }}>
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Plan Your Dream Vacation</h1>
                    <p className="text-lg md:text-xl text-white mb-8">Discover amazing destinations with us</p>
                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full inline-block transition duration-300">Explore Now</a>
                </div>
            </header>

            {/* Features Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-xl  md:text-2xl font-bold text-gray-800 text-start mb-8">Popular Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[0]} alt="Feature 1" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Kurumba Maldives</h3>
        <p className="text-gray-600">Experience the pristine beauty and luxury of Kurumba Maldives, an island resort known for its white sandy beaches and crystal-clear waters.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[1]} alt="Feature 2" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Guajataca Beach</h3>
        <p className="text-gray-600">Discover the hidden gem of Guajataca Beach in Puerto Rico, where adventure and tranquility meet in perfect harmony.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[2]} alt="Feature 3" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Rai Lei</h3>
        <p className="text-gray-600">Visit the picturesque beaches and stunning cliffs of Rai Lei, a tropical paradise located in Krabi, Thailand.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[3]} alt="Feature 4" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Afteli Beach</h3>
        <p className="text-gray-600">Relax at Afteli Beach in Greece, a serene location known for its turquoise waters and breathtaking landscapes.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[4]} alt="Feature 5" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">City Escape - New York City</h3>
        <p className="text-gray-600">Experience the vibrant life of New York City, where iconic landmarks and diverse cultures create an unforgettable urban adventure.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[5]} alt="Feature 6" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Sphere Within Sphere</h3>
        <p className="text-gray-600">Visit the famous Sphere Within Sphere sculpture in the Vatican City, a symbol of complex inner worlds and creativity.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[6]} alt="Feature 7" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Costa Concordia</h3>
        <p className="text-gray-600">Explore the intriguing history and beauty of Costa Concordia, an island destination with a story to tell.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[7]} alt="Feature 8" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Marina Bay</h3>
        <p className="text-gray-600">Discover the futuristic skyline and lively attractions of Marina Bay in Singapore, a destination for luxury and excitement.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>
    <div className="border border-gray-200 rounded-lg shadow-md bg-white p-8">
        <img src={cardImages[8]} alt="Feature 9" className="mb-4 rounded-md" />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Burj Khalifa</h3>
        <p className="text-gray-600">Visit the iconic Burj Khalifa in Dubai, the tallest building in the world, offering unparalleled views and luxury experiences.</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300">Book Now</button>
    </div>                        
</div>
                </div>
    </div>
    
            {/* Newsletter Section */}
            <section className="bg-gray-800 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Subscribe to Our Newsletter</h2>
                    <p className="text-lg text-center mb-8">Stay updated with our latest offers and travel deals</p>
                    <div className="max-w-md mx-auto">
                        <form>
                            <div className="flex items-center">
                                <input type="email" placeholder="Enter your email address" className="bg-gray-900 text-white py-3 px-4 rounded-l-full w-full focus:outline-none" />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-r-full transition duration-300">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;
