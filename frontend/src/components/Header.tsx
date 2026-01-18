import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Industries', id: 'industries' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <img 
                src="/assets/Logo JPEG.jpg" 
                alt="Shri Shyam Trans Logistics" 
                className="h-14 w-14 rounded-full object-contain shadow-md group-hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-brand-navy leading-tight tracking-tight">Shri Shyam</h1>
              <p className="text-sm font-bold text-brand-orange tracking-wide">TRANS LOGISTICS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-foreground/80 hover:text-brand-navy transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className="text-sm font-semibold text-foreground/80 hover:text-brand-navy transition-colors relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-5 mr-4">
              <a href="tel:8432312949" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors group">
                <div className="p-2 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange/20 transition-colors">
                  <Phone className="h-4 w-4 text-brand-orange" />
                </div>
                <span>8432312949</span>
              </a>
              <a href="mailto:SSBTS3481@gmail.com" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand-navy transition-colors group">
                <div className="p-2 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange/20 transition-colors">
                  <Mail className="h-4 w-4 text-brand-orange" />
                </div>
                <span className="hidden xl:inline">SSBTS3481@gmail.com</span>
              </a>
            </div>
            <Button 
              onClick={onContactClick} 
              className="hidden md:inline-flex bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Get Quote
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <img 
                      src="/assets/Logo JPEG.jpg" 
                      alt="Shri Shyam Trans Logistics" 
                      className="h-12 w-12 rounded-full object-contain shadow-md"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-brand-navy">Shri Shyam</h2>
                      <p className="text-xs font-bold text-brand-orange">TRANS LOGISTICS</p>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-base font-semibold text-foreground hover:text-brand-navy transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                    <button
                      onClick={handleContactClick}
                      className="text-left text-base font-semibold text-foreground hover:text-brand-navy transition-colors"
                    >
                      Contact Us
                    </button>
                  </nav>
                  <div className="flex flex-col gap-3 pt-4 border-t">
                    <a href="tel:8432312949" className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-brand-orange" />
                      <span>8432312949</span>
                    </a>
                    <a href="mailto:SSBTS3481@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-brand-orange" />
                      <span>SSBTS3481@gmail.com</span>
                    </a>
                  </div>
                  <Button onClick={onContactClick} className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold">
                    Get Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
