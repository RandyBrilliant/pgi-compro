import { ArrowRight } from "lucide-react";
import { Container, Section, SectionTitle, Button } from "@/components/ui";
import {
  HeroSection,
  BusinessUnitCard,
  ProjectCard,
  StatsSection,
  ClientLogosPlaceholder,
} from "@/components/features";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { businessUnits } from "@/lib/data/business-units";
import { getFeaturedProjects } from "@/lib/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Business Units Section */}
      <Section className="bg-pgi-black">
        <Container>
          <FadeIn>
            <SectionTitle
              subtitle="What We Do"
              title="Our Business Units"
              description="Four specialized divisions working together to deliver comprehensive property solutions"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessUnits.map((unit, index) => (
              <StaggerItem key={unit.id}>
                <BusinessUnitCard unit={unit} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Projects Section */}
      <Section className="bg-pgi-black">
        <Container>
          <FadeIn>
            <SectionTitle
              subtitle="Portfolio"
              title="Featured Projects"
              description="Discover our latest achievements in property development and construction"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12 text-center">
            <Button variant="secondary" href="/projects">
              View All Projects
              <ArrowRight size={18} />
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Client Logos Section */}
      <ClientLogosPlaceholder />

      {/* CTA Section */}
      <Section className="bg-pgi-dark relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pgi-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pgi-gold rounded-full blur-3xl" />
        </div>

        <Container className="relative">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-pgi-gold">
              Let's Build Together
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-pgi-gray-100 mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-pgi-gray-300 mb-8">
              Whether you're looking for property management, construction services,
              or investment opportunities, we're here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                Get in Touch
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="secondary" href="/about">
                Learn More About Us
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
