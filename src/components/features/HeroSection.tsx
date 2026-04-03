"use client";

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button, Container } from "@/components/ui";

export function HeroSection() {
  const t = useTranslations('home.hero');
  const tCommon = useTranslations('common');

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Unsplash fallback */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1617570874287-db95c419c432?w=1920&q=80"
          alt="Classical Roman statue on Sant'Angelo Bridge representing imperial power and wisdom"
          fill
          className="object-cover grayscale"
          priority
          quality={75}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-pgi-black/75 via-pgi-black/60 to-pgi-black" />
      </div>

      {/* Fallback gradient if image fails to load */}
      <div className="absolute inset-0 bg-gradient-to-br from-pgi-black via-pgi-dark to-pgi-charcoal -z-10" />

      {/* Content */}
      <Container className="relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block mb-6 text-sm font-medium uppercase tracking-widest text-pgi-gold">
              {t('subtitle')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg text-pgi-gray-300 sm:text-xl max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" href="/projects">
              {tCommon('buttons.viewProjects')}
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary" href="/about">
              {tCommon('buttons.learnMore')}
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pgi-gold hover:text-pgi-gold-light transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-pgi-gold/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-pgi-gold/30 to-transparent" />
    </section>
  );
}
