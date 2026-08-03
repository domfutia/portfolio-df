'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Button,
  Flex,
  IconButton,
  Line,
  SmartLink,
  Text
} from '@once-ui-system/core';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/config/navigation';
import { LocaleSwitcher } from '@/components/ui/locale-switcher';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="siteHeader">
      <Flex
        as="div"
        className="container"
        horizontal="space-between"
        vertical="center"
        gap="16"
        paddingY="16"
      >
        <SmartLink
          href={`/${locale}`}
          unstyled
          className="brandLink"
          aria-label="Homepage"
        >
          <Flex as="span" vertical="center" gap="12">
            <span className="brandLogo" aria-hidden="true">
              <svg viewBox="0 0 72 72">
                <rect x="8" y="8" width="56" height="56" rx="18" className="brandOuter" />
                <path d="M25 23H38C47 23 53 29 53 38C53 47 47 53 38 53H25V23Z" className="brandInner" />
                <path d="M31 29H38C43 29 47 33 47 38C47 43 43 47 38 47H31V29Z" className="brandCut" />
              </svg>
            </span>
            <Text as="span" variant="body-default-m">
              Domenico Futia
            </Text>
          </Flex>
        </SmartLink>

        <Flex as="nav" className="desktopNav" aria-label="Primary navigation" gap="8" vertical="center">
          {navigation.map((item) => {
            const label = t(item.key);
            const display = item.key === 'esn' ? label.toUpperCase() : label;

            return (
              <SmartLink
                key={item.key}
                href={`/${locale}${item.href}`}
                unstyled
                className="navLink"
              >
                <Text as="span" variant="body-default-s">
                  {display}
                </Text>
              </SmartLink>
            );
          })}
        </Flex>

        <Flex className="headerControls" vertical="center" gap="8">
          <LocaleSwitcher currentLocale={locale} />
          <ThemeToggle />
          <IconButton
            className="mobileMenuButton"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            variant="secondary"
            size="m"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </IconButton>
        </Flex>
      </Flex>

      {menuOpen ? (
        <>
          <Line />
          <Flex
            as="nav"
            className="mobileNav"
            direction="column"
            aria-label="Mobile navigation"
            gap="4"
            paddingY="12"
          >
            {navigation.map((item) => (
              <Button
                key={item.key}
                href={`/${locale}${item.href}`}
                asChild
                variant="tertiary"
                fillWidth
              >
                <Link onClick={() => setMenuOpen(false)} href={`/${locale}${item.href}`}>
                  {t(item.key)}
                </Link>
              </Button>
            ))}
          </Flex>
        </>
      ) : null}
    </header>
  );
}