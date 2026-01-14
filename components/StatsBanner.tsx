import React from 'react';
import { Users, DollarSign, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from './Button';

const StatsBanner: React.FC = () => {
  return (
    <section className="py-10 -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-gray-100">

            <div className="text-center group">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-blue-50 text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-brand-dark mb-1">10k+</p>
              <p className="text-sm font-medium text-brand-gray">Clients Helped</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-green-50 text-green-600 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-brand-dark mb-1">$500M</p>
              <p className="text-sm font-medium text-brand-gray">Recovered</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-orange-50 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-brand-dark mb-1">24/7</p>
              <p className="text-sm font-medium text-brand-gray">Availability</p>
            </div>

            <div className="text-center group">
              <div className="mb-4 inline-flex p-3 rounded-2xl bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-3xl font-extrabold text-brand-dark mb-1">98%</p>
              <p className="text-sm font-medium text-brand-gray">Success Rate</p>
            </div>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-10 pt-8 border-t border-gray-100">
            <p className="text-brand-gray mb-4">Join thousands of satisfied clients</p>
            <a href="#contact">
              <Button variant="accent" className="px-8 py-3 shadow-orange-500/25">
                Get Your Free Case Review
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;