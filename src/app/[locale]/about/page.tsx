import type { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { Container, Section, SectionTitle, SectionBackground } from "@/components/ui";
import { ValueCard, TeamMemberCard } from "@/components/features";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { companyValues, visionMission } from "@/lib/data/values";
import { team, getTeamByLevel } from "@/lib/data/team";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about.meta' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function AboutPage() {
  const leadership = getTeamByLevel(1);
  const directors = getTeamByLevel(2);
  const managers = getTeamByLevel(3);
  const t = useTranslations('about');

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ opacity: 0.07 }}>
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
              alt="Professional workspace"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-pgi-gold">
                {t('hero.title')}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pgi-gray-100 mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-pgi-gray-300 mb-6">
                {t('story.content')}
              </p>
              <p className="text-pgi-gray-300">
                {t('hero.description')}
              </p>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Modern office building - REPLACE: About company image"
                  fill
                  className="object-cover"
                />
                {/* Decorative border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-pgi-gold/30 rounded-lg -z-10" />
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission Section */}
      <Section className="bg-pgi-dark relative overflow-hidden">
        {/* Subtle abstract background */}
        <SectionBackground
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=80"
          alt="Abstract gradient background"
          opacity={6}
          overlayDirection="radial"
          grayscale={false}
        />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <FadeIn>
              <div className="p-8 rounded-lg bg-pgi-charcoal border border-pgi-gray-700">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-pgi-gold/10 text-pgi-gold border border-pgi-gold/20 mb-6">
                  <Eye size={28} />
                </div>
                <h2 className="font-display text-2xl font-semibold text-pgi-gray-100 mb-4">
                  {t('vision.title')}
                </h2>
                <p className="text-pgi-gray-300 leading-relaxed">
                  {t('vision.description')}
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
                  {t('mission.title')}
                </h2>
                <p className="text-pgi-gray-300 text-lg leading-relaxed">
                  {t('mission.description')}
                </p>
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
              subtitle={t('values.subtitle')}
              title={t('values.title')}
              description={t('team.description')}
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
      <Section className="bg-pgi-dark relative overflow-hidden">
        {/* Subtle office background */}
        <SectionBackground
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80"
          alt="Modern office space"
          opacity={5}
          overlayDirection="both"
          grayscale
        />
        
        <Container className="relative z-10">
          <FadeIn>
            <SectionTitle
              subtitle={t('team.subtitle')}
              title={t('team.title')}
              description={t('team.description')}
            />
          </FadeIn>

          {/* Leadership */}
          <FadeIn className="mb-16">
            <div className="flex justify-center">
              {leadership.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
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
                <TeamMemberCard key={member.id} member={member} />
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
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
