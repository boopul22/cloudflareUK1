import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-brand-light/50 pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-brand-light to-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-gradient-to-tr from-brand-light to-orange-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-brand-primary text-xs font-bold uppercase tracking-wider mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              #1 Rated Claim Assistance
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-6 tracking-tight">
              Maximum Settlement. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Minimum Stress.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-gray mb-10 max-w-lg leading-relaxed">
              Don't fight insurance companies alone. We connect you with top legal experts to ensure you get paid for repairs, injuries, and lost wages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact">
                <Button variant="accent" className="shadow-orange-500/20 px-8 py-4 text-base">
                  Get Free Case Review
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="white" className="px-8 py-4 text-base">
                  How It Works
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm font-medium text-brand-dark/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No Win, No Fee</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative lg:h-full flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional consultant helping client" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium opacity-90">5.0/5.0 Rating</span>
                  </div>
                  <p className="font-bold text-lg">"They helped me get 3x what the insurance offered."</p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-12 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 z-20 animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="font-bold text-lg">$</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Avg. Recovery</p>
                    <p className="text-2xl font-bold text-brand-dark">$45,000+</p>
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