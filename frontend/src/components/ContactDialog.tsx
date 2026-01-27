import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { useSubmitContactForm } from '@/hooks/useQueries';
import { toast } from 'sonner';
import ReCAPTCHA from 'react-google-recaptcha';
import { checkRateLimit, recordSubmission, formatTimeRemaining } from '@/lib/rateLimit';

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'quote' | 'contact';
}

export function ContactDialog({ open, onOpenChange, type }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceInterested: '',
    title: ''
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const submitMutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limit
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      toast.error(`Too many submissions. Please wait ${formatTimeRemaining(rateLimitCheck.remainingTime!)} before submitting again.`);
      return;
    }

    // Check CAPTCHA
    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA verification.');
      return;
    }

    try {
      formData.title = type === 'quote' ? 'Quote Request' : 'Contact Request';
      await submitMutation.mutateAsync({
        ...formData,
        captchaToken
      });

      // Record successful submission for rate limiting
      recordSubmission();

      toast.success('Thank you! We will contact you soon.');
      onOpenChange(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceInterested: '',
        title: ''
      });

      // Reset CAPTCHA
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  const isQuote = type === 'quote';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-brand-navy">
            {isQuote ? 'Request a Quote' : 'Contact Our Team'}
          </DialogTitle>
          <DialogDescription>
            {isQuote 
              ? 'Fill out the form below and we\'ll get back to you with a customized quote.'
              : 'Get in touch with us. We\'re here to help with all your logistics needs.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          {isQuote && (
            <div className="space-y-2">
              <Label htmlFor="service">Service Interested In *</Label>
              <Select
                value={formData.serviceInterested}
                onValueChange={(value) => setFormData({ ...formData, serviceInterested: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transportation">Transportation & Freight</SelectItem>
                  <SelectItem value="warehousing">3PL Warehousing & Distribution</SelectItem>
                  <SelectItem value="supply-chain">Supply Chain Solutions</SelectItem>
                  <SelectItem value="time-critical">Time-Critical Deliveries</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder={isQuote ? "Tell us about your logistics requirements..." : "How can we help you?"}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          {/* CAPTCHA */}
          <div className="space-y-2">
            <Label>Security Verification *</Label>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_SITE_KEY"} // Use env var or fallback
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
              size="normal"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
