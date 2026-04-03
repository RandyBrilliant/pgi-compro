"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button, Input, Textarea } from "@/components/ui";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Create mailto link with form data
    const mailtoSubject = formData.subject || "Inquiry from Website";
    const mailtoBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Message:
${formData.message}
    `.trim();

    const mailtoUrl = `mailto:ptpgi2009@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    // Open email client
    window.location.href = mailtoUrl;

    // Show success message
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pgi-gold/10 text-pgi-gold mb-6">
          <Send size={32} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-pgi-gray-100 mb-4">
          Thank You!
        </h3>
        <p className="text-pgi-gray-300 mb-6">
          Your email client will open with a pre-filled message. We'll get back to you soon.
        </p>
        <Button
          variant="secondary"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="name"
          name="name"
          label="Full Name *"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address *"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="+62 xxx xxxx xxxx"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          id="subject"
          name="subject"
          label="Subject"
          placeholder="How can we help?"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      <Textarea
        id="message"
        name="message"
        label="Message *"
        placeholder="Tell us about your project or inquiry..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        className="min-h-[150px]"
      />

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
      >
        Send Message
        <Send size={18} />
      </Button>
    </form>
  );
}
