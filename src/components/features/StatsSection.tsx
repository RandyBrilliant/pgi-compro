"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Container, Section, SectionTitle } from "@/components/ui";
import { stats } from "@/lib/config";
import type { StatItem } from "@/types";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - (1 - progress) ** 4;
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

interface StatCardProps {
  stat: StatItem;
}

function StatCard({ stat }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pgi-gold mb-2">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-pgi-gray-300">{stat.label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <Section className="bg-pgi-dark border-y border-pgi-charcoal">
      <Container>
        <SectionTitle
          subtitle="Our Impact"
          title="Numbers That Speak"
          description="Years of dedication and excellence reflected in our achievements"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
