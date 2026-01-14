import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-light/30 min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-2">Terms & Conditions</h1>
            <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
                <h2 className="text-xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h2>
                <p>
                By accessing and using Online Motor Claims ("Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Service's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-brand-dark mb-4">2. Description of Service</h2>
                <p>
                Online Motor Claims is a matching service that connects individuals who have been in auto accidents with legal professionals or third-party service providers. We are not a law firm and do not provide legal advice. No attorney-client relationship is formed by your use of this site or by submitting your information.
                </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h2 className="text-xl font-bold text-brand-dark mb-4">3. TCPA Consent & Marketing</h2>
                <p className="font-semibold mb-2">IMPORTANT: PLEASE READ CAREFULLY</p>
                <p>
                By clicking "Submit", "Get Free Claim Review", or calling the phone number listed on this website, you expressly consent to receive marketing communications (including calls, text messages, and emails) from Online Motor Claims and our third-party partners at the telephone number and email address provided, even if that number is on a corporate, state, or national Do Not Call Registry. 
                </p>
                <p className="mt-4">
                You agree that these communications may be made using an autodialer, prerecorded voice, or artificial voice. Consent is not a condition of purchase or service. Message and data rates may apply.
                </p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-brand-dark mb-4">4. No Guarantees</h2>
                <p>
                We make no guarantees regarding the outcome of your claim. The "No Win, No Fee" guarantee refers to the standard contingency fee arrangement offered by many of the attorneys in our network, subject to their specific retainer agreements. Past performance does not guarantee future results.
                </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
              </p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-brand-dark mb-4">8. Contact Us</h2>
                <p>
                If you have any questions about these Terms, please contact us at: autoclaimfiling.uk@gmail.com
                </p>
            </section>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;