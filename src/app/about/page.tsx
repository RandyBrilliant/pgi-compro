import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui";
import { ValueCard, TeamMemberCardPlaceholder } from "@/components/features";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { companyValues, visionMission } from "@/lib/data/values";
import { team, getTeamByLevel } from "@/lib/data/team";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} - our vision, mission, values, and the team behind our success in property development and management.`,
};

export default function AboutPage() {
  const leadership = getTeamByLevel(1);
  const directors = getTeamByLevel(2);
  const managers = getTeamByLevel(3);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-pgi-gold">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pgi-gray-100 mb-6">
                Building Excellence Since Day One
              </h1>
              <p className="text-lg text-pgi-gray-300 mb-6">
                PT. Property Group Imperium is a leading property development and management 
                company committed to delivering excellence in every project we undertake. 
                With a strong foundation built on integrity, innovation, and dedication, 
                we have established ourselves as a trusted name in the Indonesian real estate industry.
              </p>
              <p className="text-pgi-gray-300">
                Our integrated approach combines property management, construction, 
                heavy machinery services, and development to provide comprehensive 
                solutions for our clients' needs.
              </p>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                {/* Placeholder for about image */}
                <div className="absolute inset-0 bg-gradient-to-br from-pgi-dark to-pgi-charcoal flex items-center justify-center">
                  <span className="text-pgi-gray-500 text-lg">About Image Placeholder</span>
                </div>
                {/* Decorative border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-pgi-gold/30 rounded-lg -z-10" />
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission Section */}
      <Section className="bg-pgi-dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <FadeIn>
              <div className="p-8 rounded-lg bg-pgi-charcoal border border-pgi-gray-700">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-pgi-gold/10 text-pgi-gold border border-pgi-gold/20 mb-6">
                  <Eye size={28} />
                </div>
                <h2 className="font-display text-2xl font-semibold text-pgi-gray-100 mb-4">
                  Our Vision
                </h2>
                <p className="text-pgi-gray-300 leading-relaxed">
                  {visionMission.vision}
                </p>
              </div>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-lg bg-pgi-charcoal border border-pgi-gray-700">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-pgi-gold/10 text-pgi-gold border border-pgi-gold/20 mb-6">
                  <Target size={28} />
                </div>
                <h2 className="font-display text-2xl font-semibold text-pgi-gray-100 mb-4">
                  Our Mission
                </h2>
                <ul className="space-y-3">
                  {visionMission.mission.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-pgi-gray-300">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pgi-gold mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-pgi-black">
        <Container>
          <FadeIn>
            <SectionTitle
              subtitle="What Drives Us"
              title="Our Core Values"
              description="The principles that guide everything we do"
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <StaggerItem key={value.id}>
                <ValueCard value={value} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Team Section */}
      <Section className="bg-pgi-dark">
        <Container>
          <FadeIn>
            <SectionTitle
              subtitle="The People Behind PGI"
              title="Our Leadership Team"
              description="Meet the experienced professionals driving our success"
            />
          </FadeIn>

          {/* Leadership */}
          <FadeIn className="mb-16">
            <div className="flex justify-center">
              {leadership.map((member) => (
                <TeamMemberCardPlaceholder key={member.id} member={member} />
              ))}
            </div>
          </FadeIn>

          {/* Directors */}
          <FadeIn delay={0.2} className="mb-16">
            <h3 className="font-display text-xl font-semibold text-pgi-gray-100 text-center mb-8">
              Board of Directors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {directors.map((member) => (
                <TeamMemberCardPlaceholder key={member.id} member={member} />
              ))}
            </div>
          </FadeIn>

          {/* Managers */}
          <FadeIn delay={0.4}>
            <h3 className="font-display text-xl font-semibold text-pgi-gray-100 text-center mb-8">
              Management Team
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {managers.map((member) => (
                <TeamMemberCardPlaceholder key={member.id} member={member} />
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
