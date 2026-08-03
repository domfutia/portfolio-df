'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flex, Button } from '@once-ui-system/core';
import { routing } from '@/i18n/routing';

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);
  const pathWithoutLocale = parts.length > 1 ? parts.slice(1).join('/') : '';

  return (
    <Flex
      role="group"
      aria-label="Language switcher"
      className="localeSwitcher"
      gap="4"
    >
      {routing.locales.map((loc) => {
        const href = pathWithoutLocale ? `/${loc}/${pathWithoutLocale}` : `/${loc}`;
        const isActive = loc === currentLocale;

        return (
          <Button
            key={loc}
            asChild
            size="s"
            variant={isActive ? 'primary' : 'secondary'}
          >
            <Link href={href} aria-current={isActive ? 'true' : undefined}>
              {loc.toUpperCase()}
            </Link>
          </Button>
        );
      })}
    </Flex>
  );
}