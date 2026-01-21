import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { CoreServices } from './components/CoreServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { IndustriesWeServe } from './components/IndustriesWeServe';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ContactDialog } from './components/ContactDialog';
import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import { VehicleTypes } from './components/VehicleTypes';

function App() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<'quote' | 'contact'>('quote');

  const handleOpenDialog = (type: 'quote' | 'contact') => {
    setDialogType(type);
    setContactDialogOpen(true);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header onContactClick={() => handleOpenDialog('contact')} />
        <main>
          <Hero onRequestQuote={() => handleOpenDialog('quote')} onContactTeam={() => handleOpenDialog('contact')} />
          <AboutUs />
          <CoreServices />
          <VehicleTypes />
          <WhyChooseUs />
          <IndustriesWeServe />
          <CallToAction onRequestQuote={() => handleOpenDialog('quote')} />
        </main>
        <Footer />
        <ContactDialog 
          open={contactDialogOpen} 
          onOpenChange={setContactDialogOpen}
          type={dialogType}
        />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
