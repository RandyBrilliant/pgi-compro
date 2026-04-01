import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui";
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
      <Section className="bg-pgi-black pt-32">
        <Container>
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
      <Section className="bg-pgi-black">
        <Container>
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

      {/* Map Section Placeholder */}
      <Section size="md" className="bg-pgi-dark">
        <Container>
          <FadeIn>
            <div className="aspect-[21/9] rounded-lg overflow-hidden bg-pgi-charcoal border border-pgi-gray-700 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-pgi-gold/30 mx-auto mb-4" />
                <p className="text-pgi-gray-500">
                  Map Integration Placeholder
                  <br />
                  <span className="text-sm">Add Google Maps or similar integration here</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
