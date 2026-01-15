import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Hero: React.FC = () => {
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
    <div className="relative overflow-hidden bg-brand-light/50 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-40 lg:pb-32">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-brand-light to-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-gradient-to-tr from-brand-light to-orange-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-gray-100 shadow-sm text-brand-primary text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-brand-primary" />
              <span className="text-[10px] sm:text-xs">24/7 Expert Claims Assistance</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-brand-dark leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-4 md:mb-6 tracking-tight">
              Fast, Stress-Free <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Support for Non-Fault Accidents</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-brand-gray mb-5 sm:mb-6 md:mb-8 max-w-lg leading-relaxed">
              Secure the compensation you deserve with guidance from our dedicated UK-based specialists.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              <div onClick={() => scrollToSection('contact')}>
                <Button variant="accent" className="shadow-orange-500/20 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base w-full sm:w-auto cursor-pointer">
                  Register or Start Your Claim Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
              <a href="tel:08002465120" className="flex flex-col items-center sm:items-start group">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">Need Immediate Help?</span>
                <span className="text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">0800 246 5120</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm sm:text-base font-bold text-brand-dark mb-3 sm:mb-4">
                Rapid, Responsive Support
              </h3>
              <div className="space-y-2 sm:space-y-2.5">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-brand-dark/80">Full Claims Management</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-brand-dark/80">Like-for-Like Replacement Cars</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-brand-dark/80">24/7 Assistance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative lg:h-full flex items-center justify-center mt-4 sm:mt-0">
            <div className="relative w-full max-w-lg">
              {/* Main Image Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 z-10">
                <img
                  src="/images/hero-car-delivery.png"
                  alt="Customer receiving keys for replacement vehicle"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 text-white">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-medium opacity-90">Excellent Service</span>
                  </div>
                  <p className="font-bold text-sm sm:text-base md:text-lg">"Had my replacement car within 24 hours!"</p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-8 sm:-top-12 -right-4 sm:-right-8 bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-gray-50 z-20 animate-bounce-slow hidden sm:block">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="font-bold text-sm sm:text-base md:text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-bold">UK Claims/Year</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-brand-dark">500,000+</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;