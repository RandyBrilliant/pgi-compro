import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section, SectionTitle } from "@/components/ui";
import { ProjectCard } from "@/components/features";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Projects",
  description: `Explore ${siteConfig.shortName}'s portfolio of completed and ongoing projects in property development, construction, and real estate.`,
};

export default function ProjectsPage() {
  const completedProjects = projects.filter((p) => p.status === "completed");
  const ongoingProjects = projects.filter((p) => p.status === "ongoing");

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ opacity: 0.1 }}>
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              alt="Modern architecture skyline"
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
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pgi-gray-100 mb-6">
              Projects That Define Excellence
            </h1>
            <p className="text-lg text-pgi-gray-300">
              From residential towers to commercial complexes, explore our diverse 
              portfolio of projects that showcase our commitment to quality and innovation.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Ongoing Projects */}
      {ongoingProjects.length > 0 && (
        <Section className="bg-pgi-dark">
          <Container>
            <FadeIn>
              <SectionTitle
                subtitle="In Progress"
                title="Ongoing Projects"
                description="Current developments shaping tomorrow's landscape"
                align="left"
              />
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* Completed Projects */}
      <Section className="bg-pgi-black">
        <Container>
          <FadeIn>
            <SectionTitle
              subtitle="Completed"
              title="Delivered Projects"
              description="A track record of successful completions"
              align="left"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>
    </>
  );
}
