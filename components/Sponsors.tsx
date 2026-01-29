import React, { useEffect } from 'react';

const Sponsors: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-brand-light/30 min-h-screen py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-2">OUR MARKETING PARTNERS & SPONSORS</h1>
                    <div className="text-gray-500 mb-8 border-b border-gray-100 pb-8"></div>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <p className="mb-4">
                                Auto File Claim is a legal advertising service that connects consumers with independent attorneys. Auto File Claim is not a law firm, does not provide legal advice, and does not endorse or recommend any attorney. No attorney-client relationship is formed by using this website or its services.
                            </p>
                            <p className="mb-4">
                                Past results do not guarantee future outcomes. These attorneys participate in the Auto File Claim advertising program and have paid for promotional placement on this site. Selection of an attorney is solely at the consumer’s discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-brand-dark mb-4">PARTICIPATING LEGAL SPONSORS</h2>
                            <p className="mb-6">
                                The following attorneys and law firms are current participants in our joint advertising program. You have the right to request an attorney by name or choose an attorney not affiliated with this program.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-brand-primary mb-2">[Insert Law Firm Name 1]</h3>
                                    <p className="text-sm text-gray-600 mb-1"><strong>Principal Office:</strong> [City, State]</p>
                                    <p className="text-sm text-gray-600"><strong>Jurisdictions:</strong> Licensed to practice in [States, e.g., GA, PA, AZ]</p>
                                </div>

                                <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-brand-primary mb-2">[Insert Law Firm Name 2]</h3>
                                    <p className="text-sm text-gray-600 mb-1"><strong>Principal Office:</strong> [City, State]</p>
                                    <p className="text-sm text-gray-600"><strong>Jurisdictions:</strong> Licensed to practice in [States, e.g., CA, TX]</p>
                                </div>
                            </div>

                            <p className="mt-6 text-sm italic text-gray-500">
                                Note: Auto File Claim does not determine which attorney will handle a specific case. You have the right to choose any attorney, including those not affiliated with this program.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
