import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {navigation} from '@/config/navigation';
import {LocaleSwitcher} from '@/components/ui/locale-switcher';
import {ThemeToggle} from '@/components/ui/theme-toggle';

export async function Header({locale}: {locale: string}) {
  const t = await getTranslations('nav');

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link href={`/${locale}`} className="brandMark" aria-label="Homepage">
          <svg viewBox="0 0 72 72" aria-hidden="true">
            <rect x="8" y="8" width="56" height="56" rx="18" className="brandOuter" />
            <path d="M25 23H38C47 23 53 29 53 38C53 47 47 53 38 53H25V23Z" className="brandInner" />
            <path d="M31 29H38C43 29 47 33 47 38C47 43 43 47 38 47H31V29Z" className="brandCut" />
          </svg>
          <span>Domenico Futia</span>
        </Link>

        <nav className="siteNav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.key} href={`/${locale}${item.href}`}>
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="headerActions">
          <LocaleSwitcher currentLocale={locale} pathname="/" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
