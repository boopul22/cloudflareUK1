import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
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
    <footer className="bg-brand-dark text-white pt-12 md:pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10 md:mb-16">

          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-brand-primary" fill="currentColor" fillOpacity={0.2} />
              <span className="font-extrabold text-2xl tracking-tight">Online Motor <span className="text-brand-primary">Claims</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-6">
              LRA Marketing Ltd is a company registered in England & Wales with registration number 09558492. Authorised and registered with the ICO Number ZA000045. Any service provider that you consent to us sharing your information with is an independent Firm from whom you will receive impartial and confidential advice. It may be possible for you to present a claim yourself for free, either to the person against who you wish to make a claim or a relevant insurer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Process</button></li>
              <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">Benefits</button></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-primary" />
                <a href="tel:08008761755" className="hover:text-white transition-colors cursor-pointer">0800 876 1755</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-primary" />
                <span className="hover:text-white transition-colors cursor-pointer">help@lramarketing.co.uk</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-primary mt-1" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LRA Marketing Ltd. All rights reserved.</p>
          <p>Not a law firm. Advertising service.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;