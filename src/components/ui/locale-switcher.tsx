'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {routing} from '@/i18n/routing';

export function LocaleSwitcher({currentLocale, currentPath}: {currentLocale: string; currentPath?: string}) {
  const pathname = usePathname();

  // Strip the locale prefix to get the path segment after /{lang}
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';

  return (
    <div className="localeSwitcher" aria-label="Language switcher">
      {routing.locales.map((locale) => {
        const href = `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
        const active = locale === currentLocale;
        return (
          <Link key={locale} href={href} className={active ? 'localeActive' : 'localeLink'}>
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
