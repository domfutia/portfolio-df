'use client';

import {usePathname} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Link from 'next/link';

export function LocaleSwitcher({currentLocale}: {currentLocale: string}) {
  const pathname = usePathname();
  
  // Extract path without locale: /it/about -> about, /en -> '', / -> ''
  const parts = pathname.split('/').filter(Boolean);
  const pathWithoutLocale = parts.length > 1 ? parts.slice(1).join('/') : '';

  return (
    <div className="localeSwitcher">
      {routing.locales.map((loc) => {
        const href = pathWithoutLocale ? `/${loc}/${pathWithoutLocale}` : `/${loc}`;
        return (
          <Link
            key={loc}
            href={href}
            className={loc === currentLocale ? 'active' : ''}
          >
            {loc.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}