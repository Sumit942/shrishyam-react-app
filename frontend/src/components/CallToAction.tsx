import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface CallToActionProps {
  onRequestQuote: () => void;
}

export function CallToAction({ onRequestQuote }: CallToActionProps) {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Looking for a Reliable Logistics Partner?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Contact us today to discuss your transportation and logistics needs. Our team is ready to provide you with a customized solution.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Phone Card */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-orange rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3">Call Us</h3>
                  <a href="tel:8432312949" className="block text-2xl font-bold text-white/90 hover:text-brand-orange transition-colors mb-2">
                    8432312949
                  </a>
                  <a href="tel:9158312949" className="block text-2xl font-bold text-white/90 hover:text-brand-orange transition-colors">
                    9158312949
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-orange rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3">Email Us</h3>
                  <a href={`mailto:${import.meta.env.VITE_SUPPORT_EMAILID}`} className="block text-xl font-bold text-white/90 hover:text-brand-orange transition-colors break-all">
                    {import.meta.env.VITE_SUPPORT_EMAILID}
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-orange rounded-xl group-hover:scale-110 transition-transform">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3">Business Hours</h3>
                  <p className="text-2xl font-bold text-white/90">7 AM - 11 PM</p>
                  <p className="text-lg text-white/80 mt-1">Monday to Sunday</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-orange rounded-xl group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3">Visit Us</h3>
                  <address className="not-italic text-lg text-white/90 leading-relaxed">
                    216, Shree Mahavir Plaza<br />
                    Opposite Gajanan Petrol Pump<br />
                    Mankoli Naka, Dapoda<br />
                    Bhiwandi, Thane (West)<br />
                    Maharashtra – 421302<br />
                    India
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              onClick={onRequestQuote}
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-lg px-12 py-7 rounded-xl shadow-premium hover:shadow-glow transition-all hover:scale-105"
            >
              Request a Quote
            </Button>
            <p className="mt-6 text-white/70 text-sm">
              Get a customized quote within 24 hours
            </p>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold border-2 border-white">✓</div>
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold border-2 border-white">✓</div>
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold border-2 border-white">✓</div>
              </div>
              <span className="text-white font-semibold">Trusted by 500+ Businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
