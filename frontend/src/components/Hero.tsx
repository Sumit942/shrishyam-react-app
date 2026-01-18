import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  onRequestQuote: () => void;
  onContactTeam: () => void;
}

export function Hero({ onRequestQuote, onContactTeam }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/generated/logistics-hero-enhanced.dim_1920x1080.jpg" 
          alt="Logistics Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/98 via-brand-navy/92 to-brand-navy/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/10 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          {/* Logo Badge */}
          <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/30 shadow-2xl">
            <img 
              src="/assets/Logo JPEG.jpg" 
              alt="Shri Shyam Trans Logistics" 
              className="h-12 w-12 rounded-full object-contain bg-white p-1 shadow-lg"
            />
            <span className="text-white font-semibold text-base tracking-wide">Trusted Logistics Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            On Time. Faith. Reliability.
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-orange mb-8 leading-tight">
            End-to-End Transport & 3PL Logistics Solutions You Can Trust
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl leading-relaxed font-light">
            Shri Shyam Trans Logistics delivers dependable transportation and third-party logistics services designed to keep your supply chain moving—securely, efficiently, and on schedule.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <Button 
              size="lg" 
              onClick={onRequestQuote}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg font-semibold px-10 py-7 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 rounded-xl"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onContactTeam}
              className="border-2 border-white text-white hover:bg-white hover:text-brand-navy text-lg font-semibold px-10 py-7 bg-transparent backdrop-blur-sm rounded-xl transition-all hover:scale-105"
            >
              <Phone className="mr-2 h-6 w-6" />
              Contact Our Team
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 text-white/90">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <div className="h-2.5 w-2.5 rounded-full bg-brand-orange animate-pulse"></div>
              <span className="text-base font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <div className="h-2.5 w-2.5 rounded-full bg-brand-orange animate-pulse"></div>
              <span className="text-base font-medium">Pan-India Network</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <div className="h-2.5 w-2.5 rounded-full bg-brand-orange animate-pulse"></div>
              <span className="text-base font-medium">Secure & Reliable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}
