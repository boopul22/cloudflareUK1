import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const FinalCTA: React.FC = () => {
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
    <section className="bg-brand-primary py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready To Get Started?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Our team is standing by to help you understand your rights and options. It costs nothing to find out if you have a case.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div onClick={() => scrollToSection('contact')}>
            <Button variant="accent" className="px-10 py-4 text-lg w-full sm:w-auto cursor-pointer">
              Get Free Claim Review
            </Button>
          </div>
          <a href="tel:8884080938">
            <Button variant="white" className="px-10 py-4 text-lg w-full sm:w-auto text-brand-primary">
              Call 888.408.0938
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;