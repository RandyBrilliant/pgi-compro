import { useTranslations } from 'next-intl';
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionTitle, Button, SectionBackground } from "@/components/ui";
import {
  HeroSection,
  BusinessUnitCard,
  ProjectCard,
  StatsSection,
  ClientLogos,
} from "@/components/features";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { useBusinessUnits } from "@/lib/data/business-units-i18n";
import { getFeaturedProjects } from "@/lib/data/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const businessUnits = useBusinessUnits();
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Business Units Section */}
      <Section className="bg-pgi-black">
        <Container>
          <FadeIn>
            <SectionTitle
              subtitle={t('businessUnits.subtitle')}
              title={t('businessUnits.title')}
              description={t('businessUnits.description')}
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
              subtitle={t('projects.subtitle')}
              title={t('projects.title')}
              description={t('projects.description')}
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
              {tCommon('buttons.viewProjects')}
              <ArrowRight size={18} />
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* CTA Section */}
      <Section className="bg-pgi-dark relative overflow-hidden">
        {/* Subtle cityscape background */}
        <SectionBackground
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
          alt="City skyline at night"
          opacity={10}
          overlayDirection="radial"
          grayscale
        />
        
        {/* Background decoration - gold orbs */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pgi-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pgi-gold rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-pgi-gold">
              {t('cta.title')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-pgi-gray-100 mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-pgi-gray-300 mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                {tCommon('buttons.getInTouch')}
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="secondary" href="/about">
                {tCommon('buttons.learnMore')}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
