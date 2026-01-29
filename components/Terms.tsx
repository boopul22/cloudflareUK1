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
          <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">1. Introduction</h2>
              <p>
                Welcome to Online Motor Claims, operated by LRA Marketing Ltd ("we," "our," or "us"). These Terms and Conditions govern your use of our website and our credit hire replacement vehicle referral service. By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">2. About Our Service</h2>
              <p className="mb-4">
                LRA Marketing Ltd is a referral service that connects individuals who have been involved in non-fault road traffic accidents with credit hire companies and associated service providers in the United Kingdom. We help you access your legal right to a like-for-like replacement vehicle under UK law.
              </p>
              <p>
                <strong>Important:</strong> We are not a credit hire company, law firm, or insurance provider. We act as an intermediary to connect you with appropriate service providers. We do not provide legal, financial, or insurance advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">3. Credit Hire Explained</h2>
              <p className="mb-4">
                Credit hire is a service that allows you to hire a replacement vehicle following a non-fault accident. The cost of the hire is recovered from the at-fault party's insurer, meaning there is typically no cost to you if liability is established.
              </p>
              <p>
                Please note: The availability of a replacement vehicle and the recovery of costs depends on the successful establishment of liability against the at-fault party. We cannot guarantee the outcome of any claim.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold text-brand-dark mb-4">4. Marketing Communications Consent</h2>
              <p className="font-semibold mb-2">IMPORTANT: PLEASE READ CAREFULLY</p>
              <p className="mb-4">
                By submitting your details through our website, you consent to be contacted by LRA Marketing Ltd and our trusted partner credit hire companies regarding your enquiry and related services.
              </p>
              <p className="mb-4">
                In accordance with UK data protection law and the Privacy and Electronic Communications Regulations (PECR), we will only contact you with marketing communications where you have given your explicit consent. You may withdraw your consent at any time by contacting us at the details provided below or by using the unsubscribe option in any marketing communication.
              </p>
              <p>
                Standard call charges and data rates apply when contacting us or when we contact you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">5. Your Obligations</h2>
              <p className="mb-4">When using our service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and truthful information about your accident and circumstances</li>
                <li>Promptly respond to requests for additional information from us or our partner providers</li>
                <li>Not use our service for any fraudulent, unlawful, or misleading purpose</li>
                <li>Cooperate fully with any claim process initiated on your behalf</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">6. No Guarantees</h2>
              <p>
                We do not guarantee the outcome of any credit hire arrangement or claim. The availability of a replacement vehicle and the recovery of hire costs depend on factors outside our control, including the successful establishment of liability against the at-fault party. Each case is assessed individually by our partner credit hire companies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, LRA Marketing Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
              </p>
              <p>
                Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded or limited under English law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">8. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of LRA Marketing Ltd or our licensors and is protected by UK and international copyright laws. You may not reproduce, distribute, or use any content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">9. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website or services after any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">11. Contact Us</h2>
              <p className="mb-2">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> help@lramarketing.co.uk
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;