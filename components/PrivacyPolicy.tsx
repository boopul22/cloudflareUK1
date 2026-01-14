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
          <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">1. Introduction</h2>
              <p className="mb-4">
                Autoclaimfiling.online ("we," "our," or "us") is committed to protecting your privacy and handling your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and credit hire referral services.
              </p>
            </section>

            <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h2 className="text-xl font-bold text-brand-dark mb-4">2. Data Controller</h2>
              <p>
                For the purposes of UK GDPR, Autoclaimfiling.online is the data controller responsible for your personal data. If you have any questions about this Privacy Policy or how we handle your data, you can contact us at: <strong>autoclaimfiling.uk@gmail.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">3. Information We Collect</h2>
              <p className="mb-4">We collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Identity Data:</strong> Your full name</li>
                <li><strong>Contact Data:</strong> Email address and telephone number</li>
                <li><strong>Accident Data:</strong> Details about your accident that you provide to us</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies (see our Cookie Policy below)</li>
              </ul>
              <p>
                We do not collect any Special Category Data (such as health information, racial origin, or political opinions) unless strictly necessary for your claim and with your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">4. How We Use Your Information (Legal Basis)</h2>
              <p className="mb-4">We process your personal data on the following legal bases under UK GDPR:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Consent (Article 6(1)(a)):</strong> When you submit an enquiry form, you consent to us contacting you about your claim and passing your details to our partner credit hire companies.</li>
                <li><strong>Legitimate Interest (Article 6(1)(f)):</strong> To operate and improve our website, respond to enquiries, and match you with appropriate service providers.</li>
                <li><strong>Legal Obligation (Article 6(1)(c)):</strong> To comply with applicable laws and regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">5. Who We Share Your Data With</h2>
              <p className="mb-4">We may share your personal data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Credit Hire Partners:</strong> Trusted credit hire companies in the UK who can assist with your replacement vehicle claim</li>
                <li><strong>Service Providers:</strong> Third parties who provide website hosting, analytics, and email services on our behalf</li>
                <li><strong>Legal and Regulatory Bodies:</strong> Where required by law or to protect our legal rights</li>
              </ul>
              <p className="mt-4">
                All third parties are required to protect your data and process it only in accordance with our instructions and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">6. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected. Enquiry data is typically retained for up to 3 years after our last contact with you, unless a longer retention period is required by law or for the defence of legal claims.
              </p>
            </section>

            <section className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h2 className="text-xl font-bold text-brand-dark mb-4">7. Your Rights Under UK GDPR</h2>
              <p className="mb-4">Under UK GDPR, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organisation</li>
                <li><strong>Right to Object:</strong> Object to processing of your data, including for direct marketing</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time where processing is based on consent</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <strong>autoclaimfiling.uk@gmail.com</strong>. We will respond to your request within one month.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">8. International Transfers</h2>
              <p>
                Your personal data may be processed by service providers located outside the UK. Where this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the UK Information Commissioner's Office (ICO), to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">9. Cookies</h2>
              <p className="mb-4">
                Our website uses cookies to improve your browsing experience and analyse website traffic. Cookies are small text files stored on your device.
              </p>
              <p className="mb-4">We use the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
              </ul>
              <p className="mt-4">
                You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">10. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our website uses SSL encryption to secure data transmission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically for the latest information on our privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">12. Complaints</h2>
              <p>
                If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's supervisory authority for data protection. You can contact the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-primary underline hover:text-brand-dark">ico.org.uk</a> or by calling 0303 123 1113.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">13. Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> autoclaimfiling.uk@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;