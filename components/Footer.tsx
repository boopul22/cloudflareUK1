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
              <span className="font-extrabold text-2xl tracking-tight">Auto File <span className="text-brand-primary">Claim</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed mb-6">
              Auto File Claim is a marketing and technology platform. We connect consumers with independent attorneys and intake specialists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-sm">Process</button></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/wa-health-policy" className="text-gray-400 hover:text-white transition-colors text-sm">WA Health Policy</Link></li>
              <li><Link to="/opt-out" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold text-brand-primary">Your Privacy Choices</Link></li>
              <li><Link to="/sponsors" className="text-gray-400 hover:text-white transition-colors text-sm">Our Partners & Sponsors</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-primary" />
                <span className="hover:text-white transition-colors cursor-pointer text-sm">privacy@autofileclaim.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-primary mt-1" />
                <span className="text-sm">[Insert Physical Address]</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-xs text-gray-500 space-y-4">
          <p className="uppercase font-bold tracking-wider text-gray-400">Advertisement</p>
          <p>
            This website is a paid advertisement for a joint marketing program. Auto File Claim is not a law firm, a lawyer referral service, or an insurance provider. We do not provide legal advice, medical advice, or insurance adjusting services. This advertisement is not a guarantee, warranty, or prediction regarding the outcome of your legal matter. Every case is different; the outcome depends on the unique laws, facts, and circumstances of each case. Hiring an attorney is an important decision that should not be based solely on advertising. You may request free information about an attorney’s background and experience. Individuals appearing on this website may be paid actors or spokespersons and not actual lawyers or clients. Any depictions of accidents or consultations are dramatizations. Use of this site, our forms, or our phone lines does not create an attorney-client relationship.
          </p>
          <p>
            FOR NORTH CAROLINA RESIDENTS: Auto File Claim is a legal advertising service. We do not offer legal services or representation. Legal services are available only through independent attorneys licensed in North Carolina. Contacting us does not create an attorney-client relationship.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
            <p>© {new Date().getFullYear()} Auto File Claim. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;