import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Lock, Check, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // FormSubmit.co endpoint for autoclaimfiling.uk@gmail.com (using secure hash)
  const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/e4266fc982fdb1a764e34401d0224a97';
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxnVc9uUi16uAKfHIqUATXEp_D3zNO2eoYN-xlKTl3RlwCeL9UBPH7irsGoXiFZDYeGkg/exec';
  const EMAIL_SUBJECT = 'New Lead - Autoclaimfiling.online UK';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const submissionData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.details
    };

    try {
      // Send to both Email and Google Sheets in parallel
      const [emailResponse, sheetsResponse] = await Promise.allSettled([
        // Email notification via FormSubmit.co
        fetch(FORMSUBMIT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...submissionData,
            _subject: EMAIL_SUBJECT,
            _template: 'table'
          })
        }),
        // Google Sheets lead tracking
        fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Apps Script
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(submissionData)
        })
      ]);

      // Check if at least email was sent successfully
      const emailSuccess = emailResponse.status === 'fulfilled' && emailResponse.value.ok;

      if (emailSuccess) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', details: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left Text */}
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Get Your Free <br />
              <span className="text-brand-accent">Case Evaluation</span> Today
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Time is critical in accident claims. The sooner you file, the better your chances of securing a maximum settlement.
            </p>

            <div className="space-y-4 mb-10">
              {['Confidential Review', 'No Obligation', 'Immediate Assistance'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/50">
                    <Check className="w-3 h-3 text-brand-primary" />
                  </div>
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Lock className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm font-bold">SSL Secure</p>
                <p className="text-xs text-gray-400">Your data is encrypted and safe.</p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Check Your Eligibility</h3>
                <p className="text-brand-gray text-sm">Fill out the form below to get started.</p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 font-medium text-sm">
                    Thank you! We've received your request and will contact you shortly.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-6">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-800 font-medium text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-brand-dark ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-brand-dark placeholder-gray-400"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-brand-dark ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-brand-dark placeholder-gray-400"
                      placeholder="(555) 000-0000"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-brand-dark ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-brand-dark placeholder-gray-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-brand-dark ml-1">Accident Details (Optional)</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-brand-dark placeholder-gray-400 resize-none"
                    placeholder="Briefly tell us what happened..."
                  ></textarea>
                </div>

                {/* Honeypot for Spam Protection - hidden from users */}
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <input type="hidden" name="_captcha" value="false" />

                <Button
                  variant="primary"
                  fullWidth
                  className="py-4 text-lg shadow-blue-500/25"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>Get Free Review <ArrowRight className="w-5 h-5" /></>
                  )}
                </Button>

                <p className="text-[10px] text-gray-400 text-center leading-tight mt-4">
                  By clicking above, you agree to our <Link to="/terms" className="underline hover:text-brand-primary">Terms of Service</Link> and <Link to="/privacy" className="underline hover:text-brand-primary">Privacy Policy</Link>. You consent to receive phone calls and SMS messages from us to provide updates on your order and/or for marketing purposes.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;