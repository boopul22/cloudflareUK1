import React from 'react';
import { Shield, Banknote, Gavel, Stethoscope, ArrowRight } from 'lucide-react';
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
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold text-sm uppercase tracking-wider mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">
            We Fight For Your Rights
          </h3>
          <p className="text-lg text-brand-gray">
            Our network of experts specializes in personal injury law to ensure you are treated fairly by insurance giants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Shield}
            title="No Upfront Fees"
            description="You pay nothing unless we win your case. We take on the financial risk so you don't have to."
            color="bg-blue-50 text-brand-primary"
          />
          <FeatureCard
            icon={Banknote}
            title="Max Settlement"
            description="We negotiate aggressively to recover damages for pain, suffering, and property loss."
            color="bg-green-50 text-green-600"
          />
          <FeatureCard
            icon={Stethoscope}
            title="Medical Care"
            description="Get access to top medical specialists even if you don't have health insurance right now."
            color="bg-red-50 text-red-500"
          />
          <FeatureCard
            icon={Gavel}
            title="Legal Experts"
            description="Verified attorneys with track records of winning against major insurance carriers."
            color="bg-purple-50 text-purple-600"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a href="#contact">
            <Button variant="primary" className="px-10 py-4 text-lg shadow-blue-500/25">
              Check Your Eligibility
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <p className="text-brand-gray text-sm mt-4">Free, no-obligation case evaluation</p>
        </div>
      </div>
    </section>
  );
};

export default Features;