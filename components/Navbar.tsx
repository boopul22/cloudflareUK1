import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
    setIsOpen(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <div className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-brand-primary/10' : 'bg-white/20'}`}>
              <Shield className={`h-6 w-6 ${scrolled ? 'text-brand-primary' : 'text-brand-dark'}`} fill="currentColor" fillOpacity={0.2} />
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand-dark">
              Online Motor <span className="text-brand-primary">Claims</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-brand-gray hover:text-brand-primary font-medium transition-colors text-sm">Home</Link>
            <button onClick={() => handleNavClick('how-it-works')} className="text-brand-gray hover:text-brand-primary font-medium transition-colors text-sm bg-transparent border-none cursor-pointer">How It Works</button>
            <button onClick={() => handleNavClick('features')} className="text-brand-gray hover:text-brand-primary font-medium transition-colors text-sm bg-transparent border-none cursor-pointer">Benefits</button>

            <div className="h-6 w-px bg-gray-200"></div>

            <div className="flex items-center gap-4">
              <a href="tel:08008620908" className="flex items-center gap-2 text-brand-dark font-bold hover:text-brand-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>0800 862 0908</span>
              </a>
              <div onClick={() => handleNavClick('contact')}>
                <Button variant="accent" className="!py-2 !px-5 text-xs cursor-pointer">
                  Free Case Review
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-gray-100">
          <div className="px-4 pt-4 pb-8 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-brand-dark hover:bg-brand-light rounded-xl transition-colors">Home</Link>
            <button onClick={() => handleNavClick('how-it-works')} className="block w-full text-left px-4 py-3 text-base font-medium text-brand-dark hover:bg-brand-light rounded-xl transition-colors bg-transparent border-none">How It Works</button>
            <button onClick={() => handleNavClick('features')} className="block w-full text-left px-4 py-3 text-base font-medium text-brand-dark hover:bg-brand-light rounded-xl transition-colors bg-transparent border-none">Benefits</button>
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div onClick={() => handleNavClick('contact')}>
                <Button fullWidth variant="accent">
                  Get Free Case Review
                </Button>
              </div>
              <a href="tel:08008620908" onClick={() => setIsOpen(false)}>
                <Button fullWidth variant="primary">
                  Call: 0800 862 0908
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;