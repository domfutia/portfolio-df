import Link from 'next/link';
import {routing} from '@/i18n/routing';

export function LocaleSwitcher({currentLocale, pathname}: {currentLocale: string; pathname: string}) {
  return (
    <div className="localeSwitcher" aria-label="Language switcher">
      {routing.locales.map((locale) => {
        const href = `/${locale}${pathname === '/' ? '' : pathname}`;
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
