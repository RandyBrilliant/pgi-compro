import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, MapPin, Phone } from "lucide-react";
import { Container, Logo } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { businessUnits } from "@/lib/data/business-units";

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'contact', href: '/contact' },
] as const;

export function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="bg-pgi-dark border-t border-pgi-charcoal">
      <Container>
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-pgi-gray-300 mb-6">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-pgi-gray-100 mb-6">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-pgi-gray-300 hover:text-pgi-gold transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Units */}
          <div>
            <h3 className="font-display text-lg font-semibold text-pgi-gray-100 mb-6">
              {t('footer.ourServices')}
            </h3>
            <ul className="space-y-3">
              {businessUnits.map((unit) => (
                <li key={unit.id}>
                  <Link
                    href={`/services/${unit.id}` as any}
                    className="text-pgi-gray-300 hover:text-pgi-gold transition-colors"
                  >
                    {unit.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-pgi-gray-100 mb-6">
              {t('footer.contactUs')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-pgi-gray-300">
                <MapPin size={18} className="text-pgi-gold flex-shrink-0 mt-1" />
                <span>
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.city}, {siteConfig.contact.country}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-pgi-gray-300 hover:text-pgi-gold transition-colors"
                >
                  <Phone size={18} className="text-pgi-gold" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-pgi-gray-300 hover:text-pgi-gold transition-colors"
                >
                  <Mail size={18} className="text-pgi-gold" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-pgi-charcoal flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-pgi-gray-500">
          <p>
            © 2009 {siteConfig.name}. {t('footer.rights')}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-pgi-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-pgi-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
