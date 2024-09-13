import React from 'react';
import { Header, Footer } from "../../../components";

const EventTermsPage = () => {
    return (
        <div className="bg-[#EEEFF3] w-full min-h-screen">
            <Header />
            {/* Event Terms & Conditions Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Event Service Terms & Conditions</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        1. All event bookings must be finalized at least 15 days prior to the event date. Changes to the event plan after this period may incur additional charges.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        2. TGES reserves the right to change or modify event packages as required by venue regulations or client requests, with prior notice.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        3. Cancellation of events within 7 days of the event date will incur a 50% cancellation fee, and cancellations within 48 hours will result in a 100% fee.
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        4. TGES will not be liable for any damages or losses caused during the event by third-party vendors or unforeseen circumstances.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default EventTermsPage;
