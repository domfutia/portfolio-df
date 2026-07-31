'use client';

import {usePathname} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Link from 'next/link';
import {useLocale} from 'next-intl';

export function LocaleSwitcher({currentLocale}: {currentLocale: string}) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="localeSwitcher" role="group" aria-label="Language switcher">
      {routing.locales.map((loc) => {
        const isActive = loc === currentLocale;
        return (
          <Link
            key={loc}
            href={`/${loc}${pathname}`}
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