import { useQuery, useMutation } from "@tanstack/react-query";
import emailjs from '@emailjs/browser';

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Industry = {
  name: string;
  icon: string;
};

export type CompanyInfo = {
  description: string;
  values: string[];
  phoneNumbers: string[];
  email: string;
};

const mockServices = [
  { title: "Transportation & Freight", description: "FTL and PTL services", icon: "truck" },
  { title: "3PL Warehousing", description: "Warehousing solutions", icon: "warehouse" }
];

const mockIndustries = [
  { name: "E-commerce", icon: "shopping-cart" },
  { name: "Manufacturing", icon: "factory" }
];

const mockCompanyInfo = {
  description: `Shri Shyam Trans Logistics is a trusted logistics and transportation company in India, providing FTL, PTL, and ODC road transportation services for businesses across industries. We offer reliable freight movement, container transportation, open body vehicle services, door-to-door delivery, and time-bound logistics solutions across Pan India routes. With a focus on timely delivery, safe cargo handling, and transparent operations, we support efficient supply chain management and long-term business growth`,
  values: ["Trust", "Discipline", "Transparency"],
  phoneNumbers: ["8432312949", "9158312949"],
  email: import.meta.env.VITE_SUPPORT_EMAILID || "info@shrishyamtranslogistics.in"
};

export function useServices() {
  return useQuery({ queryKey: ["services"], queryFn: async () => mockServices });
}

export function useIndustries() {
  return useQuery({ queryKey: ["industries"], queryFn: async () => mockIndustries });
}

export function useCompanyInfo() {
  return useQuery({ queryKey: ["companyInfo"], queryFn: async () => mockCompanyInfo });
}

export function useSubmitContactForm() {
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
      serviceInterested: string;
      title: string;
      captchaToken?: string;
    }) => {
      // Initialize EmailJS with your service details
      // You need to sign up at https://www.emailjs.com/ and get these values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Prepare email parameters
      const emailParams = {
        title: data.title,
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        service_interested: data.serviceInterested,
        to_email: mockCompanyInfo.email, // Send to company's email
        'g-recaptcha-response': data.captchaToken, // Include CAPTCHA token
      };

      try {
        // Send email using EmailJS
        await emailjs.send(serviceId, templateId, emailParams, publicKey);
        console.log("Contact form submitted and email sent:", data);
        return { success: true };
      } catch (error) {
        console.error("Failed to send email:", error);
        throw new Error("Failed to send email");
      }
    }
  });
}
