'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

export function LocaleSwitcher({
  currentLocale,
  currentPath,
}: {
  currentLocale: string;
  currentPath?: string;
}) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';

  return (
    <div className="localeSwitcher" aria-label="Language switcher" role="group">
      {routing.locales.map((locale) => {
        const href = `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
        const active = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={href}
            className={active ? 'localeActive' : 'localeLink'}
            aria-current={active ? 'true' : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
