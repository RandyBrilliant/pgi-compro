import { routing } from '@/i18n/routing';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children }: Props) {
  return children;
}
