import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionTitle, Button } from "@/components/ui";
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
      <Section className="bg-pgi-black pt-32">
        <Container>
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
      <Section className="bg-pgi-dark">
        <Container>
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
