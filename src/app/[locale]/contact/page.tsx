import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container, Section, SectionTitle, SectionBackground } from "@/components/ui";
import { ContactForm } from "@/components/features";
import { FadeIn, SlideIn } from "@/components/animations";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. We're here to help with your property development, construction, and real estate needs.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ opacity: 0.06 }}>
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
              alt="Modern office building"
              fill
              className="object-cover grayscale"
              sizes="100vw"
              priority
              quality={60}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-pgi-black via-transparent to-pgi-black" />
        </div>
        
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-pgi-gold">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pgi-gray-100 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-pgi-gray-300">
              Have a project in mind or want to learn more about our services? 
              We'd love to hear from you.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="bg-pgi-black relative overflow-hidden">
        {/* Subtle office/meeting room background */}
        <SectionBackground
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
          alt="Modern meeting room"
          opacity={5}
          overlayDirection="both"
          grayscale
        />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <SlideIn direction="left" className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-pgi-gray-100 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-pgi-gray-300">
                    Our team is ready to assist you with any inquiries about our 
                    services, projects, or partnership opportunities.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-pgi-gold/10 flex items-center justify-center">
                      <MapPin className="text-pgi-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-pgi-gray-100 mb-1">Address</h3>
                      <p className="text-pgi-gray-300">
                        {siteConfig.contact.address}
                        <br />
                        {siteConfig.contact.city}, {siteConfig.contact.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-pgi-gold/10 flex items-center justify-center">
                      <Phone className="text-pgi-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-pgi-gray-100 mb-1">Phone</h3>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-pgi-gray-300 hover:text-pgi-gold transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-pgi-gold/10 flex items-center justify-center">
                      <Mail className="text-pgi-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-pgi-gray-100 mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-pgi-gray-300 hover:text-pgi-gold transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-pgi-gold/10 flex items-center justify-center">
                      <Clock className="text-pgi-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-pgi-gray-100 mb-1">Office Hours</h3>
                      <p className="text-pgi-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Contact Form */}
            <SlideIn direction="right" delay={0.2} className="lg:col-span-2">
              <div className="p-8 rounded-lg bg-pgi-dark border border-pgi-charcoal">
                <h2 className="font-display text-2xl font-semibold text-pgi-gray-100 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section size="md" className="bg-pgi-dark">
        <Container>
          <FadeIn>
            <div className="aspect-[21/9] rounded-lg overflow-hidden bg-pgi-charcoal border border-pgi-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.123959077742!2d98.6429579!3d3.5589113999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fe9902d2c6b%3A0x70caa3b7ad8db2ec!2sJl.%20Abdul%20Hakim%20No.97%2C%20Padang%20Bulan%20Selayang%20I%2C%20Kec.%20Medan%20Selayang%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020155!5e0!3m2!1sid!2sid!4v1775211946640!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT. Property Group Imperium Office Location - Jl. Abdul Hakim No. 97, Medan"
              />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
