import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {navigation} from '@/config/navigation';
import {LocaleSwitcher} from '@/components/ui/locale-switcher';
import {ThemeToggle} from '@/components/ui/theme-toggle';

export async function Header({locale, pathname}: {locale: string; pathname?: string}) {
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
          {navigation.map((item) => {
            const label = t(item.key);
            const display = item.key === 'esn' ? label.toUpperCase() : label.toLowerCase();
            return (
              <Link key={item.key} href={`/${locale}${item.href}`}>
                {display}
              </Link>
            );
          })}
        </nav>

        <div className="headerActions">
          <LocaleSwitcher currentLocale={locale} currentPath={pathname ?? '/'} />
          <ThemeToggle />
          <button
            className="mobileMenuToggle"
            aria-label="Toggle menu"
            aria-expanded="false"
            onClick={(e) => {
              const btn = e.currentTarget;
              const nav = btn.nextElementSibling as HTMLElement | null;
              if (nav) {
                const isOpen = nav.classList.contains('mobileNavOpen');
                nav.classList.toggle('mobileNavOpen');
                btn.setAttribute('aria-expanded', String(!isOpen));
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>

        <div className="mobileNav">
          {navigation.map((item) => {
            const label = t(item.key);
            const display = item.key === 'esn' ? label.toUpperCase() : label.toLowerCase();
            return (
              <Link key={item.key} href={`/${locale}${item.href}`}>
                {display}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
