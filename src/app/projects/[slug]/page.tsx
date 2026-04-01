import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building2 } from "lucide-react";
import { Container, Section, Badge, Button } from "@/components/ui";
import { ProjectCard } from "@/components/features";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { projects, getProject } from "@/lib/data/projects";
import { getBusinessUnit } from "@/lib/data/business-units";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: project.images[0] ? [project.images[0]] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const businessUnit = getBusinessUnit(project.businessUnit);
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.businessUnit === project.businessUnit)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32">
        <Container>
          {/* Back Link */}
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-pgi-gray-300 hover:text-pgi-gold transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Content */}
            <SlideIn direction="left">
              <Badge variant={project.status === "completed" ? "success" : "warning"} className="mb-4">
                {project.status === "completed" ? "Completed" : "Ongoing"}
              </Badge>

              <h1 className="font-display text-4xl md:text-5xl font-bold text-pgi-gray-100 mb-6">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-6 text-pgi-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-pgi-gold" />
                  {project.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-pgi-gold" />
                  {project.year}
                </div>
                {businessUnit && (
                  <div className="flex items-center gap-2">
                    <Building2 size={18} className="text-pgi-gold" />
                    {businessUnit.name}
                  </div>
                )}
              </div>

              <p className="text-lg text-pgi-gray-300 leading-relaxed">
                {project.description}
              </p>
            </SlideIn>

            {/* Main Image */}
            <SlideIn direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <Section size="md" className="bg-pgi-dark">
          <Container>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-pgi-gray-100 mb-8">
                Project Gallery
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.slice(1).map((image, index) => (
                <StaggerItem key={image}>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section className="bg-pgi-black">
          <Container>
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold text-pgi-gray-100 mb-8">
                Related Projects
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <StaggerItem key={relatedProject.id}>
                  <ProjectCard project={relatedProject} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="bg-pgi-dark">
        <Container>
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-pgi-gray-100 mb-6">
              Interested in Similar Projects?
            </h2>
            <p className="text-lg text-pgi-gray-300 mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                Start Your Project
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="secondary" href="/projects">
                View All Projects
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
