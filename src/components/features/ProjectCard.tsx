'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui';
import type { Project } from '@/types';
import { projectStatusBadgeVariant } from '@/lib/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projects');
  const title = t(`items.${project.slug}.title`);
  const description = t(`items.${project.slug}.description`);
  const location = t(`items.${project.slug}.location`);
  const statusLabel = t(`status.${project.status}`);

  return (
    <Link
      href={{ pathname: '/projects/[slug]', params: { slug: project.slug } }}
      className="group relative overflow-hidden rounded-lg bg-pgi-dark border border-pgi-charcoal transition-all duration-500 hover:border-pgi-gold/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pgi-black/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <Badge variant={projectStatusBadgeVariant(project.status)}>
            {statusLabel}
          </Badge>
        </div>

        <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-pgi-gold flex items-center justify-center text-pgi-black opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight size={20} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-pgi-gray-500 mb-2">
          <MapPin size={14} className="text-pgi-gold" />
          <span>{location}</span>
          <span className="mx-2">•</span>
          <span>{project.year}</span>
        </div>

        <h3 className="font-display text-lg font-semibold text-pgi-gray-100 mb-2 group-hover:text-pgi-gold transition-colors">
          {title}
        </h3>

        <p className="text-sm text-pgi-gray-300 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
