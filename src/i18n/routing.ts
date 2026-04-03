import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/services': '/services',
    '/services/[slug]': '/services/[slug]',
    '/projects': '/projects',
    '/projects/[slug]': '/projects/[slug]',
    '/contact': '/contact',
    '/terms': '/terms',
    '/privacy': '/privacy',
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
