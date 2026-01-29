import React, { useEffect, useState } from 'react';

const PrivacyChoices: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        state: '',
        requests: [] as string[]
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            if (checked) {
                return { ...prev, requests: [...prev.requests, value] };
            } else {
                return { ...prev, requests: prev.requests.filter(item => item !== value) };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle form submission would go here (e.g., sending to backend/webhook)
        // For now, we simulate submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-brand-light/30 min-h-screen py-32">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
                        <h1 className="text-3xl font-extrabold text-brand-dark mb-4">Request Received</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            We have received your request. Your information has been added to our suppression list, and we will process your request within the timeframe required by your state’s law.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                        >
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-brand-light/30 min-h-screen py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-2">YOUR PRIVACY CHOICES</h1>
                    <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">Last Updated: January 26, 2026</p>

                    <div className="space-y-8 text-gray-700 leading-relaxed mb-12">
                        <section>
                            <p className="mb-4">
                                If you are a resident of California, Colorado, Connecticut, Texas, Utah, or Virginia, you have specific rights regarding your personal data. This page allows you to exercise your Right to Opt-Out of the sale/sharing of your data and your Right to Limit the use of your sensitive personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-brand-dark mb-4">1. NOTICE OF DATA PRACTICES</h2>
                            <p className="mb-4">
                                Auto File Claim is a marketing and technology platform. To provide our services, we "sell" or "share" your information (including identifiers and accident details) with our Marketing Partners (law firms and intake specialists). Because the information you provide often includes details about your physical injuries, it is classified as Sensitive Personal Information.
                            </p>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                                <p className="text-amber-800 font-medium">
                                    PLEASE NOTE: Our service is built on the transfer of this data. If you opt-out or limit the use of this data, we cannot match you with a law firm or process your inquiry.
                                </p>
                            </div>
                        </section>
                    </div>

                    <section>
                        <h2 className="text-xl font-bold text-brand-dark mb-6">2. EXERCISE YOUR RIGHTS</h2>
                        <p className="mb-6">Please use the form below to submit your request. We will process your request within the timeframe required by your state’s law (typically 15–45 days).</p>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Step 1: Your Information</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-gray-400 font-normal">(Essential for scrubbing)</span></label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State of Residence</label>
                                        <select
                                            id="state"
                                            name="state"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select State</option>
                                            <option value="CA">California</option>
                                            <option value="TX">Texas</option>
                                            <option value="CO">Colorado</option>
                                            <option value="WA">Washington</option>
                                            <option value="VA">Virginia</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="UT">Utah</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Step 2: Select Your Request</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <input
                                            id="optOut"
                                            name="requests"
                                            type="checkbox"
                                            value="Do Not Sell or Share"
                                            className="h-4 w-4 text-brand-primary border-gray-300 rounded mt-1"
                                            onChange={handleCheckboxChange}
                                        />
                                        <div className="ml-3">
                                            <label htmlFor="optOut" className="text-sm font-medium text-gray-700 block">Do Not Sell or Share My Personal Information</label>
                                            <p className="text-sm text-gray-500">Stop the transfer of my data to third parties for marketing or administrative fees.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            id="limitUse"
                                            name="requests"
                                            type="checkbox"
                                            value="Limit Use"
                                            className="h-4 w-4 text-brand-primary border-gray-300 rounded mt-1"
                                            onChange={handleCheckboxChange}
                                        />
                                        <div className="ml-3">
                                            <label htmlFor="limitUse" className="text-sm font-medium text-gray-700 block">Limit the Use and Disclosure of My Sensitive Personal Information</label>
                                            <p className="text-sm text-gray-500">I request that you restrict the use of my health/injury data to only what is strictly necessary to provide the service. (Note: This will prevent us from sharing your injury details with law firms).</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            id="optOutAds"
                                            name="requests"
                                            type="checkbox"
                                            value="Opt-Out Targeted Ads"
                                            className="h-4 w-4 text-brand-primary border-gray-300 rounded mt-1"
                                            onChange={handleCheckboxChange}
                                        />
                                        <div className="ml-3">
                                            <label htmlFor="optOutAds" className="text-sm font-medium text-gray-700 block">Opt-Out of Targeted Advertising</label>
                                            <p className="text-sm text-gray-500">Do not use my data for cross-context behavioral advertising.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <input
                                            id="delete"
                                            name="requests"
                                            type="checkbox"
                                            value="Request to Delete"
                                            className="h-4 w-4 text-brand-primary border-gray-300 rounded mt-1"
                                            onChange={handleCheckboxChange}
                                        />
                                        <div className="ml-3">
                                            <label htmlFor="delete" className="text-sm font-medium text-gray-700 block">Request to Delete</label>
                                            <p className="text-sm text-gray-500">Permanently remove my record from your database.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-3 bg-brand-primary text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transform transition-transform active:scale-95"
                                >
                                    SUBMIT PRIVACY REQUEST
                                </button>
                            </div>
                        </form>
                    </section>

                    <div className="mt-16 space-y-8 border-t border-gray-100 pt-12">
                        <section>
                            <h2 className="text-xl font-bold text-brand-dark mb-4">3. AUTOMATED OPT-OUT (GPC)</h2>
                            <p>
                                We honor Global Privacy Control (GPC) signals. If your browser or device sends a GPC signal, we will automatically opt you out of the "sale" and "sharing" of your personal information for that specific session without you needing to fill out the form above.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-brand-dark mb-4">4. OTHER CONTACT METHODS</h2>
                            <p>
                                If you have difficulty using the form, you may also submit your request via:
                                <br />
                                <strong>Email:</strong> privacy@autofileclaim.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-brand-dark mb-4">5. AUTHORIZED AGENTS</h2>
                            <p>
                                If you are submitting this request on behalf of another person, you must provide written proof of your authority (such as a power of attorney) to privacy@autofileclaim.com before we can process the request.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyChoices;
