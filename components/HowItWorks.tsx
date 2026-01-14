import React from 'react';
import { FileText, Search, Car, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Step: React.FC<{ number: string, title: string, desc: string, icon: React.ElementType, isLast?: boolean }> = ({ number, title, desc, icon: Icon, isLast }) => (
  <div className="relative flex-1 flex flex-col items-center text-center">
    {!isLast && (
      <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-gray-200 to-gray-100 -z-10 transform translate-x-12"></div>
    )}

    <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-light flex items-center justify-center mb-6 shadow-sm z-10">
      <Icon className="w-8 h-8 text-brand-primary" />
    </div>

    <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider mb-4">
      Step {number}
    </div>

    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-brand-gray px-4 leading-relaxed">{desc}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">How Credit Hire Works</h2>
          <p className="text-brand-gray text-lg">Get your free replacement vehicle in 3 simple steps</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <Step
            number="01"
            title="Submit Your Details"
            desc="Complete our quick online form with your accident details. It only takes 2 minutes and there's no obligation."
            icon={FileText}
          />
          <Step
            number="02"
            title="We Verify Liability"
            desc="Our team contacts the at-fault party's insurer to confirm they accept liability for your claim."
            icon={Search}
          />
          <Step
            number="03"
            title="Car Delivered to You"
            desc="Once confirmed, your like-for-like replacement vehicle is delivered to your door – usually within 24-48 hours."
            icon={Car}
            isLast
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div onClick={() => scrollToSection('contact')} className="inline-block cursor-pointer">
            <Button variant="accent" className="px-10 py-4 text-lg shadow-orange-500/25">
              Start Your Claim Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;