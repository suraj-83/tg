import React from 'react';
import { Header, Footer } from "../components"

const AboutPage = () => {
    return (
        <div className="bg-gray-100 w-full min-h-screen">
            <Header />

            {/* About Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">About Us</h2>
                    <p className="text-lg text-gray-600 mb-8">We would like to take this opportunity to introduce ourselves as upcoming Travel Company in Delhi NCR.</p>
                    <p className="text-lg text-gray-600 mb-8">Travel Guide & Event Solutions is a fastest growing Tour organizer operating in New Delhi (NCR) It's a growing and professionally run company, offering Travel and Destination Management related services. We take special care of our clients, providing all kinds of assistance a modern traveler looks for.</p>
                    <p className="text-lg text-gray-600 mb-8"> We offer our clients with carefully prepared comprehensive end-to-end management program focused on their unique objectives. Whether our clients are looking for effective cost management strategies, travel policy implementation and management or superior customer service delivery, we have a solution at TRAVEL GUIDE & EVENT SOLUTIONS - TGES</p>
                    <p className="text-lg text-gray-600 mb-8">TGES is making the consistent efforts to provide the best travel solutions to our customers through building the strong relations with the best talent in the Travel Industry either consolidators, Aggregators of hotel, cabs, Air etc. or Information & technological partners.</p>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutPage;
