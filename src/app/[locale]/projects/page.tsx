import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container, Section, SectionTitle } from "@/components/ui";
import { ProjectCard } from "@/components/features";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { projects } from "@/lib/data/projects";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: t("page.metaTitle"),
    description: t("page.metaDescription"),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const completedProjects = projects.filter((p) => p.status === "completed");
  const ongoingProjects = projects.filter((p) => p.status === "ongoing");

  return (
    <>
      <Section className="bg-pgi-black pt-32 relative overflow-hidden">
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
              {t("page.heroEyebrow")}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pgi-gray-100 mb-6">
              {t("page.heroTitle")}
            </h1>
            <p className="text-lg text-pgi-gray-300">{t("page.heroDescription")}</p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-pgi-black">
        <Container>
          <FadeIn>
            <SectionTitle
              subtitle={t("page.deliveredSubtitle")}
              title={t("page.deliveredTitle")}
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

      {ongoingProjects.length > 0 && (
        <Section className="bg-pgi-dark border-t border-pgi-charcoal/50">
          <Container>
            <FadeIn>
              <SectionTitle
                subtitle={t("page.ongoingSubtitle")}
                title={t("page.ongoingTitle")}
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
    </>
  );
}
