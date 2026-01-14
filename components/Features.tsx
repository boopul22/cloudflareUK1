import React from 'react';
import { Shield, Car, Clock, FileCheck, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string, color: string }> = ({ icon: Icon, title, description, color }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-xl transition-all duration-300 group">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${color} group-hover:scale-110 transform`}>
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-brand-gray leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
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
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold text-sm uppercase tracking-wider mb-3">Your Legal Right</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">
            Credit Hire: Your Entitlement Explained
          </h3>
          <p className="text-lg text-brand-gray">
            Under UK law, if you're in a non-fault accident, you have the legal right to be put back in the position you were before. This includes a like-for-like replacement vehicle – paid for by the at-fault party's insurer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Shield}
            title="Zero Cost To You"
            description="No excess, no upfront payment, no impact on your no-claims bonus. The at-fault driver's insurance covers everything."
            color="bg-blue-50 text-brand-primary"
          />
          <FeatureCard
            icon={Car}
            title="Like-for-Like Vehicle"
            description="Get a vehicle matching your car's size, type and specification. Not a basic courtesy car – a proper replacement."
            color="bg-green-50 text-green-600"
          />
          <FeatureCard
            icon={Clock}
            title="Delivered in 24-48 Hours"
            description="Once liability is confirmed, we arrange delivery to your door – often within just 24 hours of your claim."
            color="bg-orange-50 text-orange-500"
          />
          <FeatureCard
            icon={FileCheck}
            title="We Handle All Paperwork"
            description="We deal directly with the insurers and manage all documentation. You just focus on getting back to normal."
            color="bg-purple-50 text-purple-600"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div onClick={() => scrollToSection('contact')} className="inline-block cursor-pointer">
            <Button variant="primary" className="px-10 py-4 text-lg shadow-blue-500/25">
              Check Your Eligibility
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-brand-gray text-sm mt-4">Free, no-obligation eligibility check – takes 2 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default Features;