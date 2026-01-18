import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/assets/Logo JPEG.jpg" 
                alt="Shri Shyam Trans Logistics" 
                className="h-14 w-14 rounded-full object-contain bg-white p-1 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-bold">Shri Shyam</h3>
                <p className="text-sm text-brand-orange font-bold tracking-wide">TRANS LOGISTICS</p>
              </div>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              Your trusted partner for reliable transportation and 3PL logistics solutions across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Industries'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-brand-orange transition-colors text-base font-medium group flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-orange group-hover:w-2 transition-all"></span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-base text-white/80">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                <span>Transportation & Freight</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                <span>3PL Warehousing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                <span>Supply Chain Solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0"></span>
                <span>Time-Critical Deliveries</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-white/80 group">
                <div className="p-2 bg-brand-orange/20 rounded-lg group-hover:bg-brand-orange transition-colors">
                  <Phone className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors flex-shrink-0" />
                </div>
                <div>
                  <a href="tel:8432312949" className="hover:text-brand-orange transition-colors block font-medium">8432312949</a>
                  <a href="tel:9158312949" className="hover:text-brand-orange transition-colors block font-medium">9158312949</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-base text-white/80 group">
                <div className="p-2 bg-brand-orange/20 rounded-lg group-hover:bg-brand-orange transition-colors">
                  <Mail className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors flex-shrink-0" />
                </div>
                <a href="mailto:SSBTS3481@gmail.com" className="hover:text-brand-orange transition-colors break-all font-medium">
                  SSBTS3481@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-base text-white/80 group">
                <div className="p-2 bg-brand-orange/20 rounded-lg group-hover:bg-brand-orange transition-colors">
                  <Clock className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors flex-shrink-0" />
                </div>
                <div>
                  <p className="font-medium">7 AM - 11 PM</p>
                  <p className="text-sm text-white/70">Monday to Sunday</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-base text-white/80 group">
                <div className="p-2 bg-brand-orange/20 rounded-lg group-hover:bg-brand-orange transition-colors">
                  <MapPin className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors flex-shrink-0" />
                </div>
                <address className="not-italic font-medium leading-relaxed">
                  216, Shree Mahavir Plaza<br />
                  Opposite Gajanan Petrol Pump<br />
                  Mankoli Naka, Dapoda<br />
                  Bhiwandi, Thane (West)<br />
                  Maharashtra – 421302<br />
                  India
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-base text-white/80 text-center md:text-left">
              © {currentYear}. Built with <Heart className="inline h-4 w-4 text-brand-orange fill-brand-orange" /> using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline font-semibold"
              >
                caffeine.ai
              </a>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg text-white/70 hover:text-white hover:bg-brand-orange transition-all">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg text-white/70 hover:text-white hover:bg-brand-orange transition-all">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg text-white/70 hover:text-white hover:bg-brand-orange transition-all">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg text-white/70 hover:text-white hover:bg-brand-orange transition-all">
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
