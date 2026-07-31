'use client';

import {usePathname} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Link from 'next/link';

export function LocaleSwitcher({currentLocale}: {currentLocale: string}) {
  const pathname = usePathname();

  // pathname is like /it/about or /en/blog or just /
  // We need to extract the path without the locale prefix
  const segments = pathname.split('/').filter(Boolean); // ['it', 'about'] or ['en'] or []
  const pathWithoutLocale = segments.length > 1 ? segments.slice(1).join('/') : '';

  return (
    <div className="localeSwitcher" role="group" aria-label="Language switcher">
      {routing.locales.map((loc) => {
        const isActive = loc === currentLocale;
        const href = pathWithoutLocale ? `/${loc}/${pathWithoutLocale}` : `/${loc}`;
        return (
          <Link
            key={loc}
            href={href}
            className={isActive ? 'active' : ''}
            aria-current={isActive ? 'page' : undefined}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}