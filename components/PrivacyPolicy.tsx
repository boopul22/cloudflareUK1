import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-light/30 min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">1. Introduction</h2>
              <p>
                Online Motor Claims ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. 
                This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect several types of information from and about users of our Website, including information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information");</li>
                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
              </ul>
            </section>
             <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To connect you with third-party service providers or legal professionals who can assist with your claim.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may disclose aggregated information about our users without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy to our subsidiaries and affiliates, to contractors, service providers, and other third parties we use to support our business, and to legal professionals to whom we refer your case details for evaluation.
            </p>
          </section>
           <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: autoclaimfiling.uk@gmail.com
            </p>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;