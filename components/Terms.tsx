import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-light/30 min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-2">TERMS OF USE</h1>
          <p className="text-gray-500 mb-8 border-b border-gray-100 pb-8">IMPORTANT NOTICE: THESE TERMS OF USE ARE SUBJECT TO BINDING ARBITRATION AND A WAIVER OF CLASS ACTION AND JURY TRIAL RIGHTS AS DETAILED IN SECTION 15 BELOW.</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">1. Introduction</h2>
              <p>
                These Terms of Use (“Terms”) constitute a legal contract between you and Auto File Claim (“Company,” “we,” “us,” or “our”). These Terms govern your access to and use of our website, subdomains, and mobile features (the “Sites”) and all marketing, administrative, and technology services provided therein (the “Services”).
              </p>
              <p className="mt-2">
                By using our Sites or Services, you represent that you are at least 18 years of age and agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">2. Marketing and Administrative Services</h2>
              <p className="mb-4">Auto File Claim is a marketing and technology platform.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Not a Law Firm:</strong> We are not a law firm, lawyer referral service, or insurance provider. We do not provide legal advice or insurance adjusting services.</li>
                <li><strong>Compensation Disclosure:</strong> We are compensated by third-party marketing partners (law firms and intake specialists) for marketing and administrative services. We do not share in any legal fees or insurance settlements.</li>
                <li><strong>No Attorney-Client Relationship:</strong> Your use of our Services does not create an attorney-client relationship. Such a relationship is only formed via a separate, written agreement with a law firm to which you may be connected.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">3. Changes to these Terms</h2>
              <p>
                We may modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Sites or Services signifies your acceptance of the updated Terms.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold text-brand-dark mb-4">4. Consent to Electronic & Telephone Communications (TCPA)</h2>
              <p className="mb-4">
                By providing your phone number, you provide express written consent to receive calls and text messages, including those delivered via automated technology (dialers), artificial voice, and pre-recorded messages, from Auto File Claim and its marketing partners.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard Rates:</strong> Message and data rates may apply.</li>
                <li><strong>Opt-Out:</strong> Reply STOP to unsubscribe from SMS.</li>
                <li><strong>Recordings:</strong> You consent to the recording and monitoring of all inbound and outbound calls for quality assurance and verification purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">5. Prohibited Conduct</h2>
              <p className="mb-4">You may not use the Sites or Services to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Engage in unauthorized spidering, scraping, or harvesting of content.</li>
                <li>Impersonate any person or provide fraudulent accident/injury information.</li>
                <li>Use any automated means (bots) to compile information or interfere with Site operation.</li>
                <li>Attempt to gain unauthorized access to our computer systems or user data.</li>
                <li>Reverse engineer or decompile any software comprising the Sites.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">6. Submitted Materials</h2>
              <p>
                If you submit photos, stories, or data regarding an accident (“Submitted Material”), you grant Auto File Claim a royalty-free, perpetual, irrevocable, and sub-licensable right to use, copy, and distribute that material in any media. You warrant that you own the rights to any material you submit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">7. Intellectual Property</h2>
              <p>
                All content on the Sites—including text, graphics, logos, and "look and feel"—is the property of Auto File Claim or its licensors. You may not reproduce or distribute any content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">8. Third-Party Websites</h2>
              <p>
                Our Sites may link to third-party websites (e.g., law firms). We do not control or endorse the content or privacy practices of these Linked Sites. Your dealings with third parties found through our Sites are solely between you and those parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">9. Indemnification</h2>
              <p>
                You agree to defend and indemnify Auto File Claim, its officers, and affiliates from any claims, losses, or liabilities (including attorney’s fees) arising from: (i) your use of the Services; (ii) your violation of these Terms; or (iii) any fraudulent information you provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">10. Disclaimers</h2>
              <p className="uppercase">
                YOUR USE OF THE SITE IS AT YOUR OWN RISK. WE PROVIDE THE SERVICES “AS IS” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE OR THAT ANY CLAIM WILL RESULT IN A FINANCIAL RECOVERY.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">11. Limitation of Liability</h2>
              <p className="uppercase">
                TO THE FULLEST EXTENT PERMITTED BY LAW, AUTO FILE CLAIM’S AGGREGATE LIABILITY SHALL NOT EXCEED $100.00 USD. WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICES OR YOUR DEALINGS WITH THIRD-PARTY PARTNERS.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">12. Security & Data Breach</h2>
              <p>
                We implement reasonable security measures. In the event of a data breach affecting personal information, we will notify affected users as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">13. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Sites at any time, for any reason, without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">14. Applicable Law & Venue</h2>
              <p>
                These Terms are governed by the laws of the State of Georgia, without regard to conflict of law principles. You agree that for purposes of jurisdiction, any interaction with our Services (including inbound calls) is deemed to have occurred in the State of Georgia, regardless of where you are physically located at the time of the call. You further agree that any legal action or proceeding not subject to the Arbitration provisions in Section 15 shall be brought exclusively in the state or federal courts located in Gwinnett County, Georgia (or the county of our principal place of business).
              </p>
            </section>

            <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h2 className="text-xl font-bold text-brand-dark mb-4">15. Dispute Resolution; Class Action & Jury Trial Waiver</h2>
              <p className="font-bold mb-2">PLEASE READ CAREFULLY. YOU ARE WAIVING YOUR RIGHT TO A JURY TRIAL.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mandatory Arbitration:</strong> Any dispute arising out of these Terms or the Services shall be resolved through binding individual arbitration administered by the American Arbitration Association (AAA) or JAMS.</li>
                <li><strong>Class Action Waiver:</strong> You agree that any proceedings will be conducted solely on an individual basis. You will not seek to have any dispute heard as a class action or representative proceeding.</li>
                <li><strong>Time Limit:</strong> Any claim must be filed within one (1) year after the cause of action accrues, or it is permanently barred.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">16. ADA Compliance</h2>
              <p>
                We are committed to accessibility. If you have difficulty navigating our content, please contact us at [Insert Accessibility Email].
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">17. Contact Us</h2>
              <div className="space-y-1">
                <p className="font-bold">Auto File Claim</p>
                <p>[Insert Address]</p>
                <p>[Insert Email]</p>
                <p>[Insert Phone Number]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;