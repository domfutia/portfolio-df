'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {navigation} from '@/config/navigation';
import {LocaleSwitcher} from '@/components/ui/locale-switcher';
import {ThemeToggle} from '@/components/ui/theme-toggle';
import {useState} from 'react';

export function Header({locale, pathname}: {locale: string; pathname?: string}) {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);

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
            const display = item.key === 'esn' ? label.toUpperCase() : label;
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
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="mobileNav">
            {navigation.map((item) => {
              const label = t(item.key);
              const display = item.key === 'esn' ? label.toUpperCase() : label;
              return (
                <Link key={item.key} href={`/${locale}${item.href}`} onClick={() => setMenuOpen(false)}>
                  {display}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}