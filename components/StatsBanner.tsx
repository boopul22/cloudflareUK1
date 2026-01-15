import React from 'react';
import { Users, Car, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const StatsBanner: React.FC = () => {
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
    <section className="py-10 -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-12">

          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="inline-block bg-blue-50 text-brand-primary font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-blue-100">
                Redefining the Claims Experience
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-brand-dark max-w-3xl mx-auto">Post-accident assistance you can trust</h3>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-12">

            <div className="flex flex-col items-start md:items-center text-left md:text-center group p-5 md:p-4 bg-white md:bg-transparent border border-gray-200 md:border-0 shadow-sm md:shadow-none hover:bg-gray-50 rounded-2xl transition-all duration-300">
              <div className="flex-shrink-0 mb-4 md:mb-4 inline-flex p-3 md:p-4 rounded-2xl bg-blue-50 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 md:w-8 md:h-8" />
              </div>
              <div className="w-full">
                <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-2 md:mb-3">No Win No Fee</h4>
                <p className="text-brand-gray leading-relaxed text-sm md:text-base">You only pay if we successfully recover your claim. Zero risk, complete peace of mind.</p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-center text-left md:text-center group p-5 md:p-4 bg-white md:bg-transparent border border-gray-200 md:border-0 shadow-sm md:shadow-none hover:bg-gray-50 rounded-2xl transition-all duration-300">
              <div className="flex-shrink-0 mb-4 md:mb-4 inline-flex p-3 md:p-4 rounded-2xl bg-green-50 text-green-600 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 md:w-8 md:h-8" />
              </div>
              <div className="w-full">
                <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-2 md:mb-3">Maximize your entitlement</h4>
                <p className="text-brand-gray leading-relaxed text-sm md:text-base">Our clients avoid hidden costs and excess fees by letting us manage the entire process.</p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-center text-left md:text-center group p-5 md:p-4 bg-white md:bg-transparent border border-gray-200 md:border-0 shadow-sm md:shadow-none hover:bg-gray-50 rounded-2xl transition-all duration-300">
              <div className="flex-shrink-0 mb-4 md:mb-4 inline-flex p-3 md:p-4 rounded-2xl bg-orange-50 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 md:w-8 md:h-8" />
              </div>
              <div className="w-full">
                <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-2 md:mb-3">Rapid 24-hour turnaround</h4>
                <p className="text-brand-gray leading-relaxed text-sm md:text-base">We prioritize your mobility, typically delivering a replacement vehicle within one day.</p>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pt-8 border-t border-gray-100">
            <div onClick={() => scrollToSection('contact')} className="inline-block cursor-pointer">
              <Button variant="accent" className="px-10 py-4 text-base md:text-lg shadow-orange-500/25">
                Check Your Eligibility
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-brand-gray text-sm mt-4">Fast, free, and no obligation to proceed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;