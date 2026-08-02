'use client';

import {usePathname} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Link from 'next/link';

export function LocaleSwitcher({currentLocale}: {currentLocale: string}) {
  const pathname = usePathname();

  const parts = pathname.split('/').filter(Boolean);
  const pathWithoutLocale = parts.length > 1 ? parts.slice(1).join('/') : '';

  return (
    <div className="localeSwitcher" role="group" aria-label="Language switcher">
      {routing.locales.map((loc) => {
        const href = pathWithoutLocale ? `/${loc}/${pathWithoutLocale}` : `/${loc}`;
        const isActive = loc === currentLocale;
        return (
          <Link
            key={loc}
            href={href}
            className={isActive ? 'localeActive' : 'localeLink'}
            aria-current={isActive ? 'true' : undefined}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
