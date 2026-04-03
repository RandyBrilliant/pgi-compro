import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { siteConfig } from '@/lib/config';
import '../globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.seo as any;

  const isIndonesian = locale === 'id';
  
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${t?.companyName || siteConfig.name} | ${t?.tagline || siteConfig.tagline}`,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: t?.defaultDescription || siteConfig.description,
    keywords: [
      'property development',
      'real estate',
      'construction',
      'property management',
      'heavy machinery',
      'Indonesia',
      'Jakarta',
      'PGI',
      'Property Group Imperium',
      ...(isIndonesian ? [
        'pengembangan properti',
        'manajemen properti',
        'konstruksi',
        'alat berat',
      ] : []),
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
        { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        'id': `${siteConfig.url}/id`,
        'en': `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: isIndonesian ? 'id_ID' : 'en_US',
      alternateLocale: isIndonesian ? 'en_US' : 'id_ID',
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title: t?.companyName || siteConfig.name,
      description: t?.defaultDescription || siteConfig.description,
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: t?.defaultDescription || siteConfig.description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-pgi-black text-pgi-gray-100 font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
