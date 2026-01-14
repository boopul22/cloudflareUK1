import React from 'react';
import { FileText, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
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
  return (
    <section id="how-it-works" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">How It Works</h2>
          <p className="text-brand-gray text-lg">Your path to compensation in 3 simple steps</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <Step
            number="01"
            title="Free Review"
            desc="Fill out our secure form or call us to tell us about your accident."
            icon={FileText}
          />
          <Step
            number="02"
            title="Expert Match"
            desc="We connect you with a specialist attorney who reviews your case details."
            icon={CheckCircle2}
          />
          <Step
            number="03"
            title="Claim Compensation"
            desc="Your attorney fights for your settlement while you focus on recovery."
            icon={PhoneCall}
            isLast
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a href="#contact">
            <Button variant="accent" className="px-10 py-4 text-lg shadow-orange-500/25">
              Start Your Free Review
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;