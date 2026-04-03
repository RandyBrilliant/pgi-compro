'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { localeNames } from '@/i18n/config';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname as any, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-pgi-gray-400" />
      <div className="flex gap-2">
        {Object.entries(localeNames).map(([code, name]) => (
          <button
            key={code}
            type="button"
            onClick={() => handleLocaleChange(code)}
            disabled={isPending}
            className={cn(
              'px-2 py-1 text-xs font-medium rounded transition-colors',
              locale === code
                ? 'bg-pgi-gold text-pgi-black'
                : 'text-pgi-gray-400 hover:text-pgi-gold hover:bg-pgi-charcoal',
              isPending && 'opacity-50 cursor-not-allowed'
            )}
            aria-label={`Switch to ${name}`}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
