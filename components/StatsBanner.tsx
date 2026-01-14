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
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-gray-100">

            <div className="text-center group">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-blue-50 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-brand-dark mb-1">500k+</p>
              <p className="text-sm font-medium text-brand-gray">UK Claims/Year</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-green-50 text-green-600 group-hover:scale-110 transition-transform duration-300">
                <Car className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-brand-dark mb-1">Like-for-Like</p>
              <p className="text-sm font-medium text-brand-gray">Vehicle Match</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-orange-50 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-brand-dark mb-1">24-48hrs</p>
              <p className="text-sm font-medium text-brand-gray">Typical Delivery</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-brand-dark mb-1">£0</p>
              <p className="text-sm font-medium text-brand-gray">Cost To You</p>
            </div>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-10 pt-8 border-t border-gray-100">
            <p className="text-brand-gray mb-4">Join over 500,000 UK drivers who claim their entitlement each year</p>
            <div onClick={() => scrollToSection('contact')} className="inline-block cursor-pointer">
              <Button variant="accent" className="px-8 py-3 shadow-orange-500/25">
                Check Your Eligibility
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;