import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Container, Section, Button } from "@/components/ui";
import { ProjectCard } from "@/components/features";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { businessUnits, getBusinessUnit } from "@/lib/data/business-units";
import { getProjectsByBusinessUnit } from "@/lib/data/projects";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businessUnits.map((unit) => ({
    slug: unit.id,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const unit = getBusinessUnit(slug);

  if (!unit) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: unit.name,
    description: unit.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const unit = getBusinessUnit(slug);

  if (!unit) {
    notFound();
  }

  const relatedProjects = getProjectsByBusinessUnit(unit.id);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-pgi-gold">
                {unit.name}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-pgi-gray-100 mb-4">
                {unit.tagline}
              </h1>
              <p className="text-lg text-pgi-gray-300 mb-8">
                {unit.description}
              </p>
              <Button size="lg" href="/contact">
                Get Started
                <ArrowRight size={20} />
              </Button>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pgi-black/50 to-transparent" />
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Services List */}
      <Section className="bg-pgi-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold text-pgi-gray-100 mb-6">
                What We Offer
              </h2>
              <p className="text-pgi-gray-300 mb-8">
                Our comprehensive range of services ensures that all your needs 
                are met with the highest standards of quality and professionalism.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ul className="space-y-4">
                {unit.services.map((service, index) => (
                  <li
                    key={service}
                    className="flex items-center gap-4 p-4 rounded-lg bg-pgi-charcoal border border-pgi-gray-700"
                  >
                    <CheckCircle className="text-pgi-gold flex-shrink-0" size={24} />
                    <span className="text-pgi-gray-100 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section className="bg-pgi-black">
          <Container>
            <FadeIn>
              <h2 className="font-display text-3xl font-bold text-pgi-gray-100 mb-4 text-center">
                Related Projects
              </h2>
              <p className="text-pgi-gray-300 text-center mb-12">
                See our work in action
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.slice(0, 3).map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>

            {relatedProjects.length > 3 && (
              <FadeIn className="mt-12 text-center">
                <Button variant="secondary" href="/projects">
                  View All Projects
                  <ArrowRight size={18} />
                </Button>
              </FadeIn>
            )}
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="bg-pgi-dark">
        <Container>
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-pgi-gray-100 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-pgi-gray-300 mb-8">
              Let's discuss how our {unit.name.toLowerCase()} services can help 
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                Contact Us
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="secondary" href="/services">
                View All Services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
