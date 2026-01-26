# Environment Variables Setup

Create a `.env.local` file in the frontend directory with your reCAPTCHA site key:

```
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

## Getting Your reCAPTCHA Site Key:

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" or "+" button
3. Fill in:
   - Label: "Shri Shyam Logistics Contact Form"
   - reCAPTCHA type: v2 "I'm not a robot" Checkbox
   - Domains: Add your domain (localhost for development)
4. Click "Submit"
5. Copy the "Site Key" and paste it in your `.env.local` file

## EmailJS Setup Reminder:

Make sure you have:
- Service ID
- Template ID
- Public Key

From your EmailJS dashboard, these can be found in:
- Service ID: Email Services → [Your Service] → Service ID
- Template ID: Email Templates → [Your Template] → Template ID
- Public Key: Account → General → Public Key