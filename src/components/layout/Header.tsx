"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo, Container, Button, LocaleSwitcher } from "@/components/ui";
import { cn } from "@/lib/utils";

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'contact', href: '/contact' },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-pgi-black/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-pgi-gold",
                  pathname === item.href
                    ? "text-pgi-gold"
                    : "text-pgi-gray-300"
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <LocaleSwitcher />
            <Button size="sm" href="/contact">
              {t('buttons.getInTouch')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-pgi-gray-300 hover:text-pgi-gold"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-pgi-charcoal bg-pgi-black/95 backdrop-blur-md"
          >
            <Container>
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block py-2 text-base font-medium transition-colors hover:text-pgi-gold",
                      pathname === item.href
                        ? "text-pgi-gold"
                        : "text-pgi-gray-300"
                    )}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
                <div className="pt-4 border-t border-pgi-charcoal">
                  <LocaleSwitcher />
                </div>
                <Button className="w-full mt-4" href="/contact">
                  {t('buttons.getInTouch')}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
