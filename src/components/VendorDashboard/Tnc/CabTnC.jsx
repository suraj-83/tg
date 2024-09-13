import React from 'react';
import { Header, Footer } from "../../../components";

const CabTermsPage = () => {
    return (
        <div className="bg-[#EEEFF3] w-full min-h-screen">
            <Header />
            {/* Cab Terms & Conditions Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Cab Service Terms & Conditions</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        1. All cab bookings must be confirmed 24 hours in advance. Any cancellations within 12 hours of the pickup time may incur a 50% cancellation charge.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        2. TGES is not responsible for delays caused by traffic, weather conditions, or any unforeseen circumstances.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        3. All fares are inclusive of fuel charges but do not include toll taxes and parking fees, which will be charged additionally.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        4. In case of any damage to the vehicle caused by the passenger, the passenger will be responsible for the repair costs.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CabTermsPage;
