import React from 'react';
import { Header, Footer } from "../../../components";

const HotelTermsPage = () => {
    return (
        <div className="bg-[#EEEFF3] w-full min-h-screen">
            <Header />
            {/* Hotel Terms & Conditions Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Hotel Service Terms & Conditions</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        1. Hotel bookings must be confirmed at least 7 days in advance. Any cancellations made within 48 hours of check-in will result in a 50% cancellation fee.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        2. TGES is not responsible for any issues arising from third-party hotel bookings, including service issues or maintenance concerns.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        3. Room rates are subject to availability and seasonality. Rates may vary during peak seasons.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        4. Any damages to hotel property caused by guests will be the responsibility of the guest and must be settled before checkout.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HotelTermsPage;
