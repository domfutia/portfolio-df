'use client';

import { useEffect, useState } from 'react';
import { IconButton } from '@once-ui-system/core';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('meta');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <IconButton
      variant="secondary"
      size="m"
      aria-label={t('themeToggle')}
      onClick={() => {
        if (!mounted) return;
        setTheme(isDark ? 'light' : 'dark');
      }}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </IconButton>
  );
}