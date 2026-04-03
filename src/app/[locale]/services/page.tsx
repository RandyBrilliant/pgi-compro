import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container, Section, SectionTitle, Button, SectionBackground } from "@/components/ui";
import { BusinessUnitCard } from "@/components/features";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { businessUnits } from "@/lib/data/business-units";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore ${siteConfig.shortName}'s comprehensive services - property management, construction, heavy machinery rental, and property development.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ opacity: 0.08 }}>
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80"
              alt="Professional office space"
              fill
              className="object-cover grayscale"
              sizes="100vw"
              priority={false}
              quality={60}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-pgi-black via-transparent to-pgi-black" />
        </div>
        
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-pgi-gold">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pgi-gray-100 mb-6">
              Comprehensive Property Solutions
            </h1>
            <p className="text-lg text-pgi-gray-300">
              From property management to development, we offer a full spectrum of services 
              to meet all your real estate needs under one roof.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Business Units Grid */}
      <Section className="bg-pgi-black">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessUnits.map((unit, index) => (
              <StaggerItem key={unit.id}>
                <BusinessUnitCard unit={unit} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-pgi-dark relative overflow-hidden">
        {/* Subtle construction background */}
        <SectionBackground
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site"
          opacity={6}
          overlayDirection="radial"
          grayscale
        />
        
        <Container className="relative z-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-pgi-gray-100 mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-pgi-gray-300 mb-8">
              Our team is ready to discuss your specific requirements and create 
              a tailored solution for your project.
            </p>
            <Button size="lg" href="/contact">
              Contact Us
              <ArrowRight size={20} />
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
